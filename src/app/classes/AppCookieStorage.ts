import { ParentTask } from './ParentTask';

export class AppCookieStorage {
    [key: string]: Array<ParentTask>;

    constructor(key: string, taskList: Array<ParentTask>) {
        this[key] = taskList;
    }
}
