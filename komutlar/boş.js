// bunu ister sile bılırsın ıster kala bılır.

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.once("ready", () => {
  console.log(`✅ Selfbot giriş yaptı: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.id !== client.user.id) return; // Sadece kendi mesajlarını dinle

  if (message.content.toLowerCase() === "!spam") {
    let spamMessage = "Bu, tamamen gereksiz bir mesaj! 🚀";
    
    // 10 kere spam atacak
    for (let i = 0; i < 10; i++) {
      message.channel.send(spamMessage);
    }
  }
});

