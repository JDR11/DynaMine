/*jshint esversion: 6*/ 
const express = require("express");
require("dotenv").config();
const mineflayer = require("mineflayer");
const mineEntity = require("prismarine-entity");
const mineData = require("minecraft-data")
const Vec3 = require("vec3").Vec3;

function createBot () {
  const bot = mineflayer.createBot({
    host: "192.168.8.106",  //My personal test server
    username: process.env.ACCOUNT_EMAIL,
    password: process.env.ACCOUNT_PASSWORD,
    version: false
  });

  bot.on("error", err => console.log(err));
  bot.on("end", createBot);
  bot.on("spawn", () => {
    console.log("spawned");
    console.log(bot.version);
    console.log(bot.entity);
  });
}

createBot();
