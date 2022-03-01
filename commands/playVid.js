
const ytdl = require("discord-ytdl-core");
const playlist = require("./playlist.js");

module.exports = function playVid(link, msg) {
    msg.member.voice.channel.join()
        .then(connection => {
            console.log('joined channel');
            msg.channel.send("Playing Video! " + link);
            var stream = ytdl(link, {
                filter: "audioonly",
                fmt: "mp3"
            });
            const dispatcher = connection.play(stream);
            dispatcher.on('speaking', isSpeaking => {
                if (!isSpeaking) {
                    if (playlist.isEmpty) {
                        console.log('left channel');
                        connection.channel.leave();
                    } else {
                        var newLink = playlist.next;
                        playVid(newLink, msg);
                    }
                }
            });
            // .on('speaking', end => {
            //     console.log('left channel', bits);
            //     connection.channel.leaveVoiceChannel(msg.member.voice.channel);
            // })
        });
}