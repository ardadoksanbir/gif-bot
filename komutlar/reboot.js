const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
  
    if(message.author.id !== "485553705538551810") return message.channel.send("**Bu Komutu Sadece Botun Sahibi Kullanabilir.**")
    
    message.channel.send(`<a:uptime:764213364137132052> **Bot Yeniden Başlatılıyor.**`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
          
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'
};