const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('megadb')
let server = new db.crearDB('server')


module.exports = async message => {
  let prefix = await server.get(`prefix.${message.guild.id}`) || ayarlar.prefix 
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip2.includes(message.author.id) && !ayarlar.sahip2.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(`:x: **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
      }
    }

  

    if (cmd) {
      let bakım = await server.get('bakım');
      if(message.author.id !== ayarlar.sahip){
      if(bakım){
     return message.channel.send(new Discord.MessageEmbed()
     .setDescription(`**<a:ayarlar:767855862605414420> Sizlere En İyi Hizmeti Verebilmek İçin Bakımdayız.**\n\n <a:mod:767855752555003905> **Lütfen Daha Sonra Tekrar Deneyin.**`)
      .setColor('BLUE')
     .setImage('https://media.discordapp.net/attachments/765001508227252228/767865902791393280/ljPzU.md.png')
        ).then(message => {
message.react('766717941839954001')
   const bilgi = (reaction, user) => reaction.emoji.id === '766717941839954001' && user.id === message.author.id;
        const bilgi2 = message.createReactionCollector(bilgi, { time: 100000 });
        bilgi2.on('collect', r => {
message.channel.send.edit(new Discord.MessageEmbed()
.setDescription(`**Botumuzu Sizler İçin Güzelleştiriyoruz Ve Sizler İçin Daha İyi Hale Getirmeye Çalışıyoruz.**`)
.setColor('BLUE')
                    
                    )        


      })
                                      })
            }}}
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};