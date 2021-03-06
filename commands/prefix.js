const { Command } = require('discord-akairo');

class PrefixCommand extends Command {
  constructor(){
    super('prefix', {
      aliases: ['prefix'], 
      category: 'general',
      channel: 'guild', 
      userPermissions: ['MANAGE_GUILD'],
      args: [
        {
          id: 'prefix',
          type: word => {
            if(!word) return null;
            if(/\s/.test(word) || word.length > 5) return null;
            return word;
          },
          prompt: {
            start: 'What would you like to set the prefix to?',
            retry: 'Please provide a prefix without spaces and less than 5 characters.'
          }
        }
      ],
      description: {
        content:[
          'Changes the prefix of the guild.',
          'The prefix must not contain spaces and be below 5 characters!'
        ],
        usage: '<prefix>',
        examples: ['*', '-', '.', '!']
      }
    });

    this.disable();
  }

  async exec(message, { prefix }){
    await this.client.settings.set(message.guild, 'prefix', prefix);
    if(prefix === '.') return message.util.send('Prefix has been reset to `.`');
    return message.util.reply(`Prefix has been set to \`${prefix}\``);
  }
}

module.exports = PrefixCommand;