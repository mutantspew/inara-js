const { Command } = require('discord-akairo');
const Logger = require('../utils/Logger');

class ReloadCommand extends Command {
  constructor(){
    super('reload', {
      aliases: ['reload', 'r'],
      category: 'owner',
      ownerOnly: true,
      quoted: false,
      args: [
        {
          id: 'type',
          prefix: ['type:'],
          type: [['command', 'c'], ['inhibitor', 'i'], ['listener', 'l']],
          default: 'command'
        },
        {
          id: 'module',
          type: (word, message, { type }) => {
            if(!word) return null;
            
            const resolver = this.handler.resolver.type({
              command: 'commandAlias',
              inhibitor: 'inhibitor',
              listener: 'listener'
            }[type]);

            return resolver(word);
          }
        }
      ],
      description: {
        content: 'Reloads a module.',
        usage: '<module> [type:]'
      }
    });
  }
  exec(message, { type, module: mod }){
    if(!mod){
      return message.util.reply(`Invalid ${type} ${type === 'command' ? 'alias' : 'ID'} specified to reload.`);
    }

    try{
      mod.reload();
      return message.util.reply(`Successfully reloaded ${type}\`${mod.id}\`.`);
    }
    catch(err){
      Logger.Error(`Error occured reloading ${type}\`${mod.id}\`.`);
      Logger.StackTrace(err);
      return message.util.reply(`Failed to reload ${type}\`${mod.id}\`.`);
    }
  }
}

module.exports = ReloadCommand;