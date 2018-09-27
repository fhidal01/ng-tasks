import { Task } from './Task';

export class ParentTask extends Task {
    subTasks: Array<Task>;

    constructor() {
        super();
        this.subTasks = new Array<Task>();
    }
}
