const { REST, Routes } =require("discord.js")

const commands1 = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

const commands2 = [
    {
      name: 'create',
      description: 'Creates a new short URL',
    },
  ];

const rest = new REST({ version: '10' }).setToken("MTEzMDE3MDkwNjM0MjM0Njg1Mg.GtxGHS.qc1RJXMelzF_b6WhH-LWu6SAHgRdo7YASuNKh0");

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1130170906342346852'), { body: commands2 });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
  })();