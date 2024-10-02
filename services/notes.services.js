import Note from "../model/notes.js"

export const getNoteById = async (id) => {
    const note = await Note.find({ id })
    return note
}

export const createNewNote = async (userNote) => {
    console.log(userNote)
    await Note.create(userNote);
}

export default getNoteById
