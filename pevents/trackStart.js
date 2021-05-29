module.exports = (client,message,track) => {
	try {
    	message.channel.send(`Now playing **${track.title}**`);
    } catch(err) {
            message.channel.send(`Error: ` + "```" + err + "```")
        }
}