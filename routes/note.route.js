import Router from "express"


const noteRoute = Router()

noteRoute.get("/get-note/:id", getUserNoteData)



export default noteRoute