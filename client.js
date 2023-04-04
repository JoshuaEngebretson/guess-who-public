$(document).ready(onReady)

const GuessWhoMax = (people.length-1)
let GuessWhoAnswer;
let guessCount;

// all .js files sourced properly
function onReady() {
  console.log('Here are all the available people:', people);

  renderProfilePicture();
  GenerateAnswer()

  $('#GitHub-Images').on('click', '.Profile-Picture', userGuess)

}// End onReady


// Function renders the GitHub profile picture for each person
//  in the "people" array and assigns an id of that person's name
function renderProfilePicture() {

  //Empty out ID of GitHub-Images
  $('#GitHub-Images').empty();

  // Randomly sort the people array
  people.sort(() => Math.random() - 0.5);
  
  // Go through each person of the people array and place
  //  their image onto the DOM
  for (const person of people) {
    $('#GitHub-Images').append(`
      <div class="Profile-Picture" id="${person.name}">
        <img src="https://github.com/${person.githubUsername}.png?size=200"
        alt="Profile image of ${person.name}">
      </div>
    `)
    $('#person.name').data(`${person.name}`);
  }

}// End renderProfilePicture


// Function to randomly generate the answer for guess who
//  Also resets guess counter to 1
function GenerateAnswer() {

  // Randomly select a value for variable of randomPersonName
  let randomPersonName = (people[randomNumber(0, GuessWhoMax)]).name;

  // Empty out id of #Guess-Me
  $('#Guess-ME').empty();

  // Add instructions to find the random person
  $('#Guess-ME').append(`
    <p>
      Click on the image for ---> ${randomPersonName}
    </p>
  `);

  // Set the correct answer (GuessWhoAnswer) to the
  //  randomPersonName
  GuessWhoAnswer = randomPersonName;

  // Reset guessCount to 1
  guessCount = 1;

}// End GenerateAnswer


// Function to check if the user's guess is correct or not
//  If correct, will alert them and change the background
//  color to green.
//  Then will reset the game with a new GuessWhoAnswer.
function userGuess() {

  let guess = $(this).attr('id');
  let parent = $(this).parent();
  
  // If the user's guess is correct, give visual queue
  //  and reset game
  if (guess === GuessWhoAnswer) {
    parent.addClass('Green-Background')
    setTimeout(function(){
      parent.removeClass('Green-Background')}, 500);
    setTimeout(function(){
      window.alert(`You found ${GuessWhoAnswer}! Let's play again!`);
      // If correct Generate Answer
      GenerateAnswer();
      renderProfilePicture()
    }, 50)
  }
  else { // Inform user that their guess is incorrect
    if (guessCount === 1) {
      window.alert(`That is not ${GuessWhoAnswer}, try again`)
    }
    else if (guessCount === 2) {
      window.alert(`That is also not ${GuessWhoAnswer}, try again`)
    }
    else if (guessCount > 5) {
      window.alert(`Odds aren't in your favor are they... 
        \nYou're on guess ${guessCount}, and still haven't found ${GuessWhoAnswer}?Keep trying!
      `)
    }
    else {
      window.alert(`Maybe you should try guessing someone else...`)
    }
    // Increase the guessCount by 1
    guessCount++

    // Shuffle the images on the DOM
    renderProfilePicture()
  }

}// End userGuess


// Function to create a random number
//  INPUT:  1, 20
//  OutPut: A random number between 1 and 20
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}// End randomNumber
