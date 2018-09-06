
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for burgers
-- ----------------------------
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `devoured` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
