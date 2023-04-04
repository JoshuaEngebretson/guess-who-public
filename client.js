$(document).ready(onReady)

const GuessWhoMax = (people.length-1)
let GuessWhoAnswer;
let guessCount = 1;

// all .js files sourced properly
function onReady() {
  console.log('Here are all the available people:', people);

  renderProfilePicture();
  GenerateAnswer()

  $('#GitHub-Images').on('click', '.Profile-Picture', userGuess)

}


// Function renders the GitHub profile picture for each person
//  in the "people" array and assigns an id of that person's name
function renderProfilePicture() {
  
  for (const person of people) {
    $('#GitHub-Images').append(`
      <div class="Profile-Picture" id="${person.name}">
        <img src="https://github.com/${person.githubUsername}.png?size=300"
        alt="Profile image of ${person.name}">
      </div>
    `)
    $('#person.name').data(`${person.name}`);
  }

}


function GenerateAnswer() {

  let randomPersonName = (people[randomNumber(0, GuessWhoMax)]).name;

  $('#Guess-ME').empty();

  $('#Guess-ME').append(`
    <p>
      Click on the image for ---> ${randomPersonName}
    </p>
  `);

  GuessWhoAnswer = randomPersonName;
  guessCount = 1;

}


function userGuess() {

  let guess = $(this).attr('id')
  
  if (guess === GuessWhoAnswer) {
    window.alert(`You found ${GuessWhoAnswer}! Let's play again!`)
    
    // If correct Generate Answer
    GenerateAnswer();
  }
  else {
    if (guessCount === 1) {
      window.alert(`That is not ${GuessWhoAnswer}, try again`)
    }
    else if (guessCount === 2) {
      window.alert(`That is also not ${GuessWhoAnswer}, try again`)
    }
    else if (guessCount > 4) {
      window.alert(`Odds aren't in your favor are they... 
        \nYou're on guess ${guessCount}, and still haven't found ${GuessWhoAnswer}?Keep trying!
      `)
    }
    else {
      window.alert(`Maybe you should try guessing someone else...`)
    }
    guessCount++
  }



}


function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
