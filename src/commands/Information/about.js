const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'about',
  category: 'Information',
  aliases: ['botinfo'],
  description: 'See description about this project',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: true,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Invite').setStyle('LINK').setURL(client.config.links.invite),
      new MessageButton()
        .setLabel('Our Other Bots')
        .setStyle('LINK')
        .setURL('https://discord.gg/6xVmYuPt35'),
      new MessageButton().setLabel('Support').setStyle('LINK').setURL(client.config.links.support),
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: 'Musicish',
        iconURL:
          'https://media.discordapp.net/attachments/877417203195076618/976078285794594826/12535741.jpg',
      })
      .setThumbnail(
        'https://media.discordapp.net/attachments/877417203195076618/976078285794594826/12535741.jpg',
      )
      .setColor('#ffff00')
      .addField(
        'Creator',
        '[Ƥм ꨄ RIDΣR#2238](https://discord.gg/6xVmYuPt35)',
        true,
      )
     // .addField('Organization', '[Blacky](https://github.com/brblacky)', true)
      //.addField('Repository', '[Here](https://github.com/brblacky/Musicish)', true)
      .addField(
        '\u200b',
        `[Musicish](https://discord.com/api/oauth2/authorize?client_id=976068071007600680&permissions=8&scope=bot%20applications.commands) is  created by <@846029199100870706>. Hope you enjoy using Musicish!`,
      );
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};