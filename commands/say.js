const { Command } = require('discord-akairo');
const Logger = require('../utils/Logger');

class SayCommand extends Command {
  constructor(){
    super('say', {
      aliases: ['say'],
      category: 'general',
      description: { content: 'Bot will say something' },
      channelRestriction: 'guild',
      userPermissions: ['MANAGE_MESSAGES'],
      args: [
        {
          id: 'text',
          // type: 'string'
          match: 'content',
          prompt: {
            start: 'What would you like the bot to say?'
          }
        }
      ]
    });
  }

  exec(message, { text }){
    Logger.Debug(`${message.content}`);
    Logger.Debug(`${text}`);

    // let botMessage = text.join(' ');
    // Logger.Debug(botMessage);

    message.delete().catch();
    message.channel.send(text);
  }
}

module.exports = SayCommand;