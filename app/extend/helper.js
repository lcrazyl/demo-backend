/*
 * @Author: 李佳奇
 * @Date: 2022-10-21 11:09:21
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-21 11:36:39
 * @Description: 请填写简介
 */

const crypto = require("crypto");

exports.md5 = (str) => {
  return crypto.createHash("md5").update(str).digest("hex");
};
