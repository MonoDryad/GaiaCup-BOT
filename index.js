const { Client, Intents, MessageEmbed, TextChannel, MessageFlags } = require('discord.js')
const { ReactionRole } = require("discordjs-reaction-role")
const { token } = require('./env.json');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
  ],
  partials: ["MESSAGE", "REACTION"]
})

const rr = new ReactionRole(client, [
  {
    messageId: "971083168897695745",
    reaction: "886655656613015583",
    roleId: "971059812190265345"
  },
  {
    messageId: "971083058956611615",
    reaction: "886653108590092299",
    roleId: "971095855861993574"
  },
  {
    messageId: "971082888080658452",
    reaction: "886652938968244254",
    roleId: "971095913147826176"
  },
  {
    messageId: "971083332588806225",
    reaction: "886652843325521951",
    roleId: "971095992948641832"
  },
])

// tabela A

const tabelaA = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Grupo A')
  .setDescription('Tabela do GRUPO A da Quarta Edição da Gaia Cup')
  .addFields(
    { name: '1º Eight Divine Ways - 4/0', value: 'EDW' },
    { name: '2º Knave Fury Black E-sport - 2/2', value: 'KFS' },
    { name: '3º Phoenix Warriors Gaming - 0/2', value: 'PWG [DESISTENTE]' })
  .setTimestamp()
  .setFooter({ text: 'Visite a o site da Gaia Cup', iconURL: 'https://gaiacup.netlify.app/images/dourando.png' });

// // // //

const tabelaB = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Grupo B')
  .setDescription('Tabela do GRUPO B da Quarta Edição da Gaia Cup')
  .addFields(
    { name: '1º Orange Kingdom Owari - 3/1', value: 'OKO' },
    { name: '2º Black Diamond E-sports - 2/2', value: 'BDD' },
    { name: '3º NAOKI White - 1/3', value: 'NKI' })
  .setTimestamp()
  .setFooter({ text: 'Visite a o site da Gaia Cup', iconURL: 'https://gaiacup.netlify.app/images/dourando.png' });

// // // //

const tabelaC = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Grupo C')
  .setDescription('Tabela do GRUPO C da Quarta Edição da Gaia Cup')
  .addFields(
    { name: '1º Lotus Galaxy - 3/1', value: 'LG' },
    { name: '2º Orange Kingdom Umayyad - 3/1', value: 'OKU' },
    { name: '3º Team NoWay - 0/4', value: 'TNW' })
  .setTimestamp()
  .setFooter({ text: 'Visite a o site da Gaia Cup', iconURL: 'https://gaiacup.netlify.app/images/dourando.png' });

// // // //

const tabelaD = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Grupo D')
  .setDescription('Tabela do GRUPO D da Quarta Edição da Gaia Cup')
  .addFields(
    { name: '1º NEO Akihabara - 4/0', value: 'AKH' },
    { name: '2º Orange Kingdom Ming - 1/3', value: 'OKM' },
    { name: '3º Dark Tenacity - 1/3', value: 'DKA' })
  .setTimestamp()
  .setFooter({ text: 'Visite a o site da Gaia Cup', iconURL: 'https://gaiacup.netlify.app' });

// // // //

  var hr = 0;
  var min = 0;
  var sec = 0;
  var stoptime = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
})


client.on('messageCreate',
  function(msg) {
    let oldUserName = msg.author.username
    if (msg.channel.id === '970862448569626645') {
      if (msg.content === "DKT" || msg.content === "dkt") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('DKT ' + oldUserName)
        msg.member.roles.add(['884924723883024424'])
        msg.delete()
        client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924723883024424")}, avise a moderação.`)

      } else if (msg.content === "EDW" || msg.content === "edw") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('EDW ' + oldUserName)
        msg.member.roles.add(['884924723883024424'])
        msg.delete()
        client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924723883024424")}, avise a moderação.`)


      } else if (msg.content === "BDD" || msg.content === "bdd") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('BDD ' + oldUserName)
        msg.member.roles.add(['884924725854343269'])
        msg.delete()
        client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924725854343269")}, avise a moderação.`)

      } else if (msg.content === "NKI" || msg.content === "nki") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('NKI ' + oldUserName)
        msg.member.roles.add(['884924596153880597'])
        msg.delete()
        client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924596153880597")}, avise a moderação.`)

      } else if (msg.content === "AKH" || msg.content === "akh") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('AKH ' + oldUserName)
        msg.member.roles.add(['884924597470920765'])
        msg.delete()
        client.channels.cache.get(`957764577553154158`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924597470920765")}, avise a moderação.`)

      } else if (msg.content === "KFS" || msg.content === "kfs") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('KFS ' + oldUserName)
        msg.member.roles.add(['884924599731638352'])
        msg.delete()
        client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924599731638352")}, avise a moderação.`)

      } else if (msg.content === "TNW" || msg.content === "tnw") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('TNW ' + oldUserName)
        msg.member.roles.add(['884924597990993950'])
        msg.delete()
        client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924597990993950")}, avise a moderação.`)

      } else if (msg.content === "OKM" || msg.content === "okm") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('OKM ' + oldUserName)
        msg.member.roles.add(['884924589325557830'])
        msg.delete()
        client.channels.cache.get(`957764577553154158`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924589325557830")}, avise a moderação.`)

      } else if (msg.content === "OKO" || msg.content === "oko") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('OKO ' + oldUserName)
        msg.member.roles.add(['884924598448177202'])
        msg.delete()
        client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924598448177202")}, avise a moderação.`)

      } else if (msg.content === "OKU" || msg.content === "oku") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('OKU ' + oldUserName)
        msg.member.roles.add(['884924727641133087'])
        msg.delete()
        client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924727641133087")}, avise a moderação.`)

      } else if (msg.content === "LG" || msg.contennt === "lg") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('LG ' + oldUserName)
        msg.member.roles.add(['884924729109131305'])
        setTimeout(function() {

          client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924729109131305")}, avise a moderação.`)
          msg.delete()
        }, 1000);



      } else if (msg.content === "COACH" || msg.content === "coach") {
        msg.reply("Cargo setado!")
        msg.member.setNickname('[COACH] ' + oldUserName)
        msg.member.roles.add(['963190126253596703'])
        msg.delete()

      }
    } else {
      if (msg.content === "ping") {
        msg.reply("pong")
      } else if (msg.content === "!opensource") {
        msg.reply("O bot da Gaia Cup é open source! Visite o GITHUB para acessar o código fonte! (https://github.com/MonoDryad/GaiaCup-BOT)")
      } else if (msg.content === "!tabelaA") {
        msg.reply({ embeds: [tabelaA] })
      } else if (msg.content === "!tabelaB") {
        msg.reply({ embeds: [tabelaB] })
      } else if (msg.content === "!tabelaC") {
        msg.reply({ embeds: [tabelaC] })
      } else if (msg.content === "!tabelaD") {
        msg.reply({ embeds: [tabelaD] })
      } else if(msg.content === "!uptime"){
        msg.reply(`Eu estou vivo já faz ${hr}:${min}:${sec}!`)
      }
    }
  })

timerCycle()

  function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    

    setTimeout(function() {
      timerCycle()
    }, 1000);
  }
}
client.login(token);
