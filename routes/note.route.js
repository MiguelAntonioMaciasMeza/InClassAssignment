import { Router } from "express"
import { getUserNotes } from "../controller/getNotes.js"

const noteRoute = Router()

noteRoute.get("/get-note", getUserNotes)



export default noteRoute