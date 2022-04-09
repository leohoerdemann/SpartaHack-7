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

var timer = setTimeout(start, 2000);

// Storage of our chat components
var movement_dict = {
  "!forward": 0,
  "!left": 0,
  "!right": 0,
  "!back": 0
  }  

  //CarMovement();
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

// Function called when the "dice" command is issued
function rollDice () 
{
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) 
{
  console.log(`* Connected to ${addr}:${port}`);
}

// Moves the car depending on our data
function CarMovement ()
{
  var max_element = 0;
  var max_value;
  for (let [key, value] of Object.entries(movement_dict)) 
  {
    if (value > max_element)
    {
      max_element = value;
      max_value = key;
    }
    console.log(`${key}: ${value}`);
  }

  if (max_element > 0)
  {
    switch(max_value)
    {
      case "!forward":
        moveForward();
        break;
      case "!left":
        turnLeft();
        break;
      case "!right":
        turnRight();
        break;
      case "!back":
        moveBack();
        break;
      default:
        break;
    }
    // Refreshes data set after a movement has been made
    for (let [key, value] of Object.entries(movement_dict)) 
    {
      movement_dict[key] = 0;
    }
  }
  // Clears timer then starts timer again
  clearInterval(timer);
  timer = setTimeout(start, 2000);
}

// Starts the car movement
function start()
{
  CarMovement();
}

// Moves the car forward
function moveForward ()
{
  
}

// Turnes the car left
function turnLeft ()
{

}

// Turns the car right
function turnRight ()
{

}

// Moves the car backwards
function moveBack()
{

}