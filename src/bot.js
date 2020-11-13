// bot.js

module.exports = {
  run: function (svFuncs)
  {
    // cmd
    const cmd = require("node-cmd");
    // httpXML setup
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const httpXML = new XMLHttpRequest()
    const imgrq = new XMLHttpRequest()
    const http = require('http');
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

        if (msg.content.slice(0,4) == '-img'){
          param = msg.content.split(/\s+/);
          imgrq.open("GET", 'https://espanol.images.search.yahoo.com/search/images;_ylt=AwrE1x2FGqxfSkkAq28DEQx.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=' + param + '&fr2=piv-web&fr=yfp-t');

          //para probar mando el link de la foto, pero hay que incluir la clase Attachment y enviarlo como un opjeto img
          //cambiar const {Client, Attachment} = require('discord.js'); y const client = new Client();
          //const attachment = new Attachment(url)
          imgrq.onload = function(){
            var url = imgrq.responseText.slice(imgrq.responseText.search('<img data-src=')+15,imgrq.responseText.search('<img data-src=')+100);
            msg.channel.send(url)
          };
          imgrq.send();
        };

        if (msg.content.slice(0,4) == '-lol'){
          champ = msg.content.split(/\s+/);
          var largo = champ.length;
          //msg.channel.send(largo);
          if (largo = 2)
            msg.channel.send('https://las.op.gg/champion/' + champ[1] );
          if (largo > 2){
            var i = 2;
            var nombre = champ[1];
            while(i < largo){
              nombre = nombre + champ[i];
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

          case '-prendas':
            var prendas = {'gucci':['https://s3-us-west-2.amazonaws.com/repo.diariojornada.com.ar/imagenes/2020/10/4/513178_4547_slider.jpg','https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567187105/597612_96IWT_8745_001_100_0000_Light-Cartera-Ophidia-con-GG-y-cremallera.jpg','https://i.pinimg.com/474x/46/44/ff/4644ff5aecbe85db98ffef22dfcf7a6a.jpg'],
                           'bross':['https://d26lpennugtm8s.cloudfront.net/stores/001/273/821/products/d145ee57-d73d-428b-8219-f94612e6911e_nube-7eb37807352faea90115963431641456-1024-1024.jpg','https://static.bross.com.ar/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/7/8/783228986.jpg.jpg','https://images-na.ssl-images-amazon.com/images/I/61z9qjIj6oL._AC_UX385_.jpg','']};
            var random = prendas[Object.keys(prendas)[Math.floor(Math.random()*Object.keys(prendas).length)]]
            msg.channel.send(random[Math.floor(Math.random()*random.length)])
            break;

          case '-persona':
            msg.channel.send({
              files: ['thispersondoesnotexist.com/image']
            })
            break;

          case '-sox':
             msg.reply('nuevo fichaje de astralis!');
            break;

          case '-git':
            msg.channel.send('https://github.com/lucasliano/DiscordBot');
            break;

          case '-usd':
            httpXML.open("GET", "https://www.dolarhoy.com/cotizacion-dolar-blue");
            httpXML.send();
            httpXML.onload = () => msg.channel.send(httpXML.responseText.slice(5802,5810) + " Venta\n" + httpXML.responseText.slice(5931,5939) + " Compra");
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
