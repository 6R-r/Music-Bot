module.exports = (client, message, queue, playlist) => {
    try {
        message.channel.send(`**${playlist.title}**, Added playlist to queue.`);
    } catch (err) {
        message.channel.send(`Error: ` + "```" + err + "```")
    }
};