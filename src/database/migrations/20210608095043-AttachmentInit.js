"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Attachment", {
      id: {
        // 字段类型：数字
        type: Sequelize.INTEGER,
        // 设置为主键
        primaryKey: true,
        // 自动增长
        autoIncrement: true,
      },
      userId: {
        // 字段类型：数字
        type: Sequelize.INTEGER,
        // 不允许 null 值
        allowNull: false,
      },

      originName: {
        // 字符串类型（20长度）
        type: Sequelize.STRING(255),
        // 不允许 null 值
        allowNull: false,
      },
      name: {
        // 字符串类型（20长度）
        type: Sequelize.STRING(255),
        // 不允许 null 值
        allowNull: false,
      },
      type: {
        // 字符串类型（20长度）
        type: Sequelize.STRING(50),
        // 不允许 null 值
        allowNull: false,
      },
      size: {
        type: Sequelize.INTEGER,
        // 不允许 null 值
        allowNull: false,
      },
      createdAt: {
        // 日期类型
        type: Sequelize.DATE,
        // 不允许 null 值
        allowNull: false,
      },
      updatedAt: {
        // 日期类型
        type: Sequelize.DATE,
        // 不允许 null 值
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // 删除Attachment表
    return queryInterface.dropTable("Attachment");
  },
};
