import {getUserById, createNewNote, updateNoteById} from "../services/notes.services.js"


export const getUserNotes = async (req,res) =>{
  try{
    const id = req.params.id;
    console.log(id)
    const note = await getUserById(id);
    console.log(note);
    res.status(200).json({note});
  }catch(err){
    console.log(err)
  }
}

export const postUserNote = async (req, res) => {
  try{
    const note = req.body
    console.log(note)
    await createNewNote(note)
    res.json({"status": "Note added successfully"})
  } catch(err) {
    console.log(err)
  }
}

export const updateUserNote = async (req, res) => {
  try{
    const id = req.params.id
    const updatedNote = req.body
    await updateNoteById({id}, updatedNote)
    res.json({"status": "Note added successfully"})
  } catch(err) {
    console.log(err)
  }
}