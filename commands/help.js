const Discord = require('discord.js');

module.exports = async function (bot, msg, args) {
    const helpEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Help Menu!')
        .setAuthor("Bubble's Bot", 'https://i.ibb.co/qFYCW2p/bonk.png')
        .setDescription('veryhelpful ;)')
        .setThumbnail('https://i.ibb.co/qFYCW2p/bonk.png')
        .addFields(
            { name: '!help', value: 'Shows this hot menu!' },
            { name: '!bonk', value: 'Shows you the bonky!'},
        )
        .setImage('https://dogemuchwow.com/wp-content/uploads/2020/12/bonk-it.jpg')
        .setTimestamp();
    msg.channel.send(helpEmbed);
}