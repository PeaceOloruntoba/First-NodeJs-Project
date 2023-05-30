const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get the current hour of the day
const currentHour = new Date().getHours();

// Determine the greeting based on the time of day
let greeting;
if (currentHour < 12) {
  greeting = 'Good Morning';
} else if (currentHour < 18) {
  greeting = 'Good Afternoon';
} else {
  greeting = 'Good Evening';
}

// Print the greeting
console.log(greeting);

// Ask for the user's name
rl.question('Please enter your name: ', (name) => {
  // Print the welcome message with the user's name
  console.log(`You are welcome, ${name}!`);

  // Close the readline interface
  rl.close();
});
