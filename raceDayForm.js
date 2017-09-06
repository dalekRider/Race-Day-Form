// Race Day
// You have been hired to write a program that will register runners for a race and give them instructions on race day. All adults will race in the morning and all people under 18 will race in the afternoon. Follow the instructions below to develop the logic for the program!

//Assign random race number
let raceNumber = Math.floor(Math.random()*1000);
//Did the entrant register before race day
let isRegisteredEarly = true;
//define racer's age for race time determination
let runnersAge = 42;

//if registered ahead provide number between 0-1000, if not provide number between 1001-2000
isRegisteredEarly ? (raceNumber) : (raceNumber += 1000);
// runners over 18 and did register early
if (runnersAge > 18 && isRegisteredEarly === true) {
  console.log('Your race starts at 9:30 AM. Your race number is ' + raceNumber + '.');
// runners over 18 or did register early
} else if (runnersAge > 18 || isRegisteredEarly === true) {
  console.log('Your race starts at 11:00 AM. Your race number is ' + raceNumber + '.');
// runners under 18 and did NOT register early
} else if (runnersAge < 18 && !isRegisteredEarly === true) {
  console.log('Your race starts at 12:30 PM. Your race number is ' + raceNumber + '.');
// all other options
} else {
  console.log('Please report to the registration desk.')
}
