import {getUserById, createNewNote} from "../services/notes.services.js"


export const getUserNotes = async (req,res) =>{
  try{

    const id = req.params.id;
    console.log(id)
    if (!id) {
     return res.status(400).json({ message: "ID parameter is required" });
    }
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