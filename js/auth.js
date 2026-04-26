if (sessionStorage.getItem('gael_ok') === '1') {
  window.location.href = 'home.html';
}

var shown = false;
var pwInput  = document.getElementById('pwInput');
var pwError  = document.getElementById('pwError');
var pwSubmit = document.getElementById('pwSubmit');
var eyeBtn   = document.getElementById('eyeBtn');

function checkPw() {
  if (pwInput.value === 'estudiantebrillante!') {
    var lockScreen = document.getElementById('lockScreen');
    lockScreen.style.transition = 'opacity .35s';
    lockScreen.style.opacity = '0';
    setTimeout(function() {
      sessionStorage.setItem('gael_ok', '1');
      window.location.href = 'home.html';
    }, 350);
  } else {
    pwError.textContent = 'Contraseña incorrecta, intentá de nuevo';
    pwInput.value = '';
    setTimeout(function() { pwError.textContent = ''; }, 2500);
  }
}

function togglePw() {
  shown = !shown;
  pwInput.type = shown ? 'text' : 'password';
  eyeBtn.textContent = shown ? '🙈' : '👁';
}

pwSubmit.addEventListener('click', checkPw);
eyeBtn.addEventListener('click', togglePw);
pwInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') checkPw(); });
