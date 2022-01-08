// Imports
const DiscordJS = require("discord.js");
const { Intents } = require('discord.js')
const dotenv = require("dotenv");
dotenv.config()

// Create a new client instance
const client = new DiscordJS.Client({ 
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	] 
})
// Print to console when the bot is running
client.on('ready', () => {
	console.log('DCMS is up and running')
})

client.on('messageCreate', (message) => {
	if (message.content === 'ping') {
		message.reply({
			content: 'pong',
		})
	}
})

// Login to Discord with your client's token
// client.login(process.env.TOKEN);
client.login(process.env.TOKEN);