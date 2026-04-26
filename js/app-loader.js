window.Portal = window.Portal || {};

window.Portal.openApp = function (id, subject, name) {
  var src = Portal.apps[id];
  if (!src) { return; }

  document.getElementById('appFrame').src = src;
  document.getElementById('atbSubject').textContent = subject;
  document.getElementById('atbName').textContent = name;
  document.getElementById('appScreen').classList.add('open');
  document.getElementById('home').style.display = 'none';
};

window.Portal.closeApp = function () {
  document.getElementById('appScreen').classList.remove('open');
  document.getElementById('home').style.display = 'block';
  document.getElementById('appFrame').src = '';
};
