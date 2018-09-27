import { ParentTask } from './ParentTask';

export class TaskList {
    id: string;
    name: string;
    tasks: Array<ParentTask>;

    constructor(id: string) {
        this.id = id;
        this.name = 'My Tasks';
        this.tasks = new Array<ParentTask>();
    }
}
