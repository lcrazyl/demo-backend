/*
 * @Author: 李佳奇
 * @Date: 2022-10-21 09:46:05
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-25 17:12:50
 * @Description: user模型
 */

module.exports = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const UserSchema = new Schema({
      name: { type: String },
      price: { type: Number },
      reserveNum:{type:Number},
      size:{type:Array}
    });
  
    return mongoose.model("Goods", UserSchema);
  };
  