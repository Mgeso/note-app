import Joi from 'joi';

class NoteValidator {
  validateNewNoteSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category: Joi.string().required(),
    userId: Joi.string().required()
  });

  updateNoteSchema = Joi.object({
    id: Joi.string().required(),
    content: Joi.string(),
    title: Joi.string()
  });

  deleteNoteSchema = Joi.object({
    id: Joi.string().required()
  });
}
export default new NoteValidator();