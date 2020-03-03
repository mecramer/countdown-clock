// Get DOM elements
const year =  document.querySelector('#year');
const days =  document.querySelector('#days');
const hours =  document.querySelector('#hours');
const minutes =  document.querySelector('#minutes');
const seconds =  document.querySelector('#seconds');
const countdown =  document.querySelector('#countdown');
const loading = document.querySelector('#loading');

// Get current year
const currentYear = new Date().getFullYear();

// Set target date to be based on a function call
const targetDate = setTargetDate();

// Set target date based on class assigned to the page
function setTargetDate() {
  if (document.querySelector('body').className === "opening-day") {
    return new Date(`March 26 ${currentYear} 13:10:00`);
  } else if(document.querySelector('body').className === "new-year") {
    return new Date(`January 01 ${currentYear + 1} 00:00:00`);
  } else if(document.querySelector('body').className === "retirement") {
    return new Date(`January 01 2025 00:00:00`);
  }
}

// Set the year
year.innerText = setTargetYear();

// Set target date based on class assigned to the page
function setTargetYear() {
  if (document.querySelector('body').className === "opening-day") {
    return currentYear;
  } else if(document.querySelector('body').className === "new-year") {
    return currentYear + 1;
  } else if(document.querySelector('body').className === "retirement") {
    return 2025;
  }
}

// Function to get the countdown numbers
// get current time, in milliseconds
// get the number of milliseconds till new years (target time - current time)
// turn that time remaining, which is in miliseconds to days, hours, minutes and seconds
function updateCountdown() {
  const currentTime = new Date();
  const diff = targetDate - currentTime;

  // console.log(diff);

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
  const m = Math.floor(diff / 1000 / 60 ) % 60;
  const s = Math.floor(diff / 1000) % 60;
  // console.log(d);
  // console.log(h);
  // console.log(m);
  // console.log(s);

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? `0${h}` : h;
  minutes.innerHTML = m < 10 ? `0${m}` : m;
  seconds.innerHTML = s < 10 ? `0${s}` : s;
}

// Show spinner before countdown
// removes the loading DOM element after 1 second
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// callback function to update the countdown every second
setInterval(updateCountdown, 1000);

