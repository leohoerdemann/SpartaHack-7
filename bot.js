const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'SpartaBot2.0',
    password: 'vfas28hnolzd8lils03jsfn73qn0q7'
  },
  channels: [
    'trip_the_human'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Storage of our chat components
var movement_dict = {
  "!forward": 0,
  "!left": 0,
  "!right": 0,
  "!back": 0
  }  

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  switch(commandName) 
  {
    case "!dice": 
      const num = rollDice();
      client.say(target, `You rolled a ${num}`);
      console.log(`* Executed ${commandName} command`);
      break;
    case "!forward":
      movement_dict[commandName] += 1
      console.log(`* Executed ${commandName} command`);
      break;
    case "!left":
      movement_dict[commandName] += 1
      console.log(`* Executed ${commandName} command`);
      break;
    case "!right":
      movement_dict[commandName] += 1
      console.log(`* Executed ${commandName} command`);
      break;
    case "!back":
      movement_dict[commandName] += 1
      console.log(`* Executed ${commandName} command`);
      break;
    default:
      console.log(`* Unknown command ${commandName}`);
      break;
  }
}

  

function moveForward ()
{
  // Will move our vehicle forward
}

function turnLeft ()
{
  // Will move our vehicle left
}

function turnRight ()
{
  // Will move our vehicle right
}

function moveBack()
{
  // Will move our vehicle backwards
}

// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}