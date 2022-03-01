const ytdl = require("discord-ytdl-core");
const fs = require('fs');
const playlist = require("./playlist.js");

const playVid = require("./playVid.js");

module.exports = async function (bot, msg, args) {
    if (!playlist.isEmpty) {
        var nextLink = playlist.next;
        playVid(nextLink, msg);
    } else {
        msg.channel.send("No more videos queued!");
    }
}