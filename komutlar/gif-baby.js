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
let replies = ["https://media.discordapp.net/attachments/695056166790627409/770590597056430090/a_a707a204f05a31b15cd15f9a5f89104e.gif","https://media.discordapp.net/attachments/695056166790627409/770590604416909332/image0_18.gif","https://media.discordapp.net/attachments/695056166790627409/770590636012732436/gif168.gif","https://media.discordapp.net/attachments/695056166790627409/770590639753527347/luisa8.gif","https://media.discordapp.net/attachments/695056166790627409/770600544154550282/ENES_ACAR_GIF_54.gif","https://media.discordapp.net/attachments/695056166790627409/770600547832299531/ENES_ACAR_GIF_109.gif","https://media.discordapp.net/attachments/695056166790627409/770600548075438090/ENES_ACAR_GIF_132.gif","https://media.discordapp.net/attachments/695056166790627409/770611547470561300/sar_bebek.gif","https://media.discordapp.net/attachments/695056166790627409/770659793156833330/image0_9.gif","https://media.discordapp.net/attachments/695056166790627409/770790422016557066/a_a06f83f2ad64c43a313a9971fe3180e7.gif","https://media.discordapp.net/attachments/695056166790627409/770916722726928384/a_0ebab57fa30ac771fb1540985a673f98.gif","https://media.discordapp.net/attachments/695056166790627409/771039086940651570/Internet_20201027_144518.gif","https://media.discordapp.net/attachments/695056166790627409/770600559777808414/ENES_ACAR_GIF_171.gif","https://media.discordapp.net/attachments/695056166790627409/770600534226370580/ENES_ACAR_GIF_5.gif","https://media.discordapp.net/attachments/695056166790627409/770600531441614869/a_e5211ced9407579a85750bccc5a8737e.gif","https://media.discordapp.net/attachments/695056166790627409/770590549661057034/a_1ceeede595be3ccf10ef16b3c8e759e1.gif","https://media.discordapp.net/attachments/695056166790627409/770590561714307093/a_a05330926b68435758987c6da1e388bb.gif","https://media.discordapp.net/attachments/695056166790627409/770590440134803456/image0-7.gif","https://media.discordapp.net/attachments/695056166790627409/770590392537317437/a_83e2681524e6ffcb38eb3f42290d0017.gif","https://media.discordapp.net/attachments/695056166790627409/770340907593105458/a_9b86ba0a477ee9c44e551f79dee6d07b.gif","https://media.discordapp.net/attachments/695056166790627409/770323421946970112/a_ffbc11321ce2093d1ad32ab5fb908b05.gif","https://media.discordapp.net/attachments/695056166790627409/769631915883233309/11-2.gif","https://media.discordapp.net/attachments/695056166790627409/769300349399597076/image0-40.gif","https://media.discordapp.net/attachments/695056166790627409/768884052009680937/a_c9b50d1eb590faada018d8a2216245e7.gif","https://media.discordapp.net/attachments/695056166790627409/768808667709177896/baby_35.gif","https://media.discordapp.net/attachments/695056166790627409/768808627002802236/baby_24.gif","https://media.discordapp.net/attachments/695056166790627409/768801986375581696/baby_3.gif","https://media.discordapp.net/attachments/695056166790627409/768801986065203200/baby_32.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("BABY GİF")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);
}
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-baby','baby-baby','babybaby','babygif'],

  permLevel: 0

};

exports.help = {

  name: 'baby',

  description: 'matador',

  usage: 'baby'

};