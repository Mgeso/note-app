import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

  email: {

    type: String,

    required: true,

    unique: true

  },

  password: {

    type: String,
    required: true

  }

}, { timestamps: true });

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};
const userModel = mongoose.model('users', userSchema);

export default userModel;