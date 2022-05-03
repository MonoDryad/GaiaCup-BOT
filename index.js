const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate',
    function(msg){
      let oldUserName = msg.author.username
          if(msg.channel.id === '970862448569626645'){
               if(msg.content === "ping"){
                    msg.reply("pong")
               }else if(msg.content === "DKT" || msg.content === "dkt"){
                    oldUserName += '- DKT'
                    msg.reply("Cargo setado!")
                    msg.member.setNickname(msg.content.replace('changeNick ', oldUserName));
                    msg.member.roles.set(['884924723883024424'])
                    msg.delete()
                    client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924723883024424")}, avise a moderação.`)
                  
               }else if(msg.content === "EDW" || msg.content === "edw"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924723883024424'])
                    msg.delete()
                    client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924723883024424")}, avise a moderação.`)
          
               }else if(msg.content === "BDD" || msg.content === "bdd"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924725854343269'])
                    msg.delete()
                    client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924725854343269")}, avise a moderação.`)
          
               }else if(msg.content === "NKI" || msg.content === "nki"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924596153880597'])
                    msg.delete()
                    client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924596153880597")}, avise a moderação.`)

               }else if(msg.content === "AKH" || msg.content === "akh"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924597470920765'])
                    msg.delete()
                    client.channels.cache.get(`957764577553154158`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924597470920765")}, avise a moderação.`)
          
               }else if(msg.content === "PGA" || msg.content === "pga"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924599731638352'])
                    msg.delete()
                    client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924599731638352")}, avise a moderação.`)
          
               }else if(msg.content === "TNW" || msg.content === "tnw"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924597990993950'])
                    msg.delete()
                    client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924597990993950")}, avise a moderação.`)

               }else if(msg.content === "TSS"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924589325557830'])
                    msg.delete()
                    client.channels.cache.get(`957764577553154158`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924589325557830")}, avise a moderação.`)

               }else if(msg.content === "OKO" || msg.content === "oko"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924598448177202'])
                    msg.delete()
                    client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924598448177202")}, avise a moderação.`)

               }else if(msg.content === "OKU"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['884924727641133087'])
                    msg.delete()            
                    client.channels.cache.get(`937488247658008616`).send(`<@${msg.member.user.id}>, agora você tem permissão para ver esse e o canal Salas! Se esse jogador não é da ${msg.guild.roles.cache.find(r => r.id === "884924727641133087")}, avise a moderação.`)
          
               }else if(msg.content === "COACH" || msg.content === "coach"){
                    msg.reply("Cargo setado!")
                    msg.member.roles.set(['963190126253596703'])
                    msg.delete()

               }
          }else{
     }
})

client.login(process.env['TOKEN']);
