/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString){
  let parsedTime = parseInt(timeString)

  if (parsedTime < 12){
    return "Good Morning"
  }
  else if (parsedTime >= 12 && parsedTime < 17){
    return "Good Afternoon"
  }

  else if (parsedTime > 17 && parsedTime < 25){
    return "Good Evening"
  }
  else{
    return "Error. Please put time in milatry format"
  }
}

function displayMessage(updatedGreeting){
  let greeting = document.getElementById(`greeting`)
  greeting.innerText = updatedGreeting
}