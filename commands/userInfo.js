const { Command } = require('discord-akairo');

class UserInfoCommand extends Command {
  constructor(){
    super('user-info', {
      aliases: ['user-info'],
      category: 'general',
      description: { content: 'Gives the current users information' }
    });
  }

  exec(message){
    let embed = this.client.util.embed()
    .setTitle('User Info')
    .addField('Username', `${message.author.username}`)
    .addField('Your ID', `${message.author.id}`);
    
  return message.channel.send({ embed });
  }
}

module.exports = UserInfoCommand;