/*
 * @Author: 李佳奇
 * @Date: 2022-10-20 21:29:51
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-25 17:10:13
 * @Description: 请填写简介
 */
"use strict";

const { Controller } = require("egg");

class GoodsController extends Controller {
    
  async add() {
    const { ctx } = this;
    const body = ctx.request.body;
    // 参数验证
    ctx.validate({
      name: { type: "string" },
      price: { type: "number" },
      reserveNum: { type: "number" },
      size: { type: "array" },
    });
    const goodsService = this.service.goods;
    // 验证是否有该商品
    const good = await goodsService.getGoodByName(body.name);

    if (good) {
      ctx.throw(401, "已有该商品");
    }

    // 添加到数据库
    const data = await goodsService.addGood(body);

    // 相应数据
    ctx.body = {
      good: {
        name: data.name,
        price: data.price,
        reserveNum: data.reserveNum,
        size: data.size,
      },
    };
  }

  async adit() {
    const { ctx } = this;
    // 数据校验
    const body = ctx.request.body;
    ctx.validate({
      name: { type: "string" },
      price: { type: "number", required: false },
      reserveNum: { type: "number", required: false },
      size: { type: "array", required: false },
    });
    //   查询是否存在
    const goodsService = this.service.goods;
    const good = await goodsService.getGoodByName(body.name);
    // 商品是否存在
    if (!good) {
      ctx.throw(401, "暂无该商品");
    }
    const data = await goodsService.aditGood(good,body);
    ctx.body = {
      good: {
        name: data.name,
        price: data.price,
        reserveNum: data.reserveNum,
        size: data.size,
      },
    };
  }

  async delGood(){
    const {ctx} = this;
    let flag = true;
    const goodName = ctx.params.name;
    console.log('nnnnn-->',ctx.params)
    const goodsService = this.service.goods;
    const good = await goodsService.getGoodByName(goodName);
    if(!good){
        ctx.throw(401,'暂无该商品!');
    }

    const data = await goodsService.delGood(good);
    

    
    ctx.body = {
        status:flag
    }
  }

  async getAllGoods(){
    const {ctx,service} = this;
    
    const data = await service.goods.findAllGoods();

    ctx.body = {
        goods:data
    }
  }
}

module.exports = GoodsController;
