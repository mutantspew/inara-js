const { Command } = require('discord-akairo');

class ServerCommand extends Command {
  constructor(){
    super('server', {
      aliases: ['server'],
      category: 'general',
      description: { content: 'Gives the current server information' }
    });
  }

  exec(message){
    let embed = this.client.util.embed()
    .setTitle('Server Info')
    .addField('Server Name', `${message.guild.name}`)
    .addField('Total Members', `${message.guild.memberCount}`);
    
  return message.channel.send({ embed });
  }
}

module.exports = ServerCommand;