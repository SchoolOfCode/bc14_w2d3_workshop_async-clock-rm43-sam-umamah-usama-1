const hand = document.querySelector(".hand");
let seconds = 0;
//Bonus
const now = new Date();
const secondsNew = now.getSeconds;

// hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!

// Set Interval to make the hand move every second

setInterval(handMove, 1000); 


// Hand move function

function handMove()
{ 
    console.log(secondsNew);
    seconds += 6;
    // rotate the hand by 6 degrees every second
    hand.style.transform = `rotate(${seconds}deg)`;
}

// Every 60 seconds, the hand should complete a full revolution

// Use the JS Date object to get the real seconds.
    fun

// Add a minute hand.

// Add an hour hand.









/** 
# What makes you tick? 🕑

In this challenge, you will be using your newfound knowledge of asynchronous code to control time and make the hand of this clock tick. Break down the problem, make a plan, and then translate it into code.

## Requirements

- You should use setInterval. ✅
- The hand should move around the clock every second and should complete a full revolution in 60 seconds. ✅
- You should adjust the rotation of the hand using the transform property as demonstrated in `main.js`. ✅

## Bonus after your clock is ticking

- Use the JS Date object to get the real seconds.
- Add a minute hand.
- Add an hour hand.

*/