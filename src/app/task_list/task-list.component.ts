import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CookieService } from 'ngx-cookie';
import { AppCookieStorage } from '../classes/AppCookieStorage';
import { TaskList } from '../classes/TaskList';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public currentTaskList: TaskList;

  constructor(private cookiesService: CookieService, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let taskListId: string | null;
    if (this.currentRoute.parent != null) {
      this.currentRoute.paramMap.subscribe(params => {
        taskListId = params.get('id');
      });
    }
    const appData = this.cookiesService.getObject('ngTasks') as AppCookieStorage;

    this.currentTaskList = appData[taskListId];
    console.log(appData);
    console.log(this.currentTaskList);
  }
}
