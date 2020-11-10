console.log('Initializing!')
require('dotenv').config();

const Discord_Token = process.env.DISCORD_TOKEN;

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(Discord_Token);



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.channel.id == '775510593028751441'){
    switch (msg.content){
      case '-ayudameporfi':
        msg.reply('todavía no funciona esto pana \u{1F52B}');
        break;

      case '-hi':
        msg.reply('Hello!');
        break;

      case '-git':
        msg.reply('https://github.com/lucasliano/DiscordBot');
        break;

      case '-nichis':
        msg.reply('NIIIIIIIIIICHIIIIIIIIIIIIIIIIIS \u{1F3F3}\u{FE0F}\u{200D}\u{1F308}');
        break;
        
      case '-naked':
        msg.reply('te caes a pedazos');
        break;  

      case '-pato':
        msg.reply('me la como y que?');
    // IMPORTANTE NO PONER NADA EN DEFAULT: !!! SINO EXPLOTA EL SERVER.
    }
  }
});
