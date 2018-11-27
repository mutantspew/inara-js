const { AkairoClient } = require('discord-akairo');
const Token = require("./token.json");
const BotConfig = require("./botconfig.json");

const client = new AkairoClient({
  ownerID: BotConfig.ownerID,
  prefix: BotConfig.prefix,
  commandDirectory: './commands/',
  inhibitorDirectory: './inhibitors/',
  listenerDirectory: './listeners',

  allowMention: true
}, {
  disableEveryone: true
});

client.login(Token.token);