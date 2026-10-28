// ========================================================
// CONVITE VIRTUAL INTERATIVO - BOTECO DO RODRIGO (40 ANOS)
// Printfoco - Aniversário Adulto
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Elementos DOM ---
  const botecoGate = document.getElementById('botecoGate');
  const mugWrapper = document.getElementById('mugWrapper');
  const mugBeer = document.getElementById('mugBeer');
  const openBotecoBtn = document.getElementById('openBotecoBtn');
  const inviteContent = document.getElementById('inviteContent');

  const toastBtn = document.getElementById('toastBtn');
  const musicBtn = document.getElementById('musicBtn');
  const musicIcon = document.getElementById('musicIcon');
  const musicText = document.getElementById('musicText');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const rsvpForm = document.getElementById('rsvpForm');
  const pubFeedback = document.getElementById('pubFeedback');

  // --- 1. Abertura do Boteco & Animação da Caneca ---
  function openBoteco() {
    if (mugBeer) {
      mugBeer.style.height = '95%';
    }
    createBeerBubbleBurst(60);
    playCheersSound();

    setTimeout(() => {
      botecoGate.style.opacity = '0';
      botecoGate.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        botecoGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        startSambaOnce();
      }, 400);
    }, 500);
  }

  if (mugWrapper) mugWrapper.addEventListener('click', openBoteco);
  if (openBotecoBtn) openBotecoBtn.addEventListener('click', openBoteco);

  // --- 2. Canvas de Bolhas Douradas de Cerveja ---
  const canvas = document.getElementById('beerCanvas');
  const ctx = canvas.getContext('2d');
  let bubbles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class BeerBubble {
    constructor(x, y, isBurst = false) {
      this.x = x !== undefined ? x : Math.random() * canvas.width;
      this.y = y !== undefined ? y : canvas.height + 10;
      this.size = Math.random() * 5 + 2;
      this.speedY = isBurst ? (Math.random() - 0.5) * 6 : -(Math.random() * 1.8 + 0.8);
      this.speedX = isBurst ? (Math.random() - 0.5) * 6 : Math.sin(Math.random() * Math.PI) * 0.4;
      this.opacity = Math.random() * 0.6 + 0.3;
      this.color = Math.random() > 0.3 ? 'rgba(245, 158, 11,' : 'rgba(254, 243, 199,';
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y < -10) {
        this.opacity = 0;
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color} ${this.opacity})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.7})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    }
  }

  function createBeerBubbleBurst(count = 40) {
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight * 0.45;
    for (let i = 0; i < count; i++) {
      bubbles.push(new BeerBubble(originX, originY, true));
    }
  }

  function loopBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (bubbles.length < 35 && Math.random() > 0.4) {
      bubbles.push(new BeerBubble());
    }

    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.update();
      b.draw();
      if (b.opacity <= 0 || b.y < -20) {
        bubbles.splice(i, 1);
      }
    }

    requestAnimationFrame(loopBubbles);
  }
  loopBubbles();

  // --- 3. Som de Brinde & Botão "Brinde!" ---
  let audioCtx = null;

  function ensureAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playCheersSound() {
    ensureAudioCtx();
    if (!audioCtx) return;

    // Dois sinos de cristal agudo simulando taças brindando
    const freqs = [2100, 2600];
    freqs.forEach((freq, idx) => {
      setTimeout(() => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.8);
      }, idx * 60);
    });
  }

  if (toastBtn) {
    toastBtn.addEventListener('click', () => {
      playCheersSound();
      createBeerBubbleBurst(50);
      toastBtn.classList.add('playing');
      setTimeout(() => toastBtn.classList.remove('playing'), 1000);
    });
  }

  // --- 4. Batucada & Cavaco de Samba (Web Audio API) ---
  let isPlaying = false;
  let sambaTimer = null;
  let sambaStep = 0;

  // Linha de baixo e acorde sambado em D maior
  const sambaPattern = [
    { bass: 146.83, chord: [293.66, 369.99, 440.00], dur: 0.22 }, // D
    { bass: null, chord: [293.66, 369.99, 440.00], dur: 0.15 },
    { bass: 220.00, chord: [277.18, 329.63, 440.00], dur: 0.22 }, // A
    { bass: null, chord: [277.18, 329.63, 440.00], dur: 0.15 },
    { bass: 164.81, chord: [329.63, 392.00, 493.88], dur: 0.22 }, // E
    { bass: null, chord: [329.63, 392.00, 493.88], dur: 0.15 },
    { bass: 220.00, chord: [277.18, 329.63, 440.00], dur: 0.22 }, // A
    { bass: null, chord: [277.18, 329.63, 440.00], dur: 0.15 },
  ];

  function playSambaStep() {
    if (!audioCtx || !isPlaying) return;
    const stepData = sambaPattern[sambaStep];

    // Surdo/Baixo sincopado
    if (stepData.bass) {
      const bassOsc = audioCtx.createOscillator();
      const bassGain = audioCtx.createGain();
      bassOsc.type = 'triangle';
      bassOsc.frequency.setValueAtTime(stepData.bass, audioCtx.currentTime);

      bassGain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      bassGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);

      bassOsc.connect(bassGain);
      bassGain.connect(audioCtx.destination);
      bassOsc.start();
      bassOsc.stop(audioCtx.currentTime + 0.25);
    }

    // Cavaco raspado
    if (stepData.chord) {
      stepData.chord.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 0.01 + idx * 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + stepData.dur);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + stepData.dur);
      });
    }

    sambaStep = (sambaStep + 1) % sambaPattern.length;
    sambaTimer = setTimeout(playSambaStep, stepData.dur * 1000);
  }

  function toggleMusic() {
    ensureAudioCtx();

    if (isPlaying) {
      isPlaying = false;
      clearTimeout(sambaTimer);
      musicBtn.classList.remove('playing');
      musicIcon.textContent = '🎺';
      musicText.textContent = 'Samba';
    } else {
      isPlaying = true;
      musicBtn.classList.add('playing');
      musicIcon.textContent = '🥁';
      musicText.textContent = 'Tocando';
      playSambaStep();
    }
  }

  function startSambaOnce() {
    if (!isPlaying && !audioCtx) {
      toggleMusic();
    }
  }

  if (musicBtn) {
    musicBtn.addEventListener('click', toggleMusic);
  }

  // --- 5. Contagem Regressiva para 07/11/2026 às 14:00 ---
  const targetDate = new Date('2026-11-07T14:00:00-03:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = d < 10 ? `0${d}` : d;
    if (hoursEl) hoursEl.textContent = h < 10 ? `0${h}` : h;
    if (minutesEl) minutesEl.textContent = m < 10 ? `0${m}` : m;
    if (secondsEl) secondsEl.textContent = s < 10 ? `0${s}` : s;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // --- 6. Formulário RSVP via WhatsApp ---
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guestName').value.trim();
      const guestTotal = document.getElementById('guestTotal').value;
      const drinkPref = document.getElementById('drinkPref').value;
      const presence = document.querySelector('input[name="presence"]:checked').value;

      const isYes = presence === 'sim';
      let message = `🍺 *Confirmação de Presença - Boteco do Rodrigo (40 Anos)*\n\n`;
      message += `👤 *Nome:* ${guestName}\n`;
      message += `👥 *Total de Pessoas:* ${guestTotal}\n`;
      message += `🍻 *Bebida:* ${drinkPref}\n`;
      message += isYes 
        ? `🔥 *Presença:* Confirmadíssimo! Pode gelar o chopp que estarei lá para comemorar esses 40 anos em grande estilo!` 
        : `💌 *Presença:* Rodrigo meu amigo, infelizmente não poderei ir nessa, mas desejo um feliz aniversário e muita saúde!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (pubFeedback) {
        pubFeedback.classList.remove('hidden');
      }

      window.open(waUrl, '_blank');
    });
  }

});
