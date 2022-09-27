import notes from '../models/note.model.js';

const getNotes = async (id) => {
  const allNotes = await notes.find({ userId:id });
  return allNotes;
};

const getNotes1 = async () => {
  const allNotes = await notes.find();
 
  return allNotes;
};

const updateNote = async (id, data) => {
  const update = await notes.updateOne({ _id: id }, data, { runValidators: true });
  return update;
};

const createNote = async (note) => {
  const create = await notes.create(note);
  
  return create;
};

const deleteNote = async (id) => {
  const deletenote = await notes.deleteOne({ _id: id });
  return deletenote;
};

export default {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
  getNotes1
};