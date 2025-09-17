// === Projects Data ===
const projects = [
  {
    title: "Amazon",
    description: "This is my first project I have recreated the Amazon clone with full of fashion",
    year: "2025",
    img: "proimg/amazon.png",
    tech: ["HTML", "CSS"],
    demo: "https://codewithsalman12.github.io/my-projects/amazon/"
  },
  {
    title: "TS-Flix",
    description: "I have created TS-Flix so that everyone can get movies for free",
    year: "2025",
    img: "proimg/tsflix.png",
    tech: ["HTML", "CSS", "JavaScript", "BACKEND"],
    demo: "https://ts-flix.free.nf/"
  },
  {
    title: "Netflix",
    description: "I remade Netflix just for fun and practice",
    year: "2025",
    img: "proimg/netflix-clone.png",
    tech: ["HTML", "CSS"],
    demo: "https://codewithsalman12.github.io/my-projects/netflix%20clone/"
  },
  {
    title: "Petbottle",
    description: "Petbottle is a website just for bottle jars and glasses",
    year: "2025",
    img: "proimg/pett.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://codewithsalman12.github.io/my-projects/petbott%20completed/"
  },
  {
    title: "WalkAura",
    description: "WalkAura is a shoe website where you can get stylish shoes",
    year: "2025",
    img: "proimg/walkaura.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://codewithsalman12.github.io/my-projects/WalkAura/"
  },
  {
    title: "Renter",
    description: "It is a fully responsive website where we give cars, bikes and houses for rent",
    year: "2025",
    img: "proimg/the renters.png",
    tech: ["JavaScript", "HTML", "React"],
    demo: "https://heroic-kataifi-4fbe38.netlify.app/"
  },
  {
    title: "WorldAtlas",
    description: "It is a fully responsive website where we get information about the World",
    year: "2025",
    img: "proimg/WorldAtlas.png",
    tech: ["JavaScript", "HTML", "React"],
    demo: "https://charming-cranachan-026a6a.netlify.app/"
  },
    {
    title: "CampusConnect",
    description: "It is a fully responsive react project i have created for techwiz competition in here you;ll be aware of the collage events",
    year: "2025",
    img: "",
    tech: ["JavaScript", "HTML", "React"],
    demo: "https://charming-cranachan-026a6a.netlify.app/"
  }
  
];

// === Render Projects Dynamically ===
const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(proj => {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";

  col.innerHTML = `
    <article class="project-card p-3 h-100 d-flex flex-column">
      <img class="project-thumb" src="${proj.img}" alt="${proj.title}" loading="lazy">
      <div class="mt-3">
        <h5>${proj.title}</h5>
        <p class="small text-light">${proj.description}</p>
        <div class="mt-2">
          ${proj.tech.map(t => `<span class="badge-tech">${t}</span>`).join("")}
        </div>
      </div>
      <div class="mt-auto d-flex justify-content-between align-items-center pt-3">
        <div class="small text-light">${proj.year}</div>
        <div>
          <a class="btn btn-sm btn-outline-accent me-2" href="${proj.demo}" target="_blank">Demo</a>
        </div>
      </div>
    </article>
  `;

  projectsContainer.appendChild(col);
});

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
