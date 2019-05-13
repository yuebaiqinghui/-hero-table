# -hero-table
用户列表的增删改查，目录下运行cmd, node app.js运行服务器

mysql建表
```
/*
Navicat MySQL Data Transfer

Source Server         : !!!
Source Server Version : 50524
Source Host           : localhost:3306
Source Database       : lianxi

Target Server Type    : MYSQL
Target Server Version : 50524
File Encoding         : 65001

Date: 2019-05-13 11:53:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for heros
-- ----------------------------
DROP TABLE IF EXISTS `heros`;
CREATE TABLE `heros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `gender` char(6) NOT NULL DEFAULT '男',
  `img` varchar(255) NOT NULL,
  `isDelete` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of heros
-- ----------------------------
INSERT INTO `heros` VALUES ('1', 'xjf', '男', 'upload_96839756f3ba3edd0b4c2559a0ba0342.jpg', '\0');
INSERT INTO `heros` VALUES ('2', 'llp', '女', 'upload_aee8dea1bd40b4cc33486c44d982eba8.jpg', '\0');
```
