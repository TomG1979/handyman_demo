// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // (Optional) Add form validation or AJAX submission here.
    // For this example, we'll simply show an alert.
    alert('Thank you for contacting us! We will get back to you soon.');

    // Reset the form after submission.
    contactForm.reset();
  });
});
