const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(sec => {
        if (pageYOffset >= sec.offsetTop - 120) current = sec.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active-link');
        if (a.getAttribute('href').includes(current)) a.classList.add('active-link');
    });
});
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const m = document.getElementById('msg');
  m.style.color = "#111827";
  m.textContent = "Sending...";
  setTimeout(()=>{
    m.style.color = "green";
    m.textContent = "✅ Message Sent! Thank you Ameeka will reply soon.";
    this.reset();
  }, 1000);
});
