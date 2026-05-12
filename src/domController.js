import { projectManager } from "./app.js"

export class DomController {
    constructor(projectManager) {
        this.projectManager = projectManager;

        this.projectList = document.getElementById('project-list');
        this.todoList = document.getElementById('todo-list');
        this.activeProjectName = document.getElementById('active-project-name');
        this.addProjectBtn = document.getElementById('add-project-btn');
        this.addTodoBtn = document.getElementById('add-todo-btn');
    
        this.setupEventListeners();

    }

    setupEventListeners() {
        const submitForm = document.getElementById('project-form');
        const submit = document.getElementById('submit-project');
        const cancel = document.getElementById('cancel-project');

        this.addProjectBtn.addEventListener('click', () => {
            submitForm.style.display = 'block';
        });

        submit.addEventListener('click', () => {
            const projectName = document.getElementById('project-name').value;
            const projectDescription = document.getElementById('project-description').value;
            
            this.projectManager.createProject(projectName, projectDescription);

            submitForm.style.display = 'none';

            this.renderProjects();
        });

        cancel.addEventListener('click', () => {
            submitForm.style.display = 'none';
        });

    }

    renderProjects() {
        this.projectList.innerHTML = '';

        this.projectManager.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.textContent = project.name;


            projectDiv.addEventListener('click', () => {
                this.projectManager.setActiveProject(project.name);
                this.renderTodos();
            });
            
            this.projectList.appendChild(projectDiv);
        });

    }

    renderTodos() {
        this.todoList.innerHTML = '';

        this.projectManager.activeProject.todoArray.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.textContent = todo.title;
            const todoDesc = document.createElement('p');
            todoDesc.textContent = todo.description;

            todoDiv.appendChild(todoDesc);
            this.todoList.appendChild(todoDiv);
        });
    this.activeProjectName.textContent = this.projectManager.activeProject.name;  
    }

}