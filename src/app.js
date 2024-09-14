
import { loadData } from "./data/load-data.js";
import { initRouter } from "./route.js";

loadData()
window.addEventListener("load", initRouter)