require("dotenv").config();

const help = require("./commands/cock.js");
const bonk = require("./commands/bonk.js");
const play = require("./commands/play.js");
const add = require("./commands/add.js");
const skip = require("./commands/skip.js");

const commands = {help, bonk, play, add, skip };

module.exports = async function (bot, msg) {
    if (true) { //Change to channel ID
        let tokens = msg.content.split(" ");
        let command = tokens.shift();
        if (command.charAt(0) === process.env.COMMANDPREFIX) {
            command = command.substring(1);
            try {
                commands[command](bot, msg, tokens);
            } catch (error) {
                msg.channel.send("Invalid Command");
                console.log("Invalid Command");
            }
            console.log(command, "command run!");
        }
    }
}