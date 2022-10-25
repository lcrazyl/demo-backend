/*
 * @Author: 李佳奇
 * @Date: 2022-10-20 21:29:51
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-25 17:01:17
 * @Description: 请填写简介
 */
"use strict";

/** @type Egg.EggPlugin */

// 数据库
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};


// 参数校验
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// 跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};