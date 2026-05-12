import { ProjectManager } from "./app.js"
import { DomController } from "./domController.js"

const projectManager = new ProjectManager();
const domController = new DomController(projectManager);

domController.renderProjects(); 
domController.renderTodos(); 