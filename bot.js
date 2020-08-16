const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://quran33243536.glitch.me/`);
}, 280000);
// ============ Settings =================== //
const PREFIX = "-"; // برافيكس
const CMD = 'q'; //  امر تغشيل قائمة الاصوات
const GUILDID = '742001914891337779'; // اي دي السيرفر  
const CHANNELID = '742001916355280964'; // اي دي الروم
const ownerID = ["726412593169825853"]; // ايدي ادارة البوت او صاحب البوت .. 
// ============ Settings =================== //
const Discord = require('discord.js');
const client = new Discord.Client();
const Util = require('discord.js');
const ytdl = require('ytdl-core');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyCs15LdVfyPIZLtvQLoLH7ld8C2bdYsdf0");
const queue = new Map();
const fs = require('fs');
const ms = require('parse-ms')
const gif = require("gif-search");
const converter = require('number-to-words');
const moment = require('moment');
const dateformat = require('dateformat');

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
	client.user.setActivity("&quran",{type: 'STREAMING'});
});

client.on('message', message => {
    if(message.content.startsWith(PREFIX + CMD)) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**You Must be in Voice Channel**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("Quran Command", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h')
      .setDescription(`**
     🕋 Quran Commands 🕋
	 
🇦 القرآن كاملاً ماهر المعيقلي
🇧 القرآن كاملاً هزاع البلوشي
🇨 القرآن كاملاً مشاري العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 جميع تلاوات القارئ اسلام صبحي صوت يدخل القلب بدون استئذان
**`)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Jj91LzyEva8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`); //Hi
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=GVz59nEIUsY", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now Off**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=oAlCxxixthg", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});


client.on('ready',async () => {
  setInterval(() => {
client.channels.find(ch => ch.id === CHANNELID && ch.type === 'voice').join();
},1); 
 voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type ::  ${channel.type}, It must be Voice.`);
    }
  }
});

client.on('message', message => {
      if (!ownerID.includes(message.author.id)) return;
  var helplist = `**:gear: | اوامر الادارة:  
> SetS : لجعل وضع البوت ستريمنق
> setW : لجعل وضع البوت واتشنق
> setL : لجعل وضع البوت ليستننق
> setP : لجعل وضع البوت بلاينق
> setName :  لتغيير أسم البوت
> setAvatar : لتغيير صورة البوت
> setStatus : لتغيير حالة البوت
**`
  if(message.content === PREFIX + 'help') {
    message.author.send(helplist);
  }
  });

client.on('message', message => {

    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(PREFIX + 'SetS')) {
      if (!ownerID.includes(message.author.id)) return;
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/Kahrbaa');

    } else if(message.content.startsWith(PREFIX + 'setW')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(PREFIX + 'setL')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(PREFIX + 'setP')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(PREFIX + 'setName')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(PREFIX + 'setAvatar')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(PREFIX + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
		client.user.setStatus(argresult);


    }

  });

client.on('message', message => {
    if(message.content.startsWith(PREFIX + 'setAVLOGO1')) {
      if (!ownerID.includes(message.author.id)) return;
    client.user.setAvatar('https://www.konfest.com/wp-content/uploads/2019/06/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-Quran-Muslim-Religious-Book-Allah-Islam-Read-Holy-Eid-Ramadan-Symbol-Religion-13.png');
        message.author.send('** تـم تغير الصورة بنجــاح **');
 }   else  if(message.content.startsWith(PREFIX + 'setAVLOGO2')) {
    client.user.setAvatar('https://i0.wp.com/www.omanobserver.om/wp-content/uploads/2017/05/Ramadhan-Icon1.png?fit=600%2C493&ssl=1');
        message.author.send('** تـم تغير الصورة بنجــاح **');
 }   else  if(message.content.startsWith(PREFIX + 'setAVLOGO3')) {
    client.user.setAvatar('https://ilearnhub.org/wp-content/uploads/2018/02/muslim-2.jpg');
        message.author.send('** تـم تغير الصورة بنجــاح **');
 }   else  if(message.content.startsWith(PREFIX + 'setAVLOGO4')) {
    client.user.setAvatar('https://pngimage.net/wp-content/uploads/2018/06/logo-al-quran-png-2.png');
        message.author.send('** تـم تغير الصورة بنجــاح **');
 }   else  if(message.content.startsWith(PREFIX + 'setAVLOGO5')) {
    client.user.setAvatar('https://png.pngtree.com/png-clipart/20190516/original/pngtree-quran-creative-logo-png-image_3668901.jpg');
        message.author.send('** تـم تغير الصورة بنجــاح **');
 }   else  if(message.content.startsWith(PREFIX + 'setAVLOGO6')) {
    client.user.setAvatar('https://www.freeiconspng.com/uploads/quran-icon-png-8.png');
        message.author.send('** تـم تغير الصورة بنجــاح **');
 }   else  if(message.content.startsWith(PREFIX + 'setAVLOGO7')) {
    client.user.setAvatar('https://www.freepnglogos.com/uploads/al-quran-png/al-quran-quran-transparent-png-background-image-islamic-psd-templates-9.png');
        message.author.send('** تـم تغير الصورة بنجــاح **');
 }
  });


client.login(process.env.BOT_TOKEN)