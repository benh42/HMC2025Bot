const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const fs = require('fs');


/*
This section defines the Dino folder and gets all of the images from it for !dino.
*/
var dinoFolder = './dinos';
var dinos = [];
fs.readdir(dinoFolder, (err,files) => {
  if (err) {
    console.log("error bad ):");
  }
  var i;
  for (i=0; i<files.length; i++) {
    if (files[i] != ".DS_Store") {
      dinos.push(`${dinoFolder}/${files[i]}`);
    }
  };
});

/*
This section defines the insults for !yam
*/
var insults = [
  "**YOU IDIOT, WHY WOULD YOU DO THAT!**",
  "**HEY DUMMY, WHAT DO YOU THINK YOURE DOING!**",
  "**YOU THINK YOU ARE SOOOO COOOOL... WELL YOURE NOT!**",
  "**IF I HAD ONE WISH, I'D WISH THAT YOU STEP ON LEGO!**",
  "**MAY ZUES SMITE THEE WITH LIGHTNING FOR YOUR INSOLENCE!**",
  "**YOU ARE NOTHING BUT AN ILLITERATE PIECE OF DRIFTWOOD!**"
]

/*
This section defines the calls for !apd
*/
var alexaCalls = [
  "This is so sad: Alexa... play your favorite song",
  "This is so sad: Alexa... get on in here",
  "This is so sad: Alexa... gimme a beat",
  "This is so sad: Alexa... you know what to do",
  "This is so sad: Alexa... cover me",
  "This is so sad: Alexa... take out the trash",
  "This is so sad: Alexa... entertain the guests",
  "This is so sad: Alexa... take it from here",
  "This is so sad: Alexa... finish them",
  "This is so sad: Alexa... dont leave me hanging",
  "This is so sad: Alexa... launch the missiles",
  "This is so sad: Alexa... look me in the eyes and say you never loved me",
  "This is so sad: Alexa... play serotonin"
]

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`);
});

client.login(auth.token);

client.on('message', msg => {
  if (msg.content === '!dino') {
    msg.channel.send('One dino, coming right up!', {
            files: [{
                attachment: dinos[Math.floor(Math.random() * dinos.length)]
            }]
        });
  }
  if (msg.content === '!yam') {
    msg.channel.send(insults[Math.floor(Math.random() * insults.length)]);
  }
  if (msg.content === '!apd') {
    msg.channel.send(alexaCalls[Math.floor(Math.random() * alexaCalls.length)])
  }
});
