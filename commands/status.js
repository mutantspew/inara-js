const { Command } = require('discord-akairo');

class StatusCommand extends Command {
  constructor(){
    super('status', {
      aliases: ['status', 'stats', 'uptime'],
      category: 'general',
      description: { content: 'Gives the current status of the server' }
    });
  }

  exec(message){
    let embed = this.client.util.embed()
    .setTitle('Server Info')
    .addField('Server Name', `${message.guild.name}`)
    .addField('Total Members', `${message.guild.memberCount}`)
    .addField('Bot Name', this.client.user.username)
    .addField('Created On', this.client.user.createdAt)
    
  return message.channel.send({ embed });
  }
}

module.exports = StatusCommand;