// Instantiate GitHub class
const github = new GitHub;

// Instantiate UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make a http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
      }else{
        // Show profile
        ui.showProfile(data.profile);
      }
    })
  }else{
    // Clear the Profile 
  }
});