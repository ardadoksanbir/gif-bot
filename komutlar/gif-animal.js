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
let replies = ["https://media.discordapp.net/attachments/697501807571894322/767006278639681566/omzxclszocmo.gif","https://media.discordapp.net/attachments/697501807571894322/767039299807477820/a_b80e817bdf4a21268caab89f88313246.gif","https://media.discordapp.net/attachments/697501807571894322/767151911186071612/a_2fdd87936226deda86e88ccaf532d8eb.gif","https://media.discordapp.net/attachments/697501807571894322/767289617783193620/a_1281829009ca138ac574fdebd85738e7.gif","https://media.discordapp.net/attachments/697501807571894322/767386172892250162/a_822121f4821a3a7703e3aa12859c25d9.gif","https://media.discordapp.net/attachments/697501807571894322/767461987734781952/kedigif.gif","https://media.discordapp.net/attachments/697501807571894322/767461947309293568/image0.gif","https://media.discordapp.net/attachments/697501807571894322/767462142726766653/h5fPjayePB.gif","https://media.discordapp.net/attachments/697501807571894322/767631790919122954/a_fec52b73aeeb3abf2a32270fcae5a5bd.gif","https://media.discordapp.net/attachments/697501807571894322/767761602262597632/10.gif","https://media.discordapp.net/attachments/697501807571894322/767761696399294464/5.gif","https://media.discordapp.net/attachments/697501807571894322/767761713067589642/4.gif","https://media.discordapp.net/attachments/697501807571894322/767761713578770493/3.gif","https://media.discordapp.net/attachments/697501807571894322/766996594381815839/tekne_suren_kopek_golden_gif.gif","https://media.discordapp.net/attachments/697501807571894322/766305355428397056/a_62ff1867a80eb528bb64f07b0b6c17cf.gif","https://media.discordapp.net/attachments/697501807571894322/766304638491557888/atexgif_44.gif","https://media.discordapp.net/attachments/697501807571894322/766303824520282112/image0-141.gif","https://media.discordapp.net/attachments/697501807571894322/766303758287372288/a_dcee2297747ff7c3645d9597c147b1bf.gif","https://media.discordapp.net/attachments/697501807571894322/766075375553871883/image0-2-1.gif","https://media.discordapp.net/attachments/697501807571894322/765531107118415882/dc8548c2e40084e8045bf90dbec11d6b.gif","https://media.discordapp.net/attachments/697501807571894322/765531009512898560/a_fec52b73aeeb3abf2a32270fcae5a5bd.gif","https://media.discordapp.net/attachments/697501807571894322/765530891559632916/image1-2-1.gif","https://media.discordapp.net/attachments/697501807571894322/765530858316365824/image0-1-1.gif","https://media.discordapp.net/attachments/697501807571894322/765530654807949352/catt.gif","https://media.discordapp.net/attachments/697501807571894322/765530467892985886/20200622_044332.gif","https://media.discordapp.net/attachments/697501807571894322/765182433707950130/tumblr_73f727f66fc14aa23b250ee1aface21f_76d4623e_400.gif","https://media.discordapp.net/attachments/697501807571894322/765111833904021534/a_35fd4047fd14e85e660dae9190f166e3.gif","https://media.discordapp.net/attachments/697501807571894322/764516811613798451/tenor_7.gif","https://media.discordapp.net/attachments/697501807571894322/764516799328419861/tenor_3.gif","https://media.discordapp.net/attachments/697501807571894322/764048928219070494/GIFs-20201030019.gif","https://media.discordapp.net/attachments/697501807571894322/762751536136192029/a_8f666096782dcc1a49bff9ea09e801ec.gif","https://media.discordapp.net/attachments/608711488806584330/767676061483401226/a_7a76ff1c5c29d8cc28031846164ab7ea.gif","https://media.discordapp.net/attachments/608711488806584330/767677437815291914/20200617_074807.gif","https://media.discordapp.net/attachments/608711488806584330/767678057082650654/1aba3597839beb3b55871a78d0e75ed0.gif","https://media.discordapp.net/attachments/608711488806584330/767678047355797515/11.gif","https://media.discordapp.net/attachments/608711488806584330/767675521168572426/a_15850818da95f252e8ff81006791bec8.gif","https://media.discordapp.net/attachments/608711488806584330/767671112212545556/b30112674243961d244f90de9666e2f2.gif","https://media.discordapp.net/attachments/608711488806584330/770963087012266014/a_b5c2811a566d7c3a47dc7692052ed637.gif","https://media.discordapp.net/attachments/608711488806584330/770975030740779008/a_18b001837053145f168b91fa355b639e.gif","https://media.discordapp.net/attachments/608711488806584330/770992001629290536/4jypm3.gif","https://media.discordapp.net/attachments/608711488806584330/770942434309046312/a_fc679bff04af79b132b61ddfc9a881f4.gif","https://media.discordapp.net/attachments/608711488806584330/770689002717970472/cat-sin-senorgifcom.gif","https://media.discordapp.net/attachments/608711488806584330/770654335481675786/en_tatli_kedi.gif","https://media.discordapp.net/attachments/608711488806584330/770649299762544660/a_a81a2054f2bbe5e18525c84b4e3e3936.gif","https://media.discordapp.net/attachments/608711488806584330/770649258021617734/741119609515671614.gif","https://media.discordapp.net/attachments/608711488806584330/770648802856140830/a_c378f445b6ddd3da7d03ff84ce802e7e.gif","https://media.discordapp.net/attachments/608711488806584330/770648689676910613/20200822_203240.gif","https://media.discordapp.net/attachments/608711488806584330/770574805572649000/BeneficialColorfulIsopod-size_restricted.gif","https://media.discordapp.net/attachments/608711488806584330/770574037457829898/wegfverg.gif","https://media.discordapp.net/attachments/608711488806584330/770573955999203348/monkey-gifs-1.gif","https://media.discordapp.net/attachments/608711488806584330/770573955164930048/cattt.gif","https://media.discordapp.net/attachments/608711488806584330/770573942632611840/tenor_4.gif","https://media.discordapp.net/attachments/608711488806584330/770572856261083166/tumblr_n9hqmv0rJO1qb2u78o1_400.gif","https://media.discordapp.net/attachments/608711488806584330/770572531849625610/gato.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("ANİMAL GİF")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);
}
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['animal', 'hayvan', 'anime-gif', 'hayvan-gif'],

  permLevel: 0

};

exports.help = {

  name: 'animal',

  description: 'matador',

  usage: 'animal'

};