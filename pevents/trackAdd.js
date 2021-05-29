module.exports = (client, message, queue, track) => {
    try {
        message.channel.send(`**${track.title}**, Added track to queue.`);
    } catch (err) {
        message.channel.send(`Error: ` + "```" + err + "```")
    }
};