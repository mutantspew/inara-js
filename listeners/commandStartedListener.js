const { Listener } = require('discord-akairo');
const Logger = require("../utils/Logger");

class CommandStartedListener extends Listener {
  constructor(){
    super('commandStarted', {
      eventName: 'commandStarted',
      emitter: 'commandHandler',
      category: 'commandHandler'
    });
  }

  exec(message, command){
    const tag = message.guild ? message.guild.name : `${message.author.tag}/PM`;

    Logger.Command(`--> ${command.id}`, { tag });
  }
}

module.exports = CommandStartedListener;