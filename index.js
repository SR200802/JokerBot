const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = "!";
const prefix = '!';

const token = 'ODE2NDYxMTI1OTMxNDk5NTMw.YD7SrQ.WGDrG7oi7Xr82sh8vp9Jlp3K-Uk'

client.on('ready', () =>{
    console.log('This bot is online!, Change Successful');
    
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'society'){
        message.channel.send('https://tenor.com/view/society-historyoftheentireworld-gif-8631156');
    }
    else if(command === 'hunka hunka')
    {
        message.channel.send('https://gfycat.com/frayednextfugu');
    }




    /*switch (args[0]){
        case 'duke':
            client.commands.get('play').execute(messgae, args);
            break;
        case 'insult':

            break;
        case 'testing':
            message.reply('yup');
            break;
        

            


        
            

    }*/
})

client.login(/*process.env.token*/token);