const { MessageAttachment } = require("discord.js");

module.exports = async function (bot, msg, args) {
    const attachment = new MessageAttachment('https://dogemuchwow.com/wp-content/uploads/2020/12/bonk-it.jpg');
    msg.channel.send(attachment);
}