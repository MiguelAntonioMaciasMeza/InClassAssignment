import { getNoteById } from "../services/notes.services.js"

const checkNoteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const note = await getNoteById({ id })
        if(id.length == 0) {
            throw new Error("Note does not exist")
        }
        next()
    } catch(err) {
        console.log(err)
    }
    // console.log("inside middleware")
    
}

export default checkNoteById