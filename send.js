let triggers = {
    // freak: "https://www.youtube.com/watch?v=QYHxGBH6o4M",
    // work: "https://www.youtube.com/watch?v=tuUEpbGVV2Y",
    // bored: "https://www.youtube.com/watch?v=wIgmyE5Juzw",
    // sabotage: "https://www.youtube.com/watch?v=y94EovoyQw4",
    // scream: "https://www.youtube.com/watch?v=kYtGl1dX5qI",
    // shout: "https://www.youtube.com/watch?v=kYtGl1dX5qI",
    // rich: "https://www.youtube.com/watch?v=oIAkRVBS-0U",
    // spin: "https://www.youtube.com/watch?v=PGNiXGX2nLU",
    // around: "https://www.youtube.com/watch?v=dwDns8x3Jb4",
    // look: "https://www.youtube.com/watch?v=LFsUHeGB_6M",
    // star: "https://www.youtube.com/watch?v=tRcPA7Fzebw",
    // stand: "https://www.youtube.com/watch?v=hwZNL7QVJjE",
    // beach: "https://www.youtube.com/watch?v=nCEuT91UAcg",
    // hint: "https://www.youtube.com/watch?v=ZsfIw7ZkEyc",
    // scrub: "https://www.youtube.com/watch?v=FrLequ6dUdM",
    // give: "https://www.youtube.com/watch?v=XEjLoHdbVeE",
    // peace: "https://www.youtube.com/watch?v=edwk-8KJ1Js",
    // kiss: "https://www.youtube.com/watch?v=B4KN6TFhy2I",
    // picture: "https://www.youtube.com/watch?v=keD0IJP4Dtw",
    // love: "https://www.youtube.com/watch?v=q84psZX6MbA",
    // call: "https://www.youtube.com/watch?v=o3hHsVtqNFQ",
    // rain: "https://www.youtube.com/watch?v=pt57gA1_W7c",
    // oop: "https://www.youtube.com/watch?v=ykU5UIG2fmo",
    // jesus: "https://www.youtube.com/watch?v=LLr0lOF685M",
    // breakfast: "https://www.youtube.com/watch?v=PZahtmWhH5g",
    // hold: "https://www.youtube.com/watch?v=CZ9nPidefaQ",
    // lonely: "https://www.youtube.com/watch?v=kjq4wYuwgxs",
    // need: "https://www.youtube.com/watch?v=LsRkq5qtm7U",
    // chip: "https://www.youtube.com/watch?v=dI8XTOZCVy4&t=1s",
    // time: "https://www.youtube.com/watch?v=VdQY7BusJNU",
    // ice: "https://www.youtube.com/watch?v=rog8ou-ZepE",
    // fine: "https://www.youtube.com/watch?v=abBabSWyNOI",
    // heli: "https://www.youtube.com/watch?v=yfzNOyUZGHk",
    // board: "https://www.youtube.com/watch?v=yfzNOyUZGHk",
    // attempt: "https://www.youtube.com/watch?v=yfzNOyUZGHk",
    // gym: "https://www.youtube.com/watch?v=_hfhts8E7Ms",
    // abs: "https://www.youtube.com/watch?v=_hfhts8E7Ms",
    // tricky: "https://www.youtube.com/watch?v=PzHtekPRArk",
    // more: "https://www.youtube.com/watch?v=jQpZBhHvzbg"
};

const announcements = ["Did someone say", 
                    "Wowza u just said", 
                    "Holy bowlass that looks like u said",
                    "Omg!!! THATS THE WORD!!! U SAID",
                    "Heyyyyyy my man!!! u just mentioned",
                    "My time has come!!! U summoned me by saying",
                    "Damn homie I love the word",
                    "WTF this dumbass just said"
                    ];

const play = require("./commands/play.js");

module.exports = async function (bot, msg) {
    if (msg.content.length !== 0) {
        for (var keyword in triggers) {
            if (msg.content.includes(keyword) && !msg.author.bot) {
                let args = []
                args[0] = triggers[keyword];
                let index = Math.floor(Math.random() * announcements.length);
                msg.channel.send(announcements[index] + " " + keyword);
                play(bot, msg, args);
            }
        }
        if (msg.channel.name !== "bootybot" || msg.author.bot == true) {
            return;
        }
        var serverName = msg.guild.name
        serverName = serverName.substring(0,20);
        var finalMsg = serverName + " - " + msg.author.tag + ": " + msg.content;
        console.log(finalMsg);
        msg.delete();
        msg.channel.send(msg.author.tag + ": " + msg.content);
        bot.guilds.cache.forEach(guild => {
            if (guild.available && guild.id !== msg.guild.id) {
                console.log(guild.name.substring(0,20));
                guild.channels.cache.forEach(channel => {
                    if (channel.name === "bootybot") {
                        channel.send(finalMsg);
                        console.log("SENT!");
                    }
                });
            }
        });
    }
}