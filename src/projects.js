import { Todo } from "./todo.js"

export class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.todoArray = [];
        this.idCounter = 1; // this sets ids of todos
    }

    addTodo(todo) {
        todo.id = this.idCounter;
        this.idCounter++;
        this.todoArray.push(todo);
    }

    removeTodo(todo) {
        this.todoArray = this.todoArray.filter(item => item.id !== todo.id);
    }

}


