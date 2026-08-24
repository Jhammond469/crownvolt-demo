(function () {
  'use strict';

  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () { mobileMenu.classList.toggle('is-open'); });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileMenu.classList.remove('is-open'); });
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.10 });
  document.querySelectorAll('.fade-up').forEach(function (el) { observer.observe(el); });

  var statObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-target'), 10);
      if (!target) return;
      var startTime = null, duration = 1600;
      function step(ts) {
        if (!startTime) startTime = ts;
        var p = Math.min((ts - startTime) / duration, 1);
        var ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target);
        if (p < 1) requestAnimationFrame(step); else el.textContent = target;
      }
      requestAnimationFrame(step);
      statObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num[data-target]').forEach(function (el) { statObs.observe(el); });

  // DEMO ONLY — every form on this site is client-side success only. No real
  // n8n webhook wired up yet: CrownVolt hasn't signed on, so there's nothing
  // real to send submissions to. Wire this up for real once they do (same
  // pattern as every other Syntra client site's contact form).
  var contactForm = document.getElementById('contactForm');
  var contactSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactSuccess.style.display = 'block';
      contactForm.reset();
    });
  }

  var heroForm = document.getElementById('heroLeadForm');
  var heroSuccess = document.getElementById('heroFormSuccess');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      heroForm.style.display = 'none';
      heroSuccess.style.display = 'block';
    });
  }
})();
