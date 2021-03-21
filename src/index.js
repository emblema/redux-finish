import configureStore from "./store/configureStore";
import { loadBugs, assignBugToUser } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(projectAdded({ name: "New Project" }));

// UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 5)), 2000);
