export class Task {
    id: string;
    name: string;
    date: string;
    additionalDetails: string;
    completed: boolean;

    constructor() {
        this.id = Date.now().toString();
        this.completed = false;
    }
}
