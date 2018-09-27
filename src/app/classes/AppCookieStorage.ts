import { ParentTask } from './ParentTask';
import { TaskList } from './TaskList';

export class AppCookieStorage {
    [key: string]: TaskList;

    constructor(key: string, taskList: TaskList) {
        this[key] = taskList;
    }
}
