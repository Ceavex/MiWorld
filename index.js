const { AttachmentBuilder, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates] });
const { createCanvas, Image } = require('@napi-rs/canvas');
const { readFile } = require('fs/promises');
const { request } = require('undici');

//canvas.toBuffer


client.on('ready', () =>  {
	setInterval(async function(){
		const Server = client.guilds.cache.find(s => s.id === '1007680838340726796')
		const Voiceonline = Server.voiceStates.cache.size
		const canvas = createCanvas(960, 560);
		const context = canvas.getContext('2d');

		const background = await readFile('./wallpaper.jpg');
		const backgroundImage = new Image();
		backgroundImage.src = background;
		context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

		context.font = 'bold 120px fantasy';
		context.fillStyle = '#ffffff';
		context.fillText(`${Server.memberCount}`, canvas.width / 3.15, canvas.height / 1.14);

        context.font = 'bold 60px fantasy';
		context.fillStyle = '#ffffff';
		context.fillText(`${Voiceonline}`, canvas.width / 1.32, canvas.height / 1.55 );


		// const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: 'profile-image.png' });

		// message.reply({ files: [attachment] });s
		Server.setBanner(canvas.toBuffer('image/png'))
	console.log('Updated!');
	client.off
   }, 3*60*1000)
		
})

const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');
	let fontSize = 70;

	do {
		context.font = `${fontSize -= 10}px sans-serif`;
	} while (context.measureText(text).width > canvas.width - 300);

	return context.font;
};







client.login('nope')
