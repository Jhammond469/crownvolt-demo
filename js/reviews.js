/* Syntra — live Google reviews renderer.
 *
 * Drop-in for any Syntra client site. Pulls cached Google reviews from the shared
 * n8n workflow ("Syntra - Google Reviews (All Clients)") and renders them into the
 * reviews section. Add a client by adding one row to that workflow's Client List
 * node — no change needed here.
 *
 * Usage:
 *   <div data-syntra-reviews data-client="crownvolt" data-max="6"></div>
 *   <script src="js/reviews.js" defer></script>
 *
 * Optional attributes:
 *   data-endpoint   override the webhook URL
 *   data-max        max reviews to show (default 6)
 *   data-placeholder  CSS selector for a "coming soon" block to hide once real
 *                     reviews exist. Left visible if there are none.
 *
 * Deliberate behaviour: if the fetch fails, or the business has no qualifying
 * reviews yet, this does NOTHING and the existing placeholder stays. A new client
 * with an empty Google profile must never end up with a blank reviews section.
 */
(function () {
  'use strict';

  var DEFAULT_ENDPOINT = 'https://jhammond.app.n8n.cloud/webhook/reviews';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function stars(n) {
    var full = Math.round(Number(n) || 0), out = '';
    for (var i = 0; i < 5; i++) {
      out += '<span class="sr-star' + (i < full ? '' : ' sr-star-off') + '">&#9733;</span>';
    }
    return out;
  }

  function injectStyles() {
    if (document.getElementById('syntra-reviews-css')) return;
    var css = [
      '.sr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:22px}',
      '.sr-card{background:var(--sr-card-bg,rgba(255,255,255,.04));border:1px solid var(--sr-border,rgba(255,255,255,.10));',
      'border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:12px}',
      '.sr-top{display:flex;align-items:center;gap:12px}',
      '.sr-avatar{width:40px;height:40px;border-radius:50%;object-fit:cover;flex:0 0 40px}',
      '.sr-initial{width:40px;height:40px;border-radius:50%;flex:0 0 40px;display:flex;align-items:center;',
      'justify-content:center;font-weight:800;background:var(--sr-accent,#D9AF3E);color:var(--sr-accent-ink,#0B0D16)}',
      '.sr-who{display:flex;flex-direction:column;line-height:1.3;min-width:0}',
      '.sr-name{font-weight:700}',
      '.sr-when{font-size:.8rem;opacity:.65}',
      '.sr-star{color:var(--sr-accent,#D9AF3E);letter-spacing:1px}',
      '.sr-star-off{opacity:.25}',
      '.sr-text{margin:0;line-height:1.65;opacity:.9}',
      '.sr-foot{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:28px;',
      'font-size:.85rem;opacity:.6;flex-wrap:wrap;text-align:center}',
      '@media (max-width:520px){.sr-card{padding:20px}}'
    ].join('');
    var el = document.createElement('style');
    el.id = 'syntra-reviews-css';
    el.textContent = css;
    document.head.appendChild(el);
  }

  function card(r) {
    var avatar = r.avatar
      ? '<img class="sr-avatar" src="' + esc(r.avatar) + '" alt="" loading="lazy" referrerpolicy="no-referrer" />'
      : '<div class="sr-initial">' + esc((r.author || '?').trim().charAt(0).toUpperCase()) + '</div>';

    return '<article class="sr-card">' +
             '<div class="sr-top">' + avatar +
               '<div class="sr-who">' +
                 '<span class="sr-name">' + esc(r.author) + '</span>' +
                 (r.when ? '<span class="sr-when">' + esc(r.when) + '</span>' : '') +
               '</div>' +
             '</div>' +
             '<div>' + stars(r.rating) + '</div>' +
             '<p class="sr-text">' + esc(r.text) + '</p>' +
           '</article>';
  }

  function render(mount, data) {
    var max = parseInt(mount.getAttribute('data-max'), 10) || 6;
    var list = (data.reviews || []).slice(0, max);
    if (!list.length) return false;           // leave the placeholder alone

    injectStyles();

    var foot = '';
    if (data.rating && data.total) {
      foot = '<div class="sr-foot"><span>' + stars(data.rating) + '</span>' +
             '<span>' + esc(Number(data.rating).toFixed(1)) + ' from ' +
             esc(data.total) + ' Google review' + (data.total === 1 ? '' : 's') + '</span></div>';
    }

    mount.innerHTML = '<div class="sr-grid">' + list.map(card).join('') + '</div>' + foot;

    var ph = mount.getAttribute('data-placeholder');
    if (ph) {
      var node = document.querySelector(ph);
      if (node) node.hidden = true;
    }
    mount.setAttribute('data-syntra-reviews-state', 'loaded');
    return true;
  }

  function start() {
    var mounts = document.querySelectorAll('[data-syntra-reviews]');
    Array.prototype.forEach.call(mounts, function (mount) {
      var client = mount.getAttribute('data-client');
      if (!client) return;
      var endpoint = mount.getAttribute('data-endpoint') || DEFAULT_ENDPOINT;

      fetch(endpoint + '?client=' + encodeURIComponent(client), { credentials: 'omit' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (data && !data.error) render(mount, data);
        })
        .catch(function () { /* stay silent — placeholder remains */ });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
