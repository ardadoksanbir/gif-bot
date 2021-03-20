const Discord = require("discord.js");
exports.run = async (client, message, args) => {
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
  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**<a:castrum_olumsuz:764213176748343338> Lütfen Bir Bug (Hata) Giriniz.**')

const embed = new Discord.MessageEmbed()
.setTitle("Yeni Bir Bug Paylaşıldı")
.setColor('BLUE')
.setDescription(`**Bug Kanal** ${message.channel.name} \n **Bug Bıldırılen Sunucu** \`${message.guild.name}\` \n **Bugu Bıldıren Kullanıcı** <@${message.author.id}> \n **Bug:** \`${istek}\``)
client.channels.cache.get('768878211202678814').send(embed)
  
message.channel.send("**<a:castrum_onay:764213129906618378> Bug Bildiriminiz Gönderildi.**").then(message => message.delete({ timeout: 5000 }));
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}