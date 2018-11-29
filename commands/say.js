const { Command } = require('discord-akairo');

class SayCommand extends Command {
  constructor(){
    super('say', {
      aliases: ['say'],
      category: 'general',
      description: { content: 'Bot will say something' },
      channelRestriction: 'guild',
      userPermissions: ['MANAGE_MESSAGES']
    });
  }

  exec(message, args){
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
  }
}

module.exports = SayCommand;