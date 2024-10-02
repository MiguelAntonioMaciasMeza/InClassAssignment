import { Schema, model } from "mongoose"

const NoteSchema = new Schema({
    id: Number,
    createdDate: Date,
    title: String,
    description: String
})

const Note = model("Note", NoteSchema)

export default Note