console.log("Bot Works!");

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', () => {
    console.log("Logged in as ", client.user.tag);

});

const commandHandler = require("./commands");
const publicSender = require("./send.js");

client.on('message', cmdHandle);

client.on('message', pubSender);

function pubSender(msg) {
    publicSender(client, msg);
}

function cmdHandle(msg) {
    commandHandler(client, msg);
}