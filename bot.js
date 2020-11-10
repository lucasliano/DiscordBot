console.log('Initializing! \u{1F63C}')

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {

  switch (msg.content){
    case '-ping':
      msg.reply('Pong!');

    case '-git':
      msg.reply('');

    case '-':
      msg.reply('Wachin, tenes que especificar algo pana')

  }

  }
});

client.login('Nzc1NDkyNDU3Nzc3MDcwMTQw.X6nHoQ.MtdpRnUD3cPVOXaxyvggT6Q-eG4');
