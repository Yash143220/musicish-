require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', // your discord bot token
  prefix: process.env.PREFIX || 'm!', // bot prefix
  ownerID: process.env.OWNERID || ['846029199100870706'], //your discord id
  SpotifyID: process.env.SPOTIFYID || '', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '', // spotify client secret
  mongourl: process.env.MONGO_URI || 'mongodb+srv://.', // MongoDb URL
  embedColor: process.env.COlOR || '#ffff00', // embed colour
  logs: process.env.LOGS || '875603470881804318', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/6xVmYuPt35',
    invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=976068071007600680&permissions=8&scope=bot%20applications.commands',
    vote: process.env.VOTE || 'https://discord.gg/',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/877417203195076618/976078285580697630/12535741_1.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || '144.76.57.59:9317',
      name: process.env.NODE_NAME || '144.76.57.59',
      auth: process.env.NODE_AUTH || 'youshallnotpass',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
