window.Portal = window.Portal || {};

window.Portal.setupNavTabs = function () {
  function switchSection(name) {
    document.getElementById('section-proximos').style.display = (name === 'proximos') ? '' : 'none';
    document.getElementById('section-historico').style.display = (name === 'historico') ? '' : 'none';
    document.querySelectorAll('.nav-tab').forEach(function (t) {
      t.classList.toggle('active', t.getAttribute('data-section') === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-tab').forEach(function (t) {
    t.addEventListener('click', function () { switchSection(t.getAttribute('data-section')); });
  });
};
