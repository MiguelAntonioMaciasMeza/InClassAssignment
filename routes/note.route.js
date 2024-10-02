import { Router } from "express";
import { getUserNotes } from "../controller/getNotes.js";

const noteRoute = Router();

noteRoute.get("/get-note/:id", getUserNotes);

export default noteRoute;