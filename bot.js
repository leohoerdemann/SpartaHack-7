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

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (commandName == "!forward") 
  {

  }

  if (commandName == "!left")
  {

  }

  if (commandName == "!right")
  {

  }

  if (commandName == "!back")
  {
    
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