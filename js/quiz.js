window.Portal = window.Portal || {};

(function () {
  var qqQuestions = [];
  var qqIndex     = 0;
  var qqCorrect   = 0;
  var qqAnswered  = false;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function renderQQ() {
    var content = document.getElementById('qqContent');
    if (qqIndex >= qqQuestions.length) { showQQResult(); return; }
    var q = qqQuestions[qqIndex];
    document.getElementById('qqProg').textContent = (qqIndex + 1) + '/' + qqQuestions.length;
    qqAnswered = false;

    var letters = ['A', 'B', 'C', 'D'];
    var html = '<div class="qq-subject">' + q.subject + ' · ' + q.topic + '</div>'
      + '<div class="qq-question">' + q.q + '</div>'
      + '<div class="qq-opts" id="qqOpts">';
    for (var i = 0; i < q.opts.length; i++) {
      html += '<button class="qq-opt" data-idx="' + i + '">'
        + '<span class="qq-letter">' + letters[i] + '</span><span>' + q.opts[i] + '</span></button>';
    }
    html += '</div><div class="qq-fbk" id="qqFbk"></div><button class="qq-next-btn" id="qqNext">Siguiente →</button>';
    content.innerHTML = html;

    document.querySelectorAll('.qq-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (qqAnswered) return;
        qqAnswered = true;
        var idx = parseInt(btn.getAttribute('data-idx'));
        var isOk = (idx === q.cor);
        if (isOk) qqCorrect++;
        document.querySelectorAll('.qq-opt').forEach(function (b, i) {
          b.disabled = true;
          if (i === q.cor) b.classList.add('ok');
          else if (i === idx) b.classList.add('no');
        });
        var fbk = document.getElementById('qqFbk');
        fbk.innerHTML = (isOk ? '✓ ¡Correcto! ' : '✗ Incorrecto. ') + q.exp;
        fbk.classList.add('on');
        var nextBtn = document.getElementById('qqNext');
        nextBtn.classList.add('on');
        nextBtn.textContent = (qqIndex + 1 >= qqQuestions.length) ? 'Ver resultado →' : 'Siguiente →';
        nextBtn.onclick = function () { qqIndex++; renderQQ(); };
      });
    });
  }

  function showQQResult() {
    var content = document.getElementById('qqContent');
    document.getElementById('qqProg').textContent = '✓ ' + qqCorrect + '/5';
    var pct = qqCorrect / qqQuestions.length;
    var emoji, text;
    if (pct >= 0.8)      { emoji = '🏆'; text = '¡Excelente!'; }
    else if (pct >= 0.6) { emoji = '💪'; text = '¡Bien!'; }
    else if (pct >= 0.4) { emoji = '📚'; text = 'Podés mejorar'; }
    else                 { emoji = '📖'; text = 'A repasar'; }
    content.innerHTML = '<div class="qq-result on">'
      + '<div class="qq-result-emoji">' + emoji + '</div>'
      + '<div class="qq-result-text">' + text + '</div>'
      + '<div class="qq-result-detail">Acertaste ' + qqCorrect + ' de ' + qqQuestions.length + ' preguntas</div>'
      + '<button class="qq-restart" id="qqRestart">↺ Otras 5 preguntas</button>'
      + '</div>';
    document.getElementById('qqRestart').addEventListener('click', Portal.initQuickQuiz);
  }

  window.Portal.initQuickQuiz = function () {
    var pool = Portal.questions.filter(function (q) {
      return q.subject === 'Historia' || q.subject === 'Inglés';
    });
    qqQuestions = shuffle(pool).slice(0, 5);
    qqIndex = 0; qqCorrect = 0; qqAnswered = false;
    renderQQ();
  };
})();
