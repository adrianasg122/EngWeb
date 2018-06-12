SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ess
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ess
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ess` DEFAULT CHARACTER SET utf8mb4 ;
USE `ess` ;

-- -----------------------------------------------------
-- Table `ess`.`Coin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ess`.`Coin` ;

CREATE TABLE IF NOT EXISTS `ess`.`Coin` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `symbol` VARCHAR(6) NOT NULL,
  `price` DOUBLE NOT NULL,
  `percentageChange` INT(11) NOT NULL,
  `lastModDate` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ess`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ess`.`User` ;

CREATE TABLE IF NOT EXISTS `ess`.`User` (
  `id` INT(11) NOT NULL,
  `pname` VARCHAR(45) NOT NULL,
  `uname` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `contact` INT(15) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `saldo` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ess`.`Contrato`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ess`.`Contrato` ;

CREATE TABLE IF NOT EXISTS `ess`.`Contrato` (
  `id` INT(11) NOT NULL,
  `idUser` INT(11) NOT NULL,
  `idCoin` VARCHAR(50) NOT NULL,
  `quant` INT(11) NOT NULL,
  `price` DOUBLE NOT NULL,
  `venda` INT(11) NOT NULL,
  `concluido` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idCoin` (`idCoin` ASC),
  INDEX `idUser` (`idUser` ASC),
  CONSTRAINT `idCoin`
    FOREIGN KEY (`idCoin`)
    REFERENCES `ess`.`Coin` (`id`),
  CONSTRAINT `idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `ess`.`User` (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
