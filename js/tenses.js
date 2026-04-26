window.Portal = window.Portal || {};

window.Portal.switchTense = function (n) {
  var t = Portal.tenses[n];
  var c = t.color;

  document.querySelectorAll('.tense-tab').forEach(function (tab, i) {
    tab.classList.toggle('active', i === n);
  });

  var marker = '';
  if (t.marker === 'dots') {
    t.dotPositions.forEach(function (p) {
      marker += '<span style="position:absolute;left:' + p + '%;top:18px;width:10px;height:10px;'
        + 'border-radius:50%;background:' + c + ';transform:translateX(-50%)"></span>';
    });
  } else if (t.marker === 'cross') {
    marker = '<span style="position:absolute;left:' + t.crossPos + '%;top:16px;font-size:18px;'
      + 'color:' + c + ';transform:translateX(-50%);line-height:1">✕</span>';
  } else if (t.marker === 'wave') {
    marker = '<div style="position:absolute;left:' + t.waveLeft + '%;top:20px;width:' + t.waveWidth + '%;'
      + 'height:7px;border-radius:4px;background:' + c + ';opacity:.85"></div>';
  }
  document.getElementById('tlMarker').innerHTML = marker;

  var cards = [
    { icon: '🟢', label: 'Cuándo usar',       body: t.uso  },
    { icon: '🔵', label: 'Forma afirmativa',   body: t.forma },
    { icon: '🔴', label: 'Negativo',            body: t.neg  },
    { icon: '🟣', label: 'Pregunta',            body: t.preg }
  ];
  var html = '';
  cards.forEach(function (card) {
    html += '<div class="ti-card" style="--tc:' + c + ';--tc-rgb:' + t.rgb + '">'
      + '<div class="ti-card-label">' + card.icon + ' ' + card.label + '</div>'
      + '<div class="ti-card-body">' + card.body + '</div>'
      + '</div>';
  });
  document.getElementById('tenseInfo').innerHTML = html;

  var tabs = document.querySelectorAll('.tense-tab');
  tabs[n].style.setProperty('--tc', c);
  tabs[n].style.setProperty('--tc-rgb', t.rgb);
};
