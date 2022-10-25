/*
 * @Author: 李佳奇
 * @Date: 2022-10-20 21:29:51
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-10-25 17:01:57
 * @Description: 请填写简介
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1666272588727_5491';

  // add your middleware config here
  config.middleware = [
    'errorHandler'
  ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置数据库
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/demo',
      options: {
        useUnifiedTopology:true,
      },
      // mongoose global plugins, expected a function or an array of function and options
      plugins: [],
    },
  };

  // csrf安全
  config.security = {
    csrf: {
      enable: false,
    },
  };
  
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.jwt = {
    secret:'4a7c54d0-22ab-403e-8146-a47110e6ed22',
    expiresIn:'1d'
  }
  return {
    ...config,
    ...userConfig,
  };
};
