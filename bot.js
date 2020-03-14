const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const fs = require('fs');


// TODO: add your command to this list when you create a new command
/*
This is the list of commands for !help
*/
var commands = [
  "!help",
  "!dino",
  "!yam",
  "!apd",
  "!rage",
  "!cruggz",
  "!anticruggz",
  "!pipie"
]


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

var pipiesFolder = './pipies';
var pipies = [];
fs.readdir(pipiesFolder, (err,files) => {
  if (err) {
    console.log("error bad :(");
  }
  var i;
  for (i=0; i<files.length; i++) {
    if (files[i] != ".DS_Store") {
      pipies.push(`${pipiesFolder}/${files[i]}`);
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
  "This is so sad: Alexa... don't leave me hanging",
  "This is so sad: Alexa... launch the missiles",
  "This is so sad: Alexa... look me in the eyes and say you never loved me",
  "This is so sad: Alexa... play serotonin"
]

/*
This section defines the Cruggz and Anti-cruggz folder and gets all of the images from it for !cruggz and !anti-cruggz.
*/
var cruggzFolder = './Cruggz';
var cruggz = [];
fs.readdir(cruggzFolder, (err,files) => {
  if (err) {
    console.log("error bad ):");
  }
  var i;
  for (i=0; i<files.length; i++) {
    if (files[i] != ".DS_Store") {
      cruggz.push(`${cruggzFolder}/${files[i]}`);
    }
  };
});
var antiCruggzFolder = './AntiCruggz';
var antiCruggz = [];
fs.readdir(antiCruggzFolder, (err,files) => {
  if (err) {
    console.log("error bad ):");
  }
  var i;
  for (i=0; i<files.length; i++) {
    if (files[i] != ".DS_Store") {
      antiCruggz.push(`${antiCruggzFolder}/${files[i]}`);
    }
  };
});

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`);
});

client.login(auth.token);

client.on('message', msg => {

  if(msg.content === '!help'){
    var message = commands[0];
    for(var i=1; i<commands.length; i++){
      message += "\n"+commands[i];
    }
    msg.channel.send(message);
  }

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
    msg.channel.send(alexaCalls[Math.floor(Math.random() * alexaCalls.length)]);
  }
  
  if (msg.content === '!rage') {
		// This command send a message with a randomized keyboard smash.
		
		// Contains all the letters on the middle row of the QWERTY keyboard.
		var keyboard = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
		var keyboardSmash = "";

    // 33% of the time it is upper case, 33% of the time it is lower case, 33% of the time it is a random combination of upper and lower case.
    var lowerUpper = Math.floor(Math.random() * 3);
		
		// Randomizes the length of the string from 5-25.
		var lenSmash = (Math.floor(Math.random() * 20) + 5);
		var i;
		for (i = 0; i < lenSmash; i++) {
			// Adds the new randomized letter to the end of the keyboardSmash string.
      if(lowerUpper == 1 && Math.floor(Math.random()*2)==0){
        keyboardSmash = keyboardSmash + keyboard[Math.floor(Math.random() * keyboard.length)].toUpperCase();
      } else {
        keyboardSmash = keyboardSmash + keyboard[Math.floor(Math.random() * keyboard.length)];
      }
		}
		
		if (lowerUpper == 0) {
			keyboardSmash = keyboardSmash.toUpperCase();
		}
		
		// Sends the message.
		msg.channel.send(keyboardSmash);
	}
  
  if (msg.content === '!cruggz') {
    // This command welcomes you to the cruggz gang with a picture of awesome cruggz!
    
    msg.channel.send('Welcome to the cruggz gang! ', {
            files: [{
                attachment: cruggz[Math.floor(Math.random() * cruggz.length)]
            }]
        });
  }
  
  if (msg.content === '!anti-cruggz' || msg.content === '!anti cruggz' || msg.content === '!anticruggz') {
    // This command welcomes you to the anti-cruggz gang with a banned picture of cruggz...
    
    msg.channel.send('Welcome to the anti-cruggz gang! ', {
            files: [{
                attachment: antiCruggz[Math.floor(Math.random() * antiCruggz.length)]
            }]
        });
  }

  if (msg.content === '!pipie') {
    msg.channel.send('Yum!', {
            files: [{
                attachment: pipies[Math.floor(Math.random() * pipies.length)]
            }]
        });
  }
  
});
