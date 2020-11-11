console.log('Initializing!');
require('dotenv').config();
const path = require('path');
const bot = require("./src/bot.js");
const svFuncs = require("./svFuncs.js");

// We try to execute the bot app.
try
{
  console.log('Done Initializing!');
  update = bot.run(svFuncs);
} catch (error)
{
  console.error("Error on 'bot.run();' " + error);
}
