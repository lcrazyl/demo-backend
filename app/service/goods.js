/*
 * @Author: 李佳奇
 * @Date: 2022-10-21 17:33:59
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-21 18:46:55
 * @Description: 请填写简介
 */
const Service = require("egg").Service;

class GoodsService extends Service {
  get Good() {
    return this.app.model.Goods;
  }

  getGoodByName(name) {
    return this.Good.findOne({
      name,
    });
  }
  addGood(data) {
    const good = new this.Good(data);
    good.save();
    return good;
  }
  aditGood(good, data) {
    return this.Good.findByIdAndUpdate(good._id, data, {
      new: true,
    });
  }

  delGood(data) {
    return this.Good.findByIdAndDelete(data._id, data);
  }
  findAllGoods(){
    return this.Good.find({});
  }
}
module.exports = GoodsService;
