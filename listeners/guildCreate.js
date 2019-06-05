const { Listener } = require('discord-akairo');
const Logger = require('../utils/Logger');

class GuildCreateListener extends Listener {
  constructor(){
    super('guildCreate', {
      event: 'guildCreate',
      emitter: 'client',
      category: 'client'
    });
  }

  exec(guild){
    // Logger.Info(`${guild.id}: ${guild} created!`)
  }
}

module.exports = GuildCreateListener;