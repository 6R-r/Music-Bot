module.exports = async function (client) {
    console.log(`Logged in ${client.user.username}.`);
    client.user.setStatus('idle');
    client.user.setActivity(`Musicbot by 8a2ed.`);
}