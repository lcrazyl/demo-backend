/*
 * @Author: 李佳奇
 * @Date: 2022-10-21 15:41:55
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-21 16:25:43
 * @Description: 请填写简介
 */
module.exports = () => {
  return async (ctx, next) => {
    // 获取请求头token //Bearer空格token数据
    let token = ctx.headers.authorization; // Bearer空格token数据
    token = token ? token.split("Bearer ")[1] : null;
    
    // 验证token 无效401
    if (!token) {
      ctx.throw(401);
    }
   
    try {
        // token有效，根据userId获取用户信息 挂在到ctx对象中
    const data = ctx.service.user.verifyToken(token);
    ctx.user = data;
    } catch (err) {
      ctx.throw(401);
    }
    // 继续执行
    await next();

  };
};
