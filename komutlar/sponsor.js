const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client,message,args) => {
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
        const embed = new Discord.MessageEmbed()
                .setDescription(`**Bize Destek Verdiği İçin Retr4#0038'e Teşekkür Ederiz Bedava Spotify Premium İçin Katılabilirsiniz. [TIKLA VE KATIL](https://discord.gg/sDPuhrbBXG)**`)
                .setTimestamp()
                .setColor('BLUE')
                .addField("Sponsorumuz", "<@535087532908478474>")
                .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
                .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
        message.channel.send({embed})
}
}


exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['sponsormuz','sponsorumuz'], 
    permLevel: 0
}

exports.help = {
    name: 'sponsor', 
    description: 'Bu bir bağış komuttur.', 
    usage: 'sponsor'
}