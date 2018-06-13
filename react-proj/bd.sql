-- MySQL Workbench Forward Engineering

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
CREATE TABLE IF NOT EXISTS `ess`.`User` (
  `username` VARCHAR(45) NOT NULL,
  `pname` VARCHAR(45) NOT NULL,
  `uname` VARCHAR(45) NOT NULL,
  `contact` INT(15) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `saldo` DOUBLE NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ess`.`Contrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ess`.`Contrato` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idCoin` VARCHAR(50) NOT NULL,
  `idUser` VARCHAR(20) NOT NULL,
  `quant` INT(11) NOT NULL,
  `price` DOUBLE NOT NULL,
  `venda` INT(11) NOT NULL,
  `concluido` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idCoin_idx` (`idCoin` ASC),
  INDEX `isUser_idx` (`idUser` ASC),
  CONSTRAINT `idCoin`
    FOREIGN KEY (`idCoin`)
    REFERENCES `ess`.`Coin` (`id`),
  CONSTRAINT `isUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `ess`.`User` (`username`))
ENGINE = InnoDB
AUTO_INCREMENT = 6;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
