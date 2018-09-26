import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie';
import { AppCookieStorage } from '../classes/AppCookieStorage';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  constructor(private cookiesService: CookieService) {
    const appData = this.cookiesService.getObject('ngTasks') as AppCookieStorage;

    console.log(appData);
  }
}
