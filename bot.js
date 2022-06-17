const mineflayer = require("mineflayer");
//const mineEntity = require("prismarine-entity");
//const Vec3 = require("vec3").Vec3;
const sleep = require("sleep");

function createBot () {
  const bot = mineflayer.createBot({
  //  host: "192.168.8.106",
    host: "minecraft.cabotexplorers.org.uk",
    username: "joshua.ruddock27@outlook.com",
    password: "vNxD74TLVEuGmLH",
    version: false
  })

  bot.on("error", err => console.log(err));
  bot.on("end", createBot);
  bot.on("spawn", () => {
    console.log("spawned");
    sleep.sleep(600);
    console.log(bot.entity);
  })
}

createBot()
//TEST