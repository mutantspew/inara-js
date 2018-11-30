const { Listener } = require('discord-akairo');
const Logger = require('../utils/Logger');

class ErrorListener extends Listener {
  constructor(){
    super('error', {
      eventName: 'error',
      emitter: 'commandHandler',
      category: 'commandHandler'
    });
  }

  exec(err, message){
    Logger.Error('An error occured in a command');

    const tag = message.guild ? message.guild.name : `${message.author.tag}/PM`;
    
    Logger.Error(message.content, { tag });
    Logger.StackTrace(err);

    if(message.guild ? message.channel.permissionsFor(this.client.user).has('SEND_MESSAGES') : true){
      const owners = this.client.ownerID.map(id => this.client.users.get(id).tag);
      message.channel.send([
        `An error occured, please contact ${owners.join(' or ')}.`,
        '```js',
        err.toString(),
        '```'
      ]);
    }
  }
}

module.exports = ErrorListener;