// ===== PRELOADER =====
window.addEventListener('load', function() {
  var preloader = document.getElementById('preloader');
  setTimeout(function() {
    preloader.classList.add('hide');
  }, 1200);
});

// ===== NAVBAR SCROLL =====
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
var sections = document.querySelectorAll('section[id]');
var navItems = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', function() {
  var current = '';
  sections.forEach(function(section) {
    var sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== TYPING ANIMATION =====
var roles = [
  "Graphic Designer",
  "Brand Identity Designer",
  "Logo Designer",
  "Poster Designer",
  "Visual Content Creator",
  "Print Designer"
];
var roleIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typedText = document.getElementById('typedText');

function typeEffect() {
  var currentRole = roles[roleIndex];
  if (isDeleting) {
    typedText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(function() { isDeleting = true; typeEffect(); }, 2000);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  var speed = isDeleting ? 60 : 100;
  setTimeout(typeEffect, speed);
}
setTimeout(typeEffect, 1400);

// ===== REVEAL ON SCROLL =====
function initReveal() {
  var revealEls = document.querySelectorAll('.reveal, .fade-in-left, .fade-in-right');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function(el) {
    observer.observe(el);
  });

  // Trigger hero elements immediately
  document.querySelectorAll('.fade-in-left, .fade-in-right').forEach(function(el) {
    setTimeout(function() { el.classList.add('visible'); }, 300);
  });
}
initReveal();

// ===== SKILL BAR ANIMATION =====
function animateSkillBars() {
  var bars = document.querySelectorAll('.skill-bar-fill');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var width = entry.target.getAttribute('data-width');
        setTimeout(function() {
          entry.target.style.width = width + '%';
        }, 300);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(function(bar) { observer.observe(bar); });
}
animateSkillBars();

// ===== BACK TO TOP =====
var backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CONTACT FORM =====
var contactForm = document.getElementById('contactForm');
var formSuccess = document.getElementById('formSuccess');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var btn = contactForm.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;
  setTimeout(function() {
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    btn.disabled = false;
    formSuccess.classList.add('show');
    contactForm.reset();
    setTimeout(function() {
      formSuccess.classList.remove('show');
    }, 5000);
  }, 1500);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var href = this.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
