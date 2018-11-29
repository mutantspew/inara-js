const { AkairoClient } = require('discord-akairo');
const Token = require("./token.json");
const BotConfig = require("./botconfig.json");

const Logger = require("./utils/Logger");

const client = new AkairoClient({
  ownerID: BotConfig.ownerID,
  prefix: BotConfig.prefix,
  handleEdits: true,
  commandUtil: true,
  commandUtilLifetime: 600000,
  commandDirectory: './commands/',
  inhibitorDirectory: './inhibitors/',
  listenerDirectory: './listeners',

  allowMention: true
}, {
  disableEveryone: true
});

client.on('disconnect', () => Logger.Warn('Connection Lost...'))
.on('reconnecting', () => Logger.Info('Attempting to Reconnect'))
.on('error', err => Logger.Error(err))
.on('warn', info => Logger.Warn(info));

client.login(Token.token);

process.on('unhandledRejection', err => {
  Logger.Error('An Unhandled Promise Rejection Occurred');
  Logger.StackTrace(err);
});