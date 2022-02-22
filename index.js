document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        const target = targetSection.getBoundingClientRect().top + window.scrollY - 80;
  
        window.scrollTo({
            top: target, behavior: 'smooth'
        });
    });
  });