import { Router } from "express"
import { getUserNotes, postUserNote, updateUserNote } from "../controller/getNotes.js"

const noteRoute = Router()

noteRoute.get("/get-note/:id", getUserNotes)
noteRoute.post("/post-note", postUserNote)
noteRoute.put("/update-note/:id", updateUserNote)


export default noteRoute