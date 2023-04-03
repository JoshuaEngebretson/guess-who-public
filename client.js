$(document).ready(onReady)

// all .js files sourced properly

function onReady() {
  console.log('Here are all the available people:', people);

  showPeople();

}

function showPeople() {
  console.log('in showPeople');

  for (const person of people) {
    $('#GitHub-Images').append(`
      <div>
      <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris">
      </div>
    `)
  }
}