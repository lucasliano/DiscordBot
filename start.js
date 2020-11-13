console.log('Initializing!');
require('dotenv').config();
const path = require('path');
const bot = require("./src/bot.js");
const svFuncs = require("./svFuncs.js");


const Pool = require('worker-threads-pool')

// const pool = new Pool({max: 5})
//
// for (let i = 0; i < 100; i++) {
//   pool.acquire('/my/worker.js', function (err, worker) {
//     if (err) throw err
//     console.log(`started worker ${i} (pool size: ${pool.size})`)
//     worker.on('exit', function () {
//       console.log(`worker ${i} exited (pool size: ${pool.size})`)
//     })
//   })
// }

// We try to execute the bot app.
try
{
  console.log('Done Initializing!');
  bot.run(svFuncs);
} catch (error)
{
  console.error("Error on 'bot.run();' " + error);
}
