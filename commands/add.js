
var ytsearch = require('youtube-search-api');
const playlist = require("./playlist.js");

module.exports = async function (bot, msg, args) {
    var keywords = args.join(' ');
    msg.channel.send("Searching for " + "'" + keywords + "'");
    var id = "";
    ytsearch.GetListByKeyword(keywords,false)
        .then(result => {
            playlist.add("https://www.youtube.com/watch?v=" + result.items[0].id);
            msg.channel.send("Added Video! " + "https://www.youtube.com/watch?v=" + result.items[0].id + "\n Queue Size: " + playlist.length);
        });
}