window.Portal = window.Portal || {};

window.Portal.tenses = [
  {
    name:'Present Simple', color:'#3b82f6', rgb:'59,130,246',
    marker:'dots', dotPositions:[38,46,54,62,70],
    uso:'Hábitos, rutinas y verdades generales.',
    forma:'<code>I/You/We/They work</code> · <code>He/She/It works</code>',
    neg:'<code>don\'t work</code> / <code>doesn\'t work</code>',
    preg:'<code>Do</code> you work? · <code>Does</code> she work?'
  },
  {
    name:'Past Simple', color:'#f0883e', rgb:'240,136,62',
    marker:'cross', crossPos:20,
    uso:'Acción completada en un momento específico del pasado.',
    forma:'<code>worked</code> (regular) · <code>went</code> (irregular)',
    neg:'<code>didn\'t work</code> (todos los sujetos)',
    preg:'<code>Did</code> you work? · <code>Did</code> she go?'
  },
  {
    name:'Present Continuous', color:'#10b981', rgb:'16,185,129',
    marker:'wave', waveLeft:36, waveWidth:28,
    uso:'Acción que ocurre <em>ahora mismo</em> o situación temporal.',
    forma:'<code>am/is/are + verb-ing</code><br>She <code>is reading</code>.',
    neg:'<code>am/is/are not + verb-ing</code><br>They <code>aren\'t watching</code>.',
    preg:'<code>Am/Is/Are</code> + subject + <code>verb-ing</code>?<br><code>Is</code> she working?'
  },
  {
    name:'Past Continuous', color:'#a371f7', rgb:'163,113,247',
    marker:'wave', waveLeft:14, waveWidth:28,
    uso:'Acción que estaba en progreso en un momento del pasado.',
    forma:'<code>was/were + verb-ing</code><br>He <code>was sleeping</code>.',
    neg:'<code>wasn\'t / weren\'t + verb-ing</code><br>They <code>weren\'t playing</code>.',
    preg:'<code>Was/Were</code> + subject + <code>verb-ing</code>?<br><code>Were</code> you studying?'
  }
];
