/*
 * @Author: 李佳奇
 * @Date: 2022-10-20 21:29:51
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-21 09:48:26
 * @Description: 请填写简介
 */
'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const User = this.app.model.User;
    await new User({
      userName:'lee',
      password:"123"
    }).save();
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
