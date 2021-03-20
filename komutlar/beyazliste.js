const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var sahip = ayarlar.sahip;

exports.run = async (client, message, args) => {
if ( message.author.id != ayarlar.sahip ){
   message.channel.send("**Bu Komutu Sadece Botun Sahibi Kullanabilir.**")
  }else{
  let nesne = args[0]
  if (!nesne) return message.channel.send('**Kullanıcı Belirtmelisin.**')
   
  db.delete(`kullanicikaraliste_${nesne}`)
   message.channel.send(" :tada: **Başarılı** `" + nesne + "` **Kullanıcısı Beyaz Listeye Alındı.**")
  }  
 };
                                        
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["beyazliste"],
    permLevel: 0
}

exports.help = {
    name: 'whitelist',
    description: '',
    usage: 'whitelist'
}