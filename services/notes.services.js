import Note from "../model/notes.js"

export const getUserById = async (id) => {
    const note = await Note.find({ id })
    return note
}


export default getUserById
