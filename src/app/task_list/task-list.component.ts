import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskHttpService } from '../services/task-http.service';

import { AppCookieStorage } from '../classes/AppCookieStorage';
import { TaskList } from '../classes/TaskList';
import { ParentTask } from '../classes/ParentTask';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public addingNewtask = false;
  public currentTaskList: TaskList;
  public newTask: ParentTask;

  constructor(private currentRoute: ActivatedRoute, private taskHttpService: TaskHttpService) { }

  ngOnInit(): void {
    let taskListId: string | null;
    if (this.currentRoute.parent != null) {
      this.currentRoute.paramMap.subscribe(params => {
        taskListId = params.get('id');
      });
    }

    this.taskHttpService.getTaskList(taskListId).then(
      (taskList: TaskList) => {
        this.currentTaskList = taskList;
      }
    );
    console.log(this.currentTaskList);
  }

  public addNewTask() {
    this.newTask = new ParentTask();
    this.addingNewtask = true;
  }

  public save() {
    if (this.isNewTaskValid()) {
      this.taskHttpService.saveTask(this.currentTaskList.id, this.newTask).then(
        (savedTask: ParentTask) => {
          this.currentTaskList.tasks.push(savedTask);
        }
      );
    }

    this.addingNewtask = false;
  }

  public toggleTaskStatus(task: ParentTask) {
    task.completed = !task.completed;
    this.taskHttpService.toggleTaskStatus(this.currentTaskList.id, task);
  }

  private isNewTaskValid() {
    return this.newTask.name !== undefined && this.newTask.name.trim().length > 0;
  }

  print() {
    console.log(this.currentTaskList);
  }
}
