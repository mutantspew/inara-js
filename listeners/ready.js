const { Listener } = require('discord-akairo');
const Logger = require("../utils/Logger");

class ReadyListener extends Listener {
  constructor(){
    super('ready', {
      emitter: 'client',
      eventName: 'ready'
    });
  }

  exec(){
    Logger.Info(`${this.client.user.tag}, ready to serve ${this.client.users.size} users in ${this.client.guilds.size} servers`);
    this.client.user.setActivity(`Learning JavaScript`);
  }
}

module.exports = ReadyListener;