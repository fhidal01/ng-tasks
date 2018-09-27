import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TaskHttpService } from '../services/task-http.service';

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
