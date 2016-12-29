var tinderbot = require('tinderbot');
var bot = new tinderbot();

bot.FBClientId = "1818543688424764";
bot.FBClientSecret = "2052d2a91e3aa57111679f86158aded0";

bot.mainLoop = function() {
  console.log("Hello world!");
};

bot.live();