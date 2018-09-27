import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie';

import { AppCookieStorage } from '../classes/AppCookieStorage';
import { ParentTask } from '../classes/ParentTask';
import { TaskList } from '../classes/TaskList';


@Injectable()
export class TaskHttpService {
    private APP_DATA_KEY = 'ngTask';

    constructor(private cookiesService: CookieService) {
    }

    public doesUserHaveTasks(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            const appData = this.cookiesService.getObject(this.APP_DATA_KEY) as AppCookieStorage;
            resolve((appData !== undefined && Object.keys(appData).length > 0));
        }).then((result) => {
            return result;
        });
    }

    public getFirstTaskListId(): Promise<string>  {
        return new Promise<string>(resolve => {
            const appData = this.cookiesService.getObject(this.APP_DATA_KEY) as AppCookieStorage;
            resolve(Object.keys(appData)[0]);
        }).then((result) => {
            return result;
        });
    }

    public initializeAppDataWithEmptyTaskList(): Promise<string> {
        return new Promise<string>(resolve => {
            const listId = Date.now().toString();
            this.cookiesService.putObject(this.APP_DATA_KEY, new AppCookieStorage(listId, new TaskList(listId)));
            resolve(listId);
        }).then((result) => {
            return result;
        });
    }

    public getTaskList(taskListId: string): Promise<TaskList> {
        return new Promise<TaskList>(resolve => {
            const appData = this.cookiesService.getObject(this.APP_DATA_KEY) as AppCookieStorage;
            resolve(appData[taskListId]);
        }).then((result) => {
            return result;
        });
    }

    public saveTask(taskListId: string, task: ParentTask): Promise<ParentTask> {
        return new Promise<ParentTask>(resolve => {
            const appData = this.cookiesService.getObject(this.APP_DATA_KEY) as AppCookieStorage;
            appData[taskListId].tasks.push(task);
            this.cookiesService.putObject(this.APP_DATA_KEY, appData);
            resolve(task);
        }).then((result) => {
            return result;
        });
    }
}
