import mongoose from 'mongoose';

const noteModel = mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: {
      values: ['sports', 'fashion', 'nature', 'religion', 'technology'],
      message: `category must one of these ['sports',
        'fashion', 'nature', 'religion', 'technology']`
    }
  },
  title: {

    required: true,

    type: String

  },
  content: {
    required: true,

    type: String
  },
  userId: {
    type: String
  },
  noteImage: {
    type: String
  }

}, { timestamps: true });

const notes = mongoose.model('notes', noteModel);

export default notes;