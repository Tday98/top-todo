import { Project } from "./projects.js"

class ProjectManager {
    constructor() {
        this.projects = [];
        this.activeProject = null;
        this.createProject("General", "Default Todos");
        this.setActiveProject("General");
    }

    createProject(name, description) {
        this.projects.push(new Project(name, description));
    }

    deleteProject(projectName) {
        this.projects = this.projects.filter(project => project.name !== projectName);
    }

    getProject(name) {
        return this.projects.find(project => project.name === name);
    }

    setActiveProject(name) {
        const project = this.getProject(name);

        if (project === undefined)
            return

        this.activeProject = project;
    }
}