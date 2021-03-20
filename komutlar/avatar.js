const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async(client, message, args) => {
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
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0OTY3NzEzNjQwNjc3MzkwMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2MjM3NDYyfQ.Gjvb_KfVEwLxaExnmhBWCXotAo0lYhA4lkMPq3R4WGc', client) 
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
//KOMUT
let mention = message.mentions.users.first();
let sender = "";
if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}
if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setTitle('GİF BOT')
  .setImage(mention.avatarURL({ dynamic: true, format: 'png'}))
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024}))
  .setTimestamp()
  message.channel.send(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setTitle('GİF BOT')
  .setImage(message.author.avatarURL({ dynamic: true, format: 'png'}))
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024}))
  .setTimestamp()
  message.channel.send(avatarEmbedYou);
  return;
}
message.channel.send("avatar"); 

   } else {
     message.channel.send("**Bu komutu kullanabilmek için 12 saatte bir** https://discordbots.org/bot/749677136406773902/vote **sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.**")
      }
  }) }
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatarım'],
    kategori: 'kullanıcı',
  permLevel: 0
};
exports.help = {
  name: 'avatar',
  isim: 'Avatar',
  süre: 'Yok',

  description: 'Avatarınızı gösterir ve ya birini etiketlerseniz o kişinin avatarını gösterir.',
  usage: 'avatar <@kullanıcı>'
};//castrum