/**
 * GRAND ARCHITECTURE — EDITORIAL PORTFOLIO CONTROLLER
 * Architecture · Construction · Interiors
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initDisciplineSwitcher();
  initProjectsModal();
  initTestimonialSlider();
  initConsultationDialog();
  initSmoothScroll();
});

/* ==========================================================================
   Navigation Scroll Dynamics
   ========================================================================== */
function initNavbar() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   Fullscreen Mobile Drawer
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('nav-drawer');
  if (!toggleBtn || !drawer) return;

  const toggle = () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      drawer.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('is-open');
      toggleBtn.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  };

  toggleBtn.addEventListener('click', toggle);

  drawer.querySelectorAll('.drawer-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   Interactive Disciplines Image Switcher
   "ONE HOME. ONE VISION."
   01 Architecture -> project7.jpeg
   02 Construction -> project5.jpeg
   03 Interiors -> living-01.jpg
   ========================================================================== */
function initDisciplineSwitcher() {
  const items = document.querySelectorAll('.discipline-interactive-item');
  const images = document.querySelectorAll('.discipline-display-img');

  if (!items.length || !images.length) return;

  items.forEach((item, index) => {
    const activate = () => {
      items.forEach(it => it.classList.remove('is-active'));
      images.forEach(img => img.classList.remove('is-active'));

      item.classList.add('is-active');
      if (images[index]) {
        images[index].classList.add('is-active');
      }
    };

    item.addEventListener('mouseenter', activate);
    item.addEventListener('click', activate);
  });
}

/* ==========================================================================
   Project Portfolio Data & Full-Screen Case Study Experience
   ========================================================================== */
const RESIDENCES_DATA = [
  {
    id: 'res-1',
    num: '01',
    title: 'CONTEMPORARY RESIDENCE',
    location: 'Thrissur, Kerala',
    disciplines: 'Architecture · Construction · Interiors',
    year: '2023',
    scope: 'Turnkey Design & Build',
    area: '4,650 Sq. Ft.',
    heroImg: 'images/projects/project7.jpeg',
    narrative: 'A grand multi-level residence conceived for tropical modern living. The architecture balances deep cantilevered eaves, monolithic dark stone cladding, and floor-to-ceiling glazing to invite cross-ventilation while shielding interiors from intense coastal monsoon downpours.',
    gallery: [
      { src: 'images/projects/project7.jpeg', caption: 'Front Elevation & Cantilevered Volumes' },
      { src: 'images/slider-main/living-01.jpg', caption: 'Double-Height Living & Wood Panelling' },
      { src: 'images/slider-main/kitchen-01.jpg', caption: 'Custom Minimalist Kitchen Suite' },
      { src: 'images/slider-main/master-bedroom-01.jpg', caption: 'Master Bedroom Suite' }
    ]
  },
  {
    id: 'res-2',
    num: '02',
    title: 'TROPICAL RESIDENCE',
    location: 'Moonupeedika, Thrissur',
    disciplines: 'Architecture · Construction',
    year: '2022',
    scope: 'Architecture & Civil Execution',
    area: '3,200 Sq. Ft.',
    heroImg: 'images/projects/project3.jpeg',
    narrative: 'Reinterpreting the traditional Kerala pitched roof for contemporary living. Deep eaves protect expansive openings from weather, while warm cedar wood detailing and dark textured granite anchor the residence to its coastal vegetation.',
    gallery: [
      { src: 'images/projects/project3.jpeg', caption: 'Tropical Modern Facade & Verandah' },
      { src: 'images/projects/project4.jpeg', caption: 'Geometric Side Perspective' },
      { src: 'images/slider-main/living-01.jpg', caption: 'Open Living & Garden Connect' }
    ]
  },
  {
    id: 'res-3',
    num: '03',
    title: 'THE GABLE RESIDENCE',
    location: 'Kaipamangalam, Kerala',
    disciplines: 'Architecture · Construction · Interiors',
    year: '2023',
    scope: 'Complete Turnkey',
    area: '3,850 Sq. Ft.',
    heroImg: 'images/projects/project1.jpeg',
    narrative: 'An expressive two-storey residence celebrating geometric rhythm through juxtaposed textures: warm exposed terracotta brick, clean architectural box windows, and private terrace lookouts opening to the upper canopy.',
    gallery: [
      { src: 'images/projects/project1.jpeg', caption: 'Main Architectural Perspective' },
      { src: 'images/slider-main/kitchen-01.jpg', caption: 'Modular Culinary Hub' },
      { src: 'images/slider-main/master-bedroom-01.jpg', caption: 'Upper Level Reading & Sleeping Suite' }
    ]
  },
  {
    id: 'res-4',
    num: '04',
    title: 'MINIMALIST COURTYARD RESIDENCE',
    location: 'Ernakulam, Kerala',
    disciplines: 'Architecture · Interiors',
    year: '2022',
    scope: 'Architectural Design & Interiors',
    area: '4,100 Sq. Ft.',
    heroImg: 'images/projects/project2.jpeg',
    narrative: 'Built with rigorous discipline around spatial flow, this home shields its occupants from urban clamor. A central landscaped courtyard allows sunlight and gentle breezes to permeate each room year-round.',
    gallery: [
      { src: 'images/projects/project2.jpeg', caption: 'Twilight Elevation' },
      { src: 'images/slider-main/living-01.jpg', caption: 'Integrated Living Room' }
    ]
  },
  {
    id: 'res-5',
    num: '05',
    title: 'COASTAL HAVEN',
    location: 'Chavakkad, Kerala',
    disciplines: 'Construction · Architecture',
    year: '2021',
    scope: 'Turnkey Construction',
    area: '2,900 Sq. Ft.',
    heroImg: 'images/projects/project5.jpeg',
    narrative: 'Engineered specifically for coastal longevity. Heavy-duty reinforced concrete massing, marine-grade timber louvres, and expansive shaded verandahs ensure resilience against salt air and intense humidity.',
    gallery: [
      { src: 'images/projects/project5.jpeg', caption: 'Porch & Verandah Details' },
      { src: 'images/slider-main/living-01.jpg', caption: 'Interior Living Space' }
    ]
  },
  {
    id: 'res-6',
    num: '06',
    title: 'THE URBAN VILLA',
    location: 'Thrissur City, Kerala',
    disciplines: 'Architecture · Construction · Interiors',
    year: '2023',
    scope: 'Turnkey Design & Build',
    area: '3,450 Sq. Ft.',
    heroImg: 'images/projects/project6.jpeg',
    narrative: 'A seamless demonstration of how architecture and interior joinery synthesize into one fluid sanctuary. Clean geometric cantilevers outside give way to soft warm lighting and custom hardwood craft inside.',
    gallery: [
      { src: 'images/projects/project6.jpeg', caption: 'Front Street Elevation' },
      { src: 'images/slider-main/master-bedroom-01.jpg', caption: 'Master Suite' },
      { src: 'images/slider-main/kitchen-01.jpg', caption: 'Custom Kitchen' }
    ]
  }
];

let activeProjectIdx = 0;

function initProjectsModal() {
  const modal = document.getElementById('project-modal-screen');
  if (!modal) return;

  const closeBtn = document.getElementById('modal-close-trigger');
  const nextBtn = document.getElementById('modal-next-project-trigger');

  document.querySelectorAll('[data-open-project]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = trigger.getAttribute('data-open-project');
      const idx = RESIDENCES_DATA.findIndex(p => p.id === projId);
      if (idx !== -1) {
        showProjectScreen(idx);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', hideProjectScreen);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIdx = (activeProjectIdx + 1) % RESIDENCES_DATA.length;
      showProjectScreen(nextIdx);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      hideProjectScreen();
    }
  });
}

function showProjectScreen(index) {
  const modal = document.getElementById('project-modal-screen');
  if (!modal) return;

  activeProjectIdx = index;
  const project = RESIDENCES_DATA[index];

  modal.querySelector('#modal-hero-photo').src = project.heroImg;
  modal.querySelector('#modal-hero-photo').alt = project.title;
  modal.querySelector('#modal-num-display').textContent = `RESIDENCE ${project.num}`;
  modal.querySelector('#modal-title-display').textContent = project.title;
  modal.querySelector('#modal-loc-display').textContent = project.location;
  modal.querySelector('#modal-disc-display').textContent = project.disciplines;
  modal.querySelector('#modal-year-display').textContent = project.year;
  modal.querySelector('#modal-area-display').textContent = project.area;
  modal.querySelector('#modal-scope-display').textContent = project.scope;
  modal.querySelector('#modal-story-display').textContent = project.narrative;

  const nextProject = RESIDENCES_DATA[(index + 1) % RESIDENCES_DATA.length];
  modal.querySelector('#modal-next-name-display').textContent = `${nextProject.title} →`;

  // Gallery
  const galleryBox = modal.querySelector('#modal-gallery-strip');
  galleryBox.innerHTML = '';
  project.gallery.forEach(item => {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = '2.5rem';
    wrap.innerHTML = `
      <img src="${item.src}" alt="${item.caption}" class="modal-gallery-full-img" loading="lazy">
      <div style="font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--warm-grey); margin-top: 1rem;">
        ${item.caption}
      </div>
    `;
    galleryBox.appendChild(wrap);
  });

  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
}

function hideProjectScreen() {
  const modal = document.getElementById('project-modal-screen');
  if (!modal) return;
  modal.classList.remove('is-active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Minimal Testimonials Carousel
   ========================================================================== */
const TESTIMONIALS_DATA = [
  {
    quote: "“A builder with a genuinely professional approach, with deep focus on quality and timely delivery. Very responsive to any queries and flexible to see things from the customer perspective.”",
    client: "Ansar Chalingadu",
    role: "Director, AKT"
  },
  {
    quote: "“Peaceful premises and good construction with a touch of beauty. The villa I made with Grand Architecture is a dream for our family, and Manu the man behind it is so gentle and helpful that I see him now as a true friend.”",
    client: "Vysakh Sisupal",
    role: "Manager, Lulu Group"
  },
  {
    quote: "“When the project was complete, I was thrilled with the results. My new residence is beautiful, well-built, and I know that it will last for many years to come. I would highly recommend Grand Architecture to anyone looking for a home crafted with care.”",
    client: "Vishnu VU",
    role: "Homeowner, Thrissur"
  }
];

let activeTestimonialIdx = 0;

function initTestimonialSlider() {
  const quoteElem = document.getElementById('test-quote-display');
  const authorElem = document.getElementById('test-author-display');
  const prevBtn = document.getElementById('test-prev-btn');
  const nextBtn = document.getElementById('test-next-btn');

  if (!quoteElem || !authorElem) return;

  const update = (idx) => {
    activeTestimonialIdx = (idx + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
    const data = TESTIMONIALS_DATA[activeTestimonialIdx];

    quoteElem.style.opacity = '0';
    authorElem.style.opacity = '0';

    setTimeout(() => {
      quoteElem.textContent = data.quote;
      authorElem.textContent = `— ${data.client}, ${data.role}`;
      quoteElem.style.opacity = '1';
      authorElem.style.opacity = '1';
    }, 250);
  };

  if (prevBtn) prevBtn.addEventListener('click', () => update(activeTestimonialIdx - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => update(activeTestimonialIdx + 1));
}

/* ==========================================================================
   Consultation Modal Form
   ========================================================================== */
function initConsultationDialog() {
  const modal = document.getElementById('consultation-dialog');
  if (!modal) return;

  const closeBtn = document.getElementById('consultation-close-btn');

  document.querySelectorAll('[data-consultation-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  });

  const form = modal.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value;
      const phone = form.querySelector('[name="phone"]').value;
      const scope = form.querySelector('[name="scope"]').value;
      const notes = form.querySelector('[name="notes"]').value;

      const waText = encodeURIComponent(
        `Hello Grand Architecture, my name is ${name}. I am planning a project (${scope}). Phone: ${phone}. Details: ${notes}`
      );
      const waUrl = `https://wa.me/919745554431?text=${waText}`;

      form.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <div style="font-family: var(--font-serif); font-size: 2.5rem; margin-bottom: 1rem;">Thank you, ${name}.</div>
          <p style="color: var(--warm-grey); font-size: 0.95rem; margin-bottom: 2.5rem; line-height: 1.7;">
            Your project vision has been transmitted to our design leadership. We will connect with you within 24 hours.
          </p>
          <a href="${waUrl}" target="_blank" class="cta-btn-white" style="background: var(--charcoal); color: #fff; display: inline-flex;">
            Connect Directly on WhatsApp →
          </a>
        </div>
      `;
    });
  }
}

/* ==========================================================================
   Smooth Anchor Scrolling
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
