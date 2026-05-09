document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Example: Show alert on form submission
  alert('Thank you! Your message has been sent.');

  // Optionally, clear the form
  this.reset();
});
