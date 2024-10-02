import { Router } from "express"
import { getUserNotes, postUserNote } from "../controller/getNotes.js"

const noteRoute = Router()

noteRoute.get("/get-note/:id", getUserNotes)
noteRoute.post("/post-note", postUserNote)


export default noteRoute