const { Listener } = require('discord-akairo');
const Logger = require('../utils/Logger');

class CommandBlockedListener extends Listener {
  constructor(){
    super('commandBlocked', {
      event: 'commandBlocked',
      emitter: 'commandHandler',
      category: 'commandHandler'
    });
  }

  exec(message, command, reason){
    const text = {
      owner: () => 'You must be the owner to use this command.',
      guild: () => 'You must be in a guild to use this command.',
      dm: () => 'Can\'t place that here!'
    }[reason];

    const tag = message.guild ? message.guild.name : `${message.author.tag}/PM`;
    Logger.Log(`--> ${command.id} - ${reason}`, { tag });

    if(!text) return;
    if(message.guild ? message.channel.permissionsFor(this.client.user).has('SEND_MESSAGES') : true){
      message.reply(text());
      if(message.channel.type !== 'dm') message.delete();
    }
  }
}

module.exports = CommandBlockedListener;