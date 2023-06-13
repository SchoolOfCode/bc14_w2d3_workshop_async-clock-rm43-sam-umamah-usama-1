const hand = document.querySelector(".hand");

//hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!


function tick() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(tick, 1000);
