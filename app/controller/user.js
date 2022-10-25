/*
 * @Author: 李佳奇
 * @Date: 2022-10-20 21:29:51
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-21 17:25:49
 * @Description: 请填写简介
 */
"use strict";

const { Controller } = require("egg");

class UserController extends Controller {
  async create() {
    /**
     * List：创建用户步骤：
     * 数据校验
     * 保存用户
     * 生成Token
     * 发生相应
     */
    const { ctx } = this;
    const body = ctx.request.body;
    // 数据验证
    ctx.validate({
      userName: { type: "string" },
      password: { type: "string" },
      email: { type: "email" },
    });

    if (await this.service.user.findByUsername(body.userName)) {
      ctx.throw(422, "用户已存在!");
    }

    if (await this.service.user.findByEmail(body.email)) {
      ctx.throw(422, "邮箱已存在!");
    }

    const user = await this.service.user.createUser(body);
    
    const token = this.service.user.createToken({
      userId: user._id,
    });

    ctx.body = {
      user: {
        email: user.email,
        userName: user.userName,
        token,
      },
    };
  }

  async login() {
    const { ctx } = this;

    ctx.validate({
      email: { type: "string" },
      password: { type: "string" },
    });
    const { password, email } = ctx.request.body;
    const user = await this.service.user.findByEmail(email);
    // 验证邮箱是否存在
    if (!user) {
      ctx.throw(422, "用户不存在!");
    }
    // 验证密码是否正确

    if (ctx.helper.md5(password) !== user.password) {
      ctx.throw(422, "密码错误！");
    }

    // 生成token
    const token = this.service.user.createToken({
      userId: user._id,
    });
    // 发送
    this.ctx.body = {
      user: {
        email: user.email,
        token,
        userName: user.userName,
      },
    };
  }

  async getCurrentUser() {
    // 验证token
    this.ctx.body = this.ctx.user;
    // 获取用户
    // 发生相应
  }
}

module.exports = UserController;
