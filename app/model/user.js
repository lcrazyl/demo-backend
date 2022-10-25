/*
 * @Author: 李佳奇
 * @Date: 2022-10-21 09:46:05
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-21 10:11:14
 * @Description: user模型
 */

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    userName: { type: String },
    password: { type: String },
    email:{type:String}
  });

  return mongoose.model("User", UserSchema);
};
