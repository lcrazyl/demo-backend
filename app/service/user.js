/*
 * @Author: 李佳奇
 * @Date: 2022-10-21 11:00:19
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-21 15:47:29
 * @Description: 请填写简介
 */
const Service = require("egg").Service;
const jwt = require("jsonwebtoken");
class UserService extends Service {
  get User() {
    return this.app.model.User;
  }

  findByUsername(userName) {
    return this.User.findOne({
      userName,
    });
  }
  findByEmail(email) {
    return this.User.findOne({
      email,
    });
  }

  async createUser(data) {
    data.password = this.ctx.helper.md5(data.password);
    const user = new this.User(data);
    await user.save();
    return user;
  }

  createToken(data) {
    return jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: this.app.config.jwt.expiresIn,
    });
  }


  verifyToken(token){
    return jwt.verify(token,this.app.config.jwt.secret)
  }
}

module.exports = UserService;
