import {getUserById} from "../services/notes.services.js"


export const getUserNotes = async (req,res) =>{
  try{
    const id = req.param.id;
    if (!id) {
      return res.status(400).json({ message: "ID parameter is required" });
      }
    const note = getUserById(id);
    console.log(note);
    res.status(200).json({note});
  }catch(err){
    console.log(err)
  }
  res.status(500).json({ message: "Error retrieving the note", error: err.message });
}