const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'tbb') {
        msg.reply('I was summoned!');
    }

    if(msg.content === 'tbb help'){
        msg.reply('_*Here help comes!!*_')
    }

    if(msg.content === 'rickroll'){
        msg.reply('NEVER GONNA GIVE YOU UP NEVER GONNA LET YOU DOWN NEVER GONNA TURN AROUND AND DESERT YOU ')
    }
});
client.login('NzAwMjEzOTk4NjYyMTg5MDc2.XpgRfw.tolHL6cwsMT0_czEqH2BhT7GGJY');