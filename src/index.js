import { ProjectManager } from "./app"
import { DomController } from "./domController"

const projectManager = new ProjectManager();
const domController = new DomController(projectManager);