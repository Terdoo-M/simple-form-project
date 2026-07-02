const form = document.getElementById('profileForm');
const output = document.getElementById('output');
const outputName = document.getElementById('outputName');
const outputBio = document.getElementById('outputBio');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const bio = document.getElementById('bio').value.trim();

  // Populate the output div with submitted values
  outputName.textContent = name;
  outputBio.textContent = bio;

  // Show the hidden output div
  output.classList.remove('hidden');

  // Scroll smoothly to the output
  output.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
