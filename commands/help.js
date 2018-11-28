const { Command } = require('discord-akairo');
const Logger = require("../utils/Logger");

class HelpCommand extends Command {
  constructor(){
    super('help', {
      aliases: ['help', 'h'],
      category: 'general',
      clientPermissions: ['EMBED_LINKS'],
      args: [
        {
          id: 'command',
          type: 'commandAlias',
          prompt: {
            start: 'Which command do you need help with?',
            retry: 'Please provide a valid command.',
            optional: true
          }
      }],
      description: {
        content: 'Displays a list of commands or information about a command.',
        usage: '[command]',
        examples: ['', 'ping', 'status']
      }
    });
  }

  exec(message, { command }){
    if(!command) return this.execCommandList(message);

    const prefix = this.handler.prefix(message);
    const description = Object.assign({
      content: 'No Description Available',
      usage: '',
      examples: [],
      fields: []
    }, command.description);

    const embed = this.client.util.embed()
    .setColor(0xFFAC33)
    .setTitle(`\`${prefix}${command.aliases[0]} ${description.usage}\``)
    .addField('Description', description.content);

    for(const field of description.fields) embed.addField(field.name, field.value);

    if(description.examples.length){
      const text = `${prefix}${command.aliases[0]}`;
      embed.addField('Examples:', `\`${text} ${description.examples.join(`\`\n\`${text} `)}\``, true);
    }

    if(command.aliases.length > 1){
      embed.addField('Aliases:', `\`${command.aliases.join(' ')}\``, true);
    }

    return message.util.send({embed});
  }

  async execCommandList(message){
    return undefined;
  }
}

module.exports = HelpCommand;