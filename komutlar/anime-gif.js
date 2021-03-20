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
let replies = ["https://media.discordapp.net/attachments/608711485849337856/767835814074908692/ani7.gif","https://media.discordapp.net/attachments/608711485849337856/767835910741164042/ani2.gif","https://media.discordapp.net/attachments/608711485849337856/767835936247119902/ani10.gif","https://media.discordapp.net/attachments/608711485849337856/767836002512404490/ani12.gif","https://media.discordapp.net/attachments/608711485849337856/767836007080787988/ani8.gif","https://media.discordapp.net/attachments/608711485849337856/767836032178585610/ani18.gif","https://media.discordapp.net/attachments/608711485849337856/767836539572191282/a_2931f30ce44ab5d8eab938a829f03155.gif","https://media.discordapp.net/attachments/608711485849337856/767836586473685032/ani5.gif","https://media.discordapp.net/attachments/608711485849337856/767848997158256680/eaea2c08af295b2e03f19ee557e63dce.gif","https://media.discordapp.net/attachments/608711485849337856/767827232622116964/ehe1.gif","https://media.discordapp.net/attachments/608711485849337856/767800148154777660/image0.gif","https://media.discordapp.net/attachments/608711485849337856/767789104787882044/nexy.anime12.gif","https://media.discordapp.net/attachments/608711485849337856/767782410074456064/a_52d50aeeefe9eb422c5db769849e1dde.gif","https://media.discordapp.net/attachments/608711485849337856/767753898110615632/dadlus.gif?width=453&height=475","https://media.discordapp.net/attachments/608711485849337856/767729201503273000/a_646c70cf46456d2ce22d274cc9621e28.gif","https://media.discordapp.net/attachments/608711485849337856/767712517589696512/1480854341_tumblr_n9us9xjHa51sfhlsao1_500.gif","https://media.discordapp.net/attachments/608711485849337856/767683055845769247/image4.gif","https://media.discordapp.net/attachments/608711485849337856/767664257025179658/iSBaEBbpv5.gif","https://media.discordapp.net/attachments/694694884459937862/767803239302430780/a_e0e8d3ff21b48e18c46a486483f0bfea-1.gif","https://media.discordapp.net/attachments/694694884459937862/767824028336390154/tenor_1.gif","https://media.discordapp.net/attachments/694694884459937862/767846703410839592/a_aebf1ba1f76df85de7791f5617a0e7d3.gif","https://media.discordapp.net/attachments/694694884459937862/767846729663381574/a_3eae5dfae8eed3aad82ee8883aad3b50.gif","https://media.discordapp.net/attachments/694694884459937862/767846883233103952/a_7cdae45ee4169fae6282e94a5a88c5c2.gif","https://cdn.discordapp.com/avatars/546033642078601218/a_5587bf5cc0e1c6cd220b32c1c7b91951.gif","https://media.discordapp.net/attachments/694694884459937862/767762215041499176/tumblr_fd0feb97f6cb53b9ed12be03ba2e59ba_aa7f765f_500.gif","https://media.discordapp.net/attachments/694694884459937862/767761830566428702/1520101131_NC2l.gif","https://media.discordapp.net/attachments/694694884459937862/767761798836256778/97c922f0fadbc76788496b438f05bc00.gif","https://media.discordapp.net/attachments/694694884459937862/767416051360596048/a_a8e76ae696c61ac075b708b3803bb9d3.gif","https://media.discordapp.net/attachments/697505578972348436/767847159235084318/image0-30.gif","https://media.discordapp.net/attachments/697505578972348436/767847281201512448/tumblr_naeslmKJXs1s61jemo1_500.gif","https://media.discordapp.net/attachments/697505578972348436/767847267155050516/a_44c57748f759d0d4a5287bf82b5783cb.gif","https://media.discordapp.net/attachments/694695881852584096/760112149782986762/20200928_151401.gif","https://media.discordapp.net/attachments/694695881852584096/758090310407684187/20200923_011914.gif","https://media.discordapp.net/attachments/694695881852584096/756564857809010839/Anime-Girl-Witch-Weapon.gif","https://media.discordapp.net/attachments/694695881852584096/745952534434283550/giphy_1.gif","https://media.discordapp.net/attachments/694695881852584096/730333096779448380/e385c547359ec924e292aadb6c5648ec.gif","https://media.discordapp.net/attachments/694695881852584096/721309236281213008/df2f479c02710167558d100fd81522bf.gif","https://media.discordapp.net/attachments/608711485849337856/771056603020394546/a_e9ae7ca53b216f95eb0e5efe81b0eb29.gif","https://media.discordapp.net/attachments/608711485849337856/771058673929158666/image0.gif","https://media.discordapp.net/attachments/608711485849337856/771056424116944946/217.gif","https://media.discordapp.net/attachments/608711485849337856/771056228100735026/216.gif","https://media.discordapp.net/attachments/608711485849337856/771056154347569182/219.gif","https://media.discordapp.net/attachments/608711485849337856/771048296872673280/405e45968dcf83b81216c7e9205a5d0f-1.gif","https://media.discordapp.net/attachments/608711485849337856/771048297871704064/image9.gif","https://media.discordapp.net/attachments/608711485849337856/771048297427238992/image4.gif","https://media.discordapp.net/attachments/608711485849337856/771031806975017000/8.gif","https://media.discordapp.net/attachments/608711485849337856/771028827215626260/a_d963fb64564af705310cbc81638ef80b.gif","https://media.discordapp.net/attachments/608711485849337856/771028829530882058/a_ebf2dc5d7699f9282883c80a87059c83.gif","https://media.discordapp.net/attachments/608711485849337856/771028683720097822/5.gif","https://media.discordapp.net/attachments/608711485849337856/771024756895383603/todoroki9.gif","https://media.discordapp.net/attachments/608711485849337856/771021299458768926/tenor_1.gif","https://media.discordapp.net/attachments/608711485849337856/771019311627894843/randomdewamke_19.gif","https://media.discordapp.net/attachments/608711485849337856/771014183650459688/19448.gif?width=586&height=475"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("ANİME GİF")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);
}
};    

  

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['anime', 'anime-gif', 'çizgi-film-gif', 'anime-at'],

  permLevel: 0

};

exports.help = {

  name: 'anime',

  description: 'matador',

  usage: 'anime'

};