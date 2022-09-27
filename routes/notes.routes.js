import express from 'express';
import multer from 'multer';
import noteController from '../controllers/note.controller.js';
import validator from '../validators/validator.js';
import noteValidator from '../validators/note.validator.js';
import authentication from '../middlewares/auth.middleware.js';

 const noteRouter = express.Router();

noteRouter.get('/:userId', authentication, noteController.getAllNotes);

noteRouter.get('/notes', noteController.getAllNotes1);
noteRouter.post('/',[validator(noteValidator.validateNewNoteSchema), authentication], noteController.postNewNote);

noteRouter.put('/', [validator(noteValidator.updateNoteSchema), authentication], noteController.updateNote);
noteRouter.delete('/', [validator(noteValidator.deleteNoteSchema), authentication], noteController.deleteNote);
export default noteRouter;