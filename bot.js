console.log('Initializing!')
require('dotenv').config();

console.log(process.env)

const Discord_Token = process.env.DISCORD_TOKEN;

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(Discord_Token);



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  switch (msg.content){
    case '-help':
      msg.reply('todavía no funciona esto pana \u{1F52B}');

    case '-hi':
      msg.reply('Hello!');

    case '-git':
      msg.reply('https://github.com/lucasliano/DiscordBot');

    case '-nichis':
      msg.reply('NIIIIIIIIIICHIIIIIIIIIIIIIIIIIS \u{1F3F3}\u{FE0F}\u{200D}\u{1F308}')

  // IMPORTANTE NO PONER NADA EN DEFAULT: !!! SINO EXPLOTA EL SERVER.
  }
});
