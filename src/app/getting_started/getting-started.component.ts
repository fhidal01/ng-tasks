import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CookieService } from 'ngx-cookie';

import { AppCookieStorage } from '../classes/AppCookieStorage';
import { ParentTask } from '../classes/ParentTask';
@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  constructor(private router: Router, private cookiesService: CookieService) {}

  public getStarted () {
    console.log('hitting');
    const appData = this.cookiesService.getObject('ngTasks') as AppCookieStorage;

    if (appData === undefined) {
      const listId = Math.floor((Math.random() * 1000000) + 1).toString();
      this.cookiesService.putObject('ngTasks', new AppCookieStorage(listId, new Array<ParentTask>()));
      this.router.navigate(['../list', listId]);
    }
  }
}
