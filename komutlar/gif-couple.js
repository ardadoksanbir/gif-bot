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
let replies = ["https://cdn.discordapp.com/attachments/694694675679936585/737306643355664384/image02.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306628528930816/a_1b0b9e83a11f0e8280c5409e85dc6ecf.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306606068564108/image0_7.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306593485651979/image01.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306585470074890/20.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305042096488478/image03.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305094038749224/a_788eee9ad77c81e7406d1c06c75de1a1.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305150607327255/larissa56.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305158668517486/image0.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305302352789554/image0-4.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306359330111548/gif_dc_dc_dc.gif","https://cdn.discordapp.com/attachments/694694675679936585/736981583474589777/a_48d8e6c6b3ab9bdc3d27e9dc7bfbee53.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305354270015628/a_b77c51a4aa5bc3460d375f415dec1507.gif","https://cdn.discordapp.com/attachments/694694675679936585/737304729444679730/a_73dea0b44c5e1f57bdbbfc036b7cf3dc.gif","https://cdn.discordapp.com/attachments/694694675679936585/737304802501066862/image0-2.gif","https://cdn.discordapp.com/attachments/694694675679936585/737109543263404132/image0.gif","https://cdn.discordapp.com/attachments/694694675679936585/737066393694109718/a_d8f145cc1f4ad05bf97a118f64d673ff.gif","https://cdn.discordapp.com/attachments/694694675679936585/737066415877652490/image0_8.gif","https://cdn.discordapp.com/attachments/694694675679936585/737013297336942603/a_37397898637eca6eae7458899b12826c.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898861913604156/image0-10.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898644808040538/a_e4931ce8b4c41a2f4bb15c51dfd0b898.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898505427386378/f6bd4fa420a9d8ce58c6519a90bc8bc0.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898257925570600/a_1e816625dd242018b144b924043a7933.gif","https://cdn.discordapp.com/attachments/694694675679936585/736897942342074428/a_8634244b88f7dc8eebbf416640489ef2.gif","https://media.discordapp.net/attachments/756262607110799370/767100781312606208/a_01833a57aeb9bce3a8387e4bfb1d2510.gif","https://images-ext-2.discordapp.net/external/qJCZij4nb0FpTX3WO3rQl1ZelVBhCkWACB0dX2G1MJ8/https/media.discordapp.net/attachments/756262607110799370/767101247076827166/0c1526b8c1e29b13752c95817b7d1df9.gif","https://media.discordapp.net/attachments/756262607110799370/767101427901923358/5_1.gif","https://media.discordapp.net/attachments/756262607110799370/767101460025966602/a_7e8738c9a30eb5bbe02390fe0e5ac4ae.gif","https://media.discordapp.net/attachments/756262607110799370/767101765480087602/a_2997222410acd1d15eb6381a4d3107ee.gif","https://media.discordapp.net/attachments/756262607110799370/767101854210326579/a_b95c62cda2ef57b8fd9a6210c1a25c54.gif","https://media.discordapp.net/attachments/756262607110799370/767101997937590302/319.gif","https://media.discordapp.net/attachments/631918691801366539/767313397192327168/image0-13.gif","https://media.discordapp.net/attachments/631918691801366539/767672272797696010/couplegif25.gif","https://media.discordapp.net/attachments/631918691801366539/767672198549995550/a_c41ce54e19158b04f41758e4704af704.gif","https://media.discordapp.net/attachments/757741676696699090/760502795957829733/a_d30c5035486f82fa9896604fc6109b7b.gif","https://media.discordapp.net/attachments/757741676696699090/760502534753353798/image0-1.gif","https://cdn.discordapp.com/attachments/694694675679936585/767511891391021076/a_52612beb178a271b0cb7bb01bd79ac9e.gif","https://cdn.discordapp.com/attachments/694694675679936585/767511799129702430/luisa7-3.gif","https://cdn.discordapp.com/attachments/694694675679936585/767511616345473043/luisa4-2.gif","https://cdn.discordapp.com/attachments/694694675679936585/767487936832471040/image3.gif","https://cdn.discordapp.com/attachments/694694675679936585/767487935669862440/a_e7454dea5cd0ea81c5c71da2672737ae.gif","https://cdn.discordapp.com/attachments/694694675679936585/767384311895949312/a_f358444a15c44e276a2ebd87a6d755e3.gif","https://cdn.discordapp.com/attachments/694694675679936585/767384195307667476/a_f9521465818689e48c019801da0bd61a.gif","https://cdn.discordapp.com/attachments/694694675679936585/767384176771989504/3-4.gif","https://cdn.discordapp.com/attachments/694694675679936585/767384168517599242/couple_gif-1.gif","https://cdn.discordapp.com/attachments/694694675679936585/767345808311844864/a_50520216df0b3799c150b4774da1f9a4.gif","https://cdn.discordapp.com/attachments/694694675679936585/767290335385747466/sev417.gif","https://cdn.discordapp.com/attachments/694694675679936585/767290147208822804/sev449.gif","https://cdn.discordapp.com/attachments/694694675679936585/767290145807663135/sev444.gif","https://cdn.discordapp.com/attachments/694694675679936585/767290070000205824/sev456.gif","https://cdn.discordapp.com/attachments/694694675679936585/767289952739393556/sev465.gif","https://cdn.discordapp.com/attachments/694694675679936585/767289952739393556/sev465.gif","https://cdn.discordapp.com/attachments/694694675679936585/767289952265306122/sev469.gif","https://cdn.discordapp.com/attachments/694694675679936585/767289950189125652/sev466.gif","https://cdn.discordapp.com/attachments/694694675679936585/767287738218446869/image1-2-1.gif","https://cdn.discordapp.com/attachments/694694675679936585/767287737262145567/a_91e70746995835c27a8a1129b8537a13.gif","https://cdn.discordapp.com/attachments/694694675679936585/767287331501244477/sev499.gif","https://cdn.discordapp.com/attachments/694694675679936585/767287330100215828/sev478.gif","https://cdn.discordapp.com/attachments/694694675679936585/767287266234073108/sev479.gif","https://cdn.discordapp.com/attachments/694694675679936585/767287264987316244/sev476.gif","https://media.discordapp.net/attachments/694694675679936585/767261728244760606/a_e524078ccbe65ebaab63b10c4281e68a.gif","https://cdn.discordapp.com/attachments/694694675679936585/767156542033625099/a_0881a1cc7026db96c7e5ff8a7a7bd2de.gif","https://media.discordapp.net/attachments/694694675679936585/771039539036553226/a_1e816625dd242018b144b924043a7933.gif","https://media.discordapp.net/attachments/694694675679936585/771044685485441064/a_5fa695b652b714d36ee3083f693c04dd.gif","https://media.discordapp.net/attachments/694694675679936585/771045173450899456/a_5ad87afd24f1f5e8ba4aa2534520af13.gif","https://media.discordapp.net/attachments/694694675679936585/771045182862655518/a_8b3183ebad9fbf6e398ba2d94d0919c5.gif","https://media.discordapp.net/attachments/694694675679936585/771049616321675345/a_f5ca6d485cd5495adca4e38bb633ddc2.gif","https://media.discordapp.net/attachments/694694675679936585/771049666871164968/a_01f34598735211666aba8ae0cf5873b3.gif","https://media.discordapp.net/attachments/694694675679936585/771049720058609694/28.gif","https://media.discordapp.net/attachments/694694675679936585/771049801625763880/8.gif","https://media.discordapp.net/attachments/694694675679936585/771062261476753408/a_269204c129602a7b0023dfe273199d74.gif","https://media.discordapp.net/attachments/694694675679936585/771065286174441552/image0-54.gif","https://media.discordapp.net/attachments/694694675679936585/771065016765513758/image0-144.gif","https://media.discordapp.net/attachments/694694675679936585/771065002924310558/image0-135.gif","https://media.discordapp.net/attachments/694694675679936585/771064372281868328/a_464af771a8928c0bc266ec9aba6625d7.gif","https://media.discordapp.net/attachments/694694675679936585/770984400652468234/Gif_23.gif","https://media.discordapp.net/attachments/694694675679936585/770984384365985802/Gif_21.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("COUPLE GİF")

.setColor("BLUE")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);
}
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-couple','couple-gif','gifcouple','couplegif'],

  permLevel: 0

};

exports.help = {

  name: 'couple',

  description: 'matador',

  usage: 'couple'

};