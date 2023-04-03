$(document).ready(onReady)

// all .js files sourced properly

function onReady() {
  console.log('Here are all the available people:', people);
  showPeople();

  $('#D20').on('click', d20)

}

function showPeople() {
  console.log('in showPeople');

  for (const person of people) {
    $('#GitHub-Images').append(`
      <div class="Profile-Picture">
      <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris">
      </div>
    `)
  }
}


function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

console.log(randomNumber(1, 20));

function d20() {
  let d20Roll = randomNumber(1,20)

  if (d20Roll === 20) {
    return console.log('you got a crit! ---->', d20Roll);
  }

 return console.log(d20Roll);
}