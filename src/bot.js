// bot.js

module.exports = {
  run: function (svFuncs)
  {
    // cmd
    const cmd = require("node-cmd");
    // HTTP setup
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const http = new XMLHttpRequest()

    // Discrod.js setup
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const Discord_Token = process.env.DISCORD_TOKEN;
    client.login(Discord_Token);

    var update = false;

    // ready event
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    // message event
    client.on('message', msg =>
    {
      if(msg.channel.id == '775510593028751441'){
        if (msg.content.slice(0,4) == '-lol'){
          champ = msg.content.split(/\s+/);
          var largo = champ.length;
          if (largo = 2)
            msg.channel.send('https://las.op.gg/champion/' + champ[1] );
          if (largo > 2){
            var i = 2;
            var nombre = champ[1];
            while(i < largo){
              nombre = nombre + champ[i];
              msg.channel.send(nombre);
              i++;
            }
            msg.channel.send('https://las.op.gg/champion/' + nombre );
          }
            
        }

        switch (msg.content){
          case '-ayudameporfi':
            msg.reply('todavía no funciona esto pana \u{1F52B}');
            break;

          case '-hi':
            msg.reply('Hello!');
            break;
            
          case '-sox':
             msg.reply('nuevo fichaje de astralis!');
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
            
            case '-palu':
            msg.reply('Soy un capo');
            break;

          case '-pato':
            msg.channel.send('Pato: me la como y que?');
            break;

          case '-chichi':
            msg.channel.send('CHICHI DEJA DE SER TAN TROLO LA PUTA MADRE \u{1F3F3}\u{FE0F}\u{200D}\u{1F308}');
            break;

          case '-pity':
            msg.channel.send('Pity y Mazia loós amiigoss \u{1F4C8}');
            break;
            
          case '-mazia':
            msg.channel.send('Mazia y Pity los aaamiigooos \u{1F4C8}');
            break;

          case '-default':
            msg.channel.send('No pongas default pedazo de gran persona');
            break;
            
          case '-updateSrc':
            console.log('Ending session');
            client.destroy();
            svFuncs.updateSrc(cmd);
            break;

          case '-close':
            console.log('Ending session');
            client.destroy();
            break;
            


        // IMPORTANTE NO PONER NADA EN DEFAULT: !!! SINO EXPLOTA EL SERVER.
        }
      }
    });
  }//,
};
