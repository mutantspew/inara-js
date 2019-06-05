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
    const Status = ['@inara help', 
                    'Learning ES 6+ JavaScript', 
                    'What\'s an ECMA Script?', 
                    'Ping for DAAAAYYYZZZZZ!']
    
    Logger.Info(`${this.client.user.tag}, ready to serve ${this.client.users.size} users in ${this.client.guilds.size} servers`);
    
    const Interval = 1 * 60 * 1000; //minutes * seconds * 1000 = milliseconds
    
    // this.client.user.setActivity(`Learning JavaScript`);
    return setInterval(() => {
      const randomStatus = Math.floor(Math.random() * Status.length)
      this.client.user.setActivity(`${Status[randomStatus]}`);
    }, Interval);
  }
}

module.exports = ReadyListener;