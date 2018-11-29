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
    let start = Date.now(); 
    message.util.reply('Pong!').then(m => {
      let diff = (Date.now() - start);
      let API = (this.client.ping).toFixed(2);

      const embed = this.client.util.embed()
        .setTitle('🔔 Pong!')
        .setColor(0xFFAC33)
        .setThumbnail('https://i.shisify.com/BOY9M0h0.png')
        .addField('📶 Latency', `${diff}ms`, true)
        .addField('💻 Response', `${API}ms`, true);

      m.edit({ embed });
    });

    // return message.reply('Pong!');
  //   return message.util.reply('Pong!').then(sent => {
  //     const timeDiff = (sent.editedAt || sent.createdAt) - (message.editedAt || message.createdAt);
  //     const text = `🔂\u2000**RTT**: ${timeDiff} ms\n💟\u2000**Heartbeat**: ${Math.round(this.client.ping)} ms`;
  //     return message.util.reply(`Pong!\n${text}`);
  // });
  }
}

module.exports = PingCommand;