// bot.js

module.exports = {
  run: function (svFuncs)
  {
    // cmd
    const cmd = require("node-cmd");
    // HTTP setup
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const http = new XMLHttpRequest()
    const imgrq = new XMLHttpRequest()

    // Discrod.js setup
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const Discord_Token = process.env.DISCORD_TOKEN;
    client.login(Discord_Token);


    const Pool = require('worker-threads-pool')
    const pool = new Pool({max: 10, maxWaiting: 10})

    var update = false;

    // ready event
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    // message event
    client.on('message', msg =>
    {

      if(msg.channel.id == '775510593028751441')
      {

        for (let i = 0; i < 100; i++)
        {
          pool.acquire('/src/threadTask.js', function (err, worker) 
          {
            if (err) throw err
            console.log(`started worker ${i} (pool size: ${pool.size})`)
            worker.on('exit', function ()
            {
              console.log(`worker ${i} exited (pool size: ${pool.size})`)
            })
          })
        }

      }
    });
  }//,
};
