// Hamburger menu toggle for mobile view
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });
  
  // Contact form submission handler
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    document.getElementById('contactMessage').textContent = `Thank you, ${name}! I'll get back to you soon.`;
    document.getElementById('contactForm').reset();
  });
  