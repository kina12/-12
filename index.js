const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODA1NDM4MzUwMjQ4NTA5NDUw.YBa46w.Qg4M52evqemb_b7od_NbUqHh5LA';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === 'Hello') {
        message.reply('Hello, world!')
    }
});

client.login(token);