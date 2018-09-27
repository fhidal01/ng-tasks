import { ParentTask } from './ParentTask';
import { groupBy } from 'lodash';

export class TaskList {
    id: string;
    name: string;
    tasks: Array<ParentTask>;

    constructor(id: string) {
        this.id = id;
        this.name = 'My Tasks';
        this.tasks = new Array<ParentTask>();
    }

    groupByCompletionStatus() {
        console.log('hitting');
        return groupBy(this.tasks, 'completed');
    }
}
