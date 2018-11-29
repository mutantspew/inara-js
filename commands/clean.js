const { Command } = require('discord-akairo');

class CleanCommand extends Command {
  constructor(){
    super('clean', {
      aliases: ['clean', 'purge', 'clear'],
      group: 'moderation',
      channel: 'guild',
      userPermissions: ['MANAGE_MESSAGES'],
      clientPermissions: ['MANAGE_MESSAGES'],
      args: [
        {
          id: 'limit',
          type: 'number',
          prompt: { 
            start: 'How many messages would you like to delete?'
          }
        }
      ],
      description: {
        content: 'Cleans messages',
        usage: '[# of messages]',
        examples: ['100']
      }
    });
  }
  async exec(message, { limit }){
    const messagesToDelete = await message.channel.fetchMessages({ limit: limit + 1 }).catch(error => null);
    message.channel.bulkDelete(messagesToDelete.array().reverse()).catch(error => null);
  }
}

module.exports = CleanCommand;