/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import pino, { destination } from 'pino';
import multer from 'multer';
import noteService from '../services/note.services.js';


const logger = pino();
class NoteController {
  async getAllNotes(req, res) {
    const allNotes = await noteService.getNotes(req.params.userId);
    if (_.isEmpty(allNotes)) {
      logger.error(allNotes);
      return res.status(200).send({ message: true, count: allNotes.length, body: 'no notes found' });
    }

    logger.info(allNotes);
    return res.status(200).send({ message: true, count: allNotes.length, body: allNotes });
  }

  async getAllNotes1(req, res) {
    const allNotes = await noteService.getNotes1();
    
    if (_.isEmpty(allNotes)) {
      return res.status(200).send({ message: true, body: 'no notes found' });
    }

    return res.status(200).send({ message: true, count: allNotes.length, body: allNotes });
  }

  async postNewNote(req, res) {
    logger.info(req.file);
    console.log(req.file);
    const data = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      userId: req.user._id,
      noteImage:req.file.path,
    };
    await noteService.createNote(data);
    return res.status(201).send({ message: true, body: 'article posted successfully' });
  }

  async updateNote(req, res) {
    const data = { title: req.body.title, content: req.body.content };
    await noteService.updateNote(req.body.id, data);
    return res.status(201).send({ message: true, body: 'note updated successfully' });
  }

  async deleteNote(req, res) {
    const deleted = await noteService.deleteNote(req.body.id);
    logger.info(deleted);
    return res.status(200).send({ message: true, body: 'note deleted succesfully' });
  }
}
7
export default new NoteController();