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

  // Real n8n webhook, live 2026-08-25 — matches ProCircuit/Powerluxe/SEQ DirtWorx.
  var WEBHOOK_URL = 'https://jhammond.app.n8n.cloud/webhook/crownvolt-contact';

  var contactForm = document.getElementById('contactForm');
  var contactBtn = document.getElementById('formBtn');
  var contactSuccess = document.getElementById('formSuccess');
  var contactError = document.getElementById('formError');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (contactForm.querySelector('[name="_hp"]').value) return; // honeypot tripped, silently drop

      if (typeof gtag === 'function') gtag('event', 'form_submit', { form_id: 'contactForm' });

      contactBtn.textContent = 'Sending…';
      contactBtn.disabled = true;
      contactSuccess.style.display = 'none';
      contactError.style.display = 'none';

      var data = {
        first_name: document.getElementById('fname').value,
        last_name: document.getElementById('lname').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        source: 'contact-page'
      };

      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (res) {
        if (res.ok) {
          contactSuccess.style.display = 'block';
          contactForm.reset();
        } else {
          contactError.style.display = 'block';
        }
      }).catch(function () {
        contactError.style.display = 'block';
      }).finally(function () {
        contactBtn.textContent = 'Submit';
        contactBtn.disabled = false;
      });
    });
  }

  var heroForm = document.getElementById('heroLeadForm');
  var heroBtn = document.getElementById('heroFormBtn');
  var heroSuccess = document.getElementById('heroFormSuccess');
  var heroError = document.getElementById('heroFormError');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (heroForm.querySelector('[name="_hp"]').value) return; // honeypot tripped, silently drop

      if (typeof gtag === 'function') gtag('event', 'form_submit', { form_id: 'heroLeadForm' });

      heroBtn.textContent = 'Sending…';
      heroBtn.disabled = true;
      heroError.style.display = 'none';

      var data = {
        name: heroForm.querySelector('[name="name"]').value,
        phone: heroForm.querySelector('[name="phone"]').value,
        email: heroForm.querySelector('[name="email"]').value,
        message: heroForm.querySelector('[name="message"]').value,
        source: 'hero-lead-card'
      };

      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (res) {
        if (res.ok) {
          heroForm.style.display = 'none';
          heroSuccess.style.display = 'block';
        } else {
          heroError.style.display = 'block';
        }
      }).catch(function () {
        heroError.style.display = 'block';
      }).finally(function () {
        heroBtn.textContent = 'Book My Free Site Visit';
        heroBtn.disabled = false;
      });
    });
  }

  // Click-to-call event tracking — visible in GA4 instead of leaving zero trace.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="tel:"]');
    if (a && typeof gtag === 'function') {
      gtag('event', 'click_to_call', { phone_number: a.getAttribute('href').replace('tel:', '') });
    }
  });
})();
