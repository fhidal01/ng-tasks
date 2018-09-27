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

  private currentTaskList: TaskList;
  public completedTasks: Array<ParentTask>;
  public inprogressTasks: Array<ParentTask>;
  public addingNewtask = false;
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
        this.updateTaskLists(taskList);
      }
    );

  }

  public addNewTask() {
    this.newTask = new ParentTask();
    this.addingNewtask = true;
  }

  public save() {
    if (this.isNewTaskValid()) {
      this.taskHttpService.saveTask(this.currentTaskList.id, this.newTask).then(
        (savedTask: ParentTask) => {
          this.inprogressTasks.push(savedTask);
        }
      );
    }

    this.addingNewtask = false;
  }

  public toggleTaskStatus(task: ParentTask) {
    task.completed = !task.completed;
    this.taskHttpService.toggleTaskStatus(this.currentTaskList.id, task).then(
      (taskList: TaskList) => {
        this.updateTaskLists(taskList);
      }
    );

  }

  private updateTaskLists(taskList: TaskList) {
    this.currentTaskList = taskList;
    const grouped = this.currentTaskList.groupByCompletionStatus();
    this.completedTasks = grouped[true] ? grouped[true] : new Array<ParentTask>();
    this.inprogressTasks = grouped[false] ? grouped[false] : new Array<ParentTask>();

  }

  private isNewTaskValid() {
    return this.newTask.name !== undefined && this.newTask.name.trim().length > 0;
  }

}
