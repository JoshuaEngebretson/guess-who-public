$(document).ready(onReady)

const GuessWhoMax = (people.length-1)
let GuessWhoAnswer;

// all .js files sourced properly
function onReady() {
  console.log('Here are all the available people:', people);

  renderProfilePicture();
  GenerateAnswer()

  $('#GitHub-Images').on('click', '.Profile-Picture', userGuess)

}

// Function renders the GitHub profile picture for each person
//  in the "people" array and assigns that div a data point of
//  Picture-x where x is the placement within the array.
function renderProfilePicture() {

  let x = 1
  
  for (const person of people) {
    $('#GitHub-Images').data(`${person.name}`);
    $('#GitHub-Images').append(`
      <div class="Profile-Picture" id="${person.name}">
        <img src="https://github.com/${person.githubUsername}.png?size=250"
        alt="Profile image of ${person.name}">
      </div>
    `)
    x++
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

  GuessWhoAnswer = randomPersonName

}


function userGuess() {

  window.alert('is this working?');
  // $(this).alert('is this working?');

  // If correct Generate Answer
  GenerateAnswer();

}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

