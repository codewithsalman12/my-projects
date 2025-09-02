
    new Typed('#typed', {
      strings: ['Full-stack Developer.', 'JavaScript Specialist.',],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1700,
      loop: true
    });

    // Particles Init (simple) - optional
    if(window.particlesJS){
      particlesJS('particles-js', {
        particles: {
          number: { value: 40 },
          color: { value: '#06b6d4' },
          shape: { type: 'circle' },
          opacity: { value: 0.08 },
          size: { value: 3 },
          line_linked: { enable: true, distance: 120, color: '#06b6d4', opacity: 0.06 },
          move: { speed: 1 }
        }
      });
    }

    // GSAP entrance animations
    gsap.from('.hero-card', { y: 20, autoAlpha: 0, duration: .8, ease: 'power3.out' });
    gsap.from('#projects .project-card', { y: 18, autoAlpha: 0, duration: .7, stagger: .12, ease: 'power2.out', delay: .2 });

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple contact form validation (Bootstrap style)
    (function(){
      const form = document.getElementById('contactForm');
      form.addEventListener('submit', function(e){
        e.preventDefault();
        if(!form.checkValidity()){
          form.classList.add('was-validated');
          return;
        }
        // Here you would send the form to your backend/email service
        alert('Thanks! Your message was submitted (demo).');
        form.reset(); form.classList.remove('was-validated');
      });
    })();

    // Smooth highlight for nav links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if(pageYOffset >= top) current = sec.getAttribute('id');
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    });