const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
  let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
if( kullanıcı == "aktif"){
    const userblacklist = new Discord.MessageEmbed()
    .setURL(`https://gif-botumuz.glitch.me/`)
    .setDescription(`**Destek Sunucumuza Katılarak Neden Karalisteye Alındığını Öğrenebilirsin.** [TIKLA](https://discord.gg/ayCYpEr)`)
    .setTitle("Kara Listeye Alınmışsın", true)
    .setColor("BLUE")
    .setTimestamp()
    .setImage("https://i.gifer.com/3Q7h.gif")
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send(userblacklist);
}else{
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0OTY3NzEzNjQwNjc3MzkwMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2MjM3NDYyfQ.Gjvb_KfVEwLxaExnmhBWCXotAo0lYhA4lkMPq3R4WGc', bot) 
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
let replies = ["https://media.tenor.com/images/f1b43cf98f4dfb1fb17d110f0d139e3a/tenor.gif", "https://thumbs.gfycat.com/WeightyLazyBeaver-max-1mb.gif"]
let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("**Al Sana Token**")

.setColor("BLUE")

.setTimestamp()

.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

.setImage(replies[result]);

message.channel.send(gifembed);
      
        } else {
     message.channel.send("**Bu komutu kullanabilmek için 12 saatte bir** https://discordbots.org/bot/749677136406773902/vote **sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.**")
      }
  })
}
  }
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'token',

  description: 'matador',

  usage: ''

};