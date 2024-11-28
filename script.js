// I selected the necessary elements
const container = document.querySelector('.container');
const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');

// And then I added event listeners for buttons
signUpBtn.addEventListener('click', () => {
  container.classList.add('sign-up-active'); // Added an active class to trigger animation
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('sign-up-active'); // Then removed active class to return to sign-in
});
