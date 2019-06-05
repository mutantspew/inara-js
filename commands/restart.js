const { Command } = require('discord-akairo');
const shell = require('shelljs');

class RestartCommand extends Command {
  constructor(){
    super('restart', {
      aliases: ['restart'],
      category: 'owner',
      ownerOnly: true,
      protected: true
    });
  }

  async exec(message){
    message.reply('Restarting Inara, :wave:')
      .then(message.reply('jk lol'));
      // .then(shell.echo('Restarting Inara'))
      // .then(shell.exec('pm2 restart index.js'));
      // .then(shell.exec('pm2 restart inara'));
  }
}

module.exports = RestartCommand;