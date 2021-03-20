const discord = require('discord.js');
const db = require("quick.db")
exports.run = async(client, message, args) => {
  let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
if( kullanıcı == "aktif"){
    const userblacklist = new discord.MessageEmbed()
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
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0OTY3NzEzNjQwNjc3MzkwMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2MjM3NDYyfQ.Gjvb_KfVEwLxaExnmhBWCXotAo0lYhA4lkMPq3R4WGc', client) 
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  let mesaj = args.slice(0).join(" ");

  if (mesaj.length < 1) return message.reply("**<a:uptime:764213364137132052> Oylama Yapabilmem İçin Birşey Yazmalısın.**");

  const embed = new discord.MessageEmbed()

    .setTitle("📣 OYLAMA 📣")

.setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setTimestamp()
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

    .setColor("BLUE")

    .setDescription(
      `${mesaj}`
    );

  return message.channel.send(embed)
       .then(function(message) {

          message.react("✅").then(emoji => {

            message.react("⛔");

          });

        }) 

   } else {
     message.channel.send("**Bu komutu kullanabilmek için 12 saatte bir** https://discordbots.org/bot/749677136406773902/vote **sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.**")
      }
  })
  } }

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};
exports.help = {
  name: "oylama",

  description: "Oylama Yapar.",

  usage: "oylama"
};