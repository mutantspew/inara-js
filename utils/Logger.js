const chalk = require('chalk');
const momment = require('moment');
const util = require('util');

class Logger {
  static Log(msg, { color = 'grey', tag = 'Log'} = {}){
    this.write(msg, { color, tag });
  }

  static Error(msg, { color = 'red', tag = 'Error'} = {}){
    this.write(msg, { color, tag, error: true });
  }

  static Warn(msg, { color = 'yellow', tag = 'Warning'} = {}){
    this.write(msg, { color, tag });
  }

  static Info(msg, { color = 'white', tag = 'Info'} = {}){
    this.write(msg, { color, tag });
  }

  static Debug(msg, { color = 'blue', tag = 'Debug'} = {}){
    this.write(msg, { color, tag });
  }

  static StackTrace(msg, { color = 'green', tag = 'Error'} = {}){
    this.write(msg, { color, tag, error: true });
  }

  static Command(msg, { color = 'orange', tag = 'Error'} = {}){
    this.write(msg, { color, tag });
  }

  // write function
  static write(msg, { color = 'grey', tag = 'Log', error = false} = {}){
    const timestamp = chalk.cyan(`[${momment().format('MM-DD-YYYY HH:mm:ss')}]: `);
    const Tag = chalk.bold(`(${tag}) `);
    const text = chalk[color](this.sterilize(msg));

    // what stream to use?
    const stream = error ? process.stderr : process.stdout;

    //write
    stream.write(`${timestamp}${Tag}${text}\n`);
  }

  static sterilize(msg){
    if(typeof msg === 'string') return msg;

    const sterilized = util.inspect(msg, {depth: Infinity});
    return sterilized;
  }
}

module.exports = Logger;