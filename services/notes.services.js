import Note from "../model/notes.js"

export const getNoteById = async (id) => {
    const note = await Note.find({ id })
    return note
}


export default getNoteById
