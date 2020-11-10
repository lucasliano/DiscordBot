console.log('Initializing!')
require('dotenv').config();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const http = new XMLHttpRequest()

const Discord_Token = process.env.DISCORD_TOKEN;

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(Discord_Token);

console.log('-lol ezreal'.slice(0,4) == '-lol')


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.channel.id == '775510593028751441'){
    if (msg.content.slice(0,4) == '-lol'){
      champ = msg.content.slice(5);
      msg.channel.send('https://las.op.gg/champion/' + champ );
    }

    switch (msg.content){
      case '-ayudameporfi':
        msg.reply('todavía no funciona esto pana \u{1F52B}');
        break;

      case '-hi':
        msg.reply('Hello!');
        break;

      case '-git':
        msg.channel.send('https://github.com/lucasliano/DiscordBot');
        break;
        
      case '-usd':
        http.open("GET", "https://www.dolarhoy.com/cotizacion-dolar-blue");
        http.send();
        http.onload = () => msg.channel.send(http.responseText.slice(5802,5810) + " Venta\n" + http.responseText.slice(5931,5939) + " Compra");
      break;
        
      case '-nichis':
        msg.channel.send('NIIIIIIIIIICHIIIIIIIIIIIIIIIIIS \u{1F3F3}\u{FE0F}\u{200D}\u{1F308}');
        break;

      case '-Lourdes':
        msg.channel.send('Lourdes: te amo pity! \u{2764}');
        break;

      case '-counters de palu':
        msg.channel.send('El counter de Palu es jugar sin miedo!')
        break;
        
      case '-naked':
        msg.reply('te caes a pedazos');
        break;  

      case '-pato':
        msg.channel.send('Pato: me la como y que?');
        break;

      case '-chichi':
        msg.channel.send('CHICHI DEJA DE SER TAN TROLO LA PUTA MADRE \u{1F3F3}\u{FE0F}\u{200D}\u{1F308}');
        break;

      case '-naked':
        msg.reply('Te caes a pedazos');
        break;
    // IMPORTANTE NO PONER NADA EN DEFAULT: !!! SINO EXPLOTA EL SERVER.
    }
  }
});
