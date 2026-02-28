
function animateSkills() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50 && !bar.classList.contains('animated')) {
        const value = bar.getAttribute('data-progress');
        const color = bar.getAttribute('data-color');
        bar.style.backgroundColor = color;
        bar.style.width = value + '%';
        bar.classList.add('animated');
      }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

function toggleDescription(card) {
    // close other open cards
    document.querySelectorAll('.edu-card').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    // toggle clicked one
    card.classList.toggle('active');
  }
