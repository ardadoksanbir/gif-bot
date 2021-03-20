const Discord = require("discord.js")
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var sahip = ayarlar.sahip;

exports.run = async (client, message, args) => {

if ( message.author.id != ayarlar.sahip ){
   message.channel.send("**Bu Komutu Sadece Botun Sahibi Kullanabilir.**")
  }else{
  let nesne = args[0]
  if (!nesne) return message.channel.send('**Bir Kullanıcı Belirtmelisin.**')
   
  db.set(`kullanicikaraliste_${nesne}`, 'aktif')
 message.channel.send(" :tada: **Başarılı** `" + nesne + "` **Kullanıcısı Kara Listeye Alındı.**")
  }  
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 0
};

exports.help = {
  name: 'karaliste',
  description: '',
  usage: 'karaliste'
};