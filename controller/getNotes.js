import {Router} from "express"
import {getUserById} from "../services/notes.services.js"
router = router();

export const getUserNotes = async (req,res) =>{
  try{
    const id = req.param.id;
    const note = getUserById(id);
    console.log(note);
    res.status(200).json({note});
  }catch(err){
    console.log(err)
  }
}