document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  alert('Thanks for subscribing, ' + email + '!');
});