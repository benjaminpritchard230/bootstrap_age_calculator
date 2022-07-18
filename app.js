// Get today's date
var today = new Date();
// Make the time all zeroes because we don't need it
today.setHours(0, 0, 0, 0);

// Function for button
const handleClick = () => {
  // Get date from webpage
  let birthdayString = document.getElementById("dob").value;
  // Convert date string into date
  birthday = new Date(birthdayString);
  // Calculate time difference from birthdate to today in milliseconds
  diffTime = today - birthday;
  // Calculate time since birthdate in days, weeks, months and years
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("days").innerHTML = `You are ${diffDays} days old!`;
  const diffWeeks = Math.round(diffDays / 7);
  document.getElementById(
    "weeks"
  ).innerHTML = `You are ${diffWeeks} weeks old!`;
  const diffMonths = Math.round(diffDays / 28);
  document.getElementById(
    "months"
  ).innerHTML = `You are ${diffMonths} months old!`;
  const diffYears = Math.round(diffDays / 365);
  document.getElementById(
    "years"
  ).innerHTML = `You are ${diffYears} years old!`;
};

// Create button
const buttons = ["Calculate date"];

for (let index = 0; index < buttons.length; index++) {
  const button = document.createElement("button");
  button.innerHTML = buttons[0];
  button.classList.add("btn", "btn-primary");
  button.addEventListener("click", handleClick);
  document.getElementById("button").append(button);
}