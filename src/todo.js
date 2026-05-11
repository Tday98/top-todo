export class Todo {
    constructor(title, description, dueDate, priority) {
        this.id = null;
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate); // "YYYY-MM-DD"
        this.priority = priority;
        this.done = false;
        this.note = null;
    }

}

const myTodo = new Todo("Do dishes", "have to get it done before bedtime", "05/08/2026", "medium");
