console.log('Initializing!');
require('dotenv').config();
const path = require('path');
const bot = require("./src/bot.js");
const svFuncs = require("./svFuncs.js");
const workerThreads = require('worker_threads');

// We try to execute the bot app.
try
{
  console.log('Done Initializing!');
  bot.run(svFuncs);
} catch (error)
{
  console.error("Error on 'bot.run();' " + error);
}
