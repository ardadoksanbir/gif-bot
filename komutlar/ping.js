const Discord = require('discord.js');
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
  message.channel.send('**İşte Benim Pingim: **' + client.ws.ping + '**ms**');
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Gecikme süresini gösterir.',
  usage: 'ping'
};