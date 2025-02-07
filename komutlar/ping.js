// bunu ister sile bılırsın ıster kala bılır.

const { Client } = require("discord.js-selfbot-v13");

const clent = new Client();
client.once("ready", () => {
  console.log(`✅ Selfbot giriş yaptı: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.id !== client.user.id) return; 
  if (message.content.toLowerCase() === "!ping") {
    message.reply("🏓 Pong!").catch(console.error);
  }
});
