const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
const prefix = ayarlar.prefix
exports.run = async(client,message,args)=>{
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
const s=[]
const sa = client.users.cache.forEach(a => s.push(a.avatarURL({ dynamic: true, format: 'png', size: 1024 })))
const a = new Discord.MessageEmbed()
.setTimestamp()
.setDescription('**GİF BOT**')
.setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setColor('BLUE')
.setImage(`${s[Math.floor(Math.random()*s.length)]}`)
message.channel.send(a)
}
}
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
    permLevel: 0
}
exports.help = {
          aliases: [],
        name: 'random-pp',
        description: '',
        usage: ''
}