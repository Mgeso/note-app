/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userController from '../services/user.service.js';
import userService from '../services/user.service.js';

class UserController {
  async createUser(req, res) {
    const data = { email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) };
    await userController.createUser(data);
    return res.status(201).send({ success: true, body: 'user created successfully' });
  }

  async loginUser(req, res) {
    const user = await userController.loginUser(req.body);
    if (_.isEmpty(user)) {
      return res.status(404).send({ success: false, body: 'user does not exist' });
    }
    const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!verifyPassword) {
      return res.status(404).send({ success: false, message: 'email or password is invalid' });
    }
    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.TOKEN_SECRET, { expiresIn: '24hrs', algorithm: 'HS512' });
    return res.status(200).send({
      success: true,
      body: {
        message: 'user logged in successfully',
        data: { email: user.email, token }
      }
    });
  }

  async fetchUsers(req, res) {
    const users = await userService.fetchUsers();
    console.log(users);
    return res.status(200).send({ status: true, body: { ...users } });
  }
}

export default new UserController();