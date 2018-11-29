const { Command } = require('discord-akairo');

class PingCommand extends Command {
  constructor(){
    super('ping', {
      aliases: ['ping'],
      category: 'general',
      description: { content: 'Pings Inara.' }
    });
  }

  exec(message){
    // let start = Date.now(); 
    // message.channel.send(message.channel.id, 'Pong!').then(m => {
    //   let diff = (Date.now() - start);
    //   let API = (this.client.ping).toFixed(2);

    //   const embed = this.client.util.embed()
    //     .setTitle('🔔 Pong!')
    //     .setColor(0xFFAC33)
    //     .setThumbnail('https://i.shisify.com/BOY9M0h0.png')
    //     .addField('📶 Latency', `${diff}ms`, true)
    //     .addField('💻 Response', `${API}ms`, true);

    //   m.edit({ embed });
    // });

    return message.reply('Pong!');
  }
}

module.exports = PingCommand;