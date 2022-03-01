const ytdl = require("discord-ytdl-core");
const fs = require('fs');
var ytsearch = require('youtube-search-api');

const playlist = require("./playlist.js");

const playVid = require("./playVid.js");

module.exports = async function (bot, msg, args) {
    if (args[0]!='') {
        if (msg.member.voice.channel) {
            var keywords = args.join(' ');
            msg.channel.send("Searching for " + "'" + keywords + "'");
            var id = "";
            ytsearch.GetListByKeyword(keywords,false)
                .then(result => playVid("https://www.youtube.com/watch?v=" + result.items[0].id, msg));

        } else {
            msg.reply("You need to be in a voice channel to do that!");
        }
    } else {
        msg.reply("Specify a link to a song!");
    }
}