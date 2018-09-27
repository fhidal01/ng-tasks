import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TaskHttpService } from '../services/task-http.service';

import { AppCookieStorage } from '../classes/AppCookieStorage';
import { ParentTask } from '../classes/ParentTask';
import { TaskList } from '../classes/TaskList';
@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  constructor(private router: Router, private taskHttpClient: TaskHttpService) { }

  public getStarted() {

    this.taskHttpClient.doesUserHaveTasks().then(
      (taskExist: boolean) => {
        if (taskExist) {
          this.taskHttpClient.getFirstTaskListId().then(
            (id: string) => {
              this.router.navigate(['../list', id]);
            }
          );
        } else {
          this.taskHttpClient.initializeAppDataWithEmptyTaskList().then(
            (listId: string) => {
              this.router.navigate(['../list', listId]);
            }
          );
        }
      }
    );

  }
}
