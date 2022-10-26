/*
 * @Author: 李佳奇
 * @Date: 2022-10-20 21:29:51
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-26 10:50:52
 * @Description: 请填写简介
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  const auth = app.middleware.auth();
  router.prefix("/api/v1"); //基础路径

  router.post("/users", controller.user.create); //注册
  router.post("/users/login", controller.user.login); //登录
  router.get("/user", auth, controller.user.getCurrentUser); //获取当前登录用户




  router.post("/goods", controller.goods.add); //创建商品
  router.get("/goods", controller.goods.getAllGoods); //查找所有
  router.post("/goods/edit", controller.goods.adit); //修改商品
  router.delete("/goods/del/:name", controller.goods.delGood); //删除商品

};
