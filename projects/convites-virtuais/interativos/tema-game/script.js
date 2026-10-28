// ========================================================
// CONVITE VIRTUAL INTERATIVO - MINI-GAME RETRÔ QUEST
// Printfoco - Enzo Faz 8 Anos
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  const gameGate = document.getElementById('gameGate');
  const coinBox = document.getElementById('coinBox');
  const btnStartGame = document.getElementById('btnStartGame');
  const inviteContent = document.getElementById('inviteContent');
  const coinSoundBtn = document.getElementById('coinSoundBtn');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const rsvpForm = document.getElementById('rsvpForm');
  const gamerFeedback = document.getElementById('gamerFeedback');

  // --- 1. Som Retrô 8-bits de Moeda / 1UP ---
  let audioCtx = null;
  function ensureAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playCoinSound() {
    ensureAudioCtx();
    if (!audioCtx) return;

    // Dois bips em onda quadrada rápida estilo Mario Coin (B5 -> E6)
    const tones = [
      { freq: 987.77, dur: 0.08, delay: 0 },
      { freq: 1318.51, dur: 0.28, delay: 0.08 }
    ];

    tones.forEach(t => {
      setTimeout(() => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(t.freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + t.dur);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + t.dur);
      }, t.delay * 1000);
    });
  }

  if (coinSoundBtn) coinSoundBtn.addEventListener('click', playCoinSound);

  function startGame() {
    playCoinSound();

    setTimeout(() => {
      gameGate.style.opacity = '0';
      gameGate.style.transform = 'scale(0.95)';
      setTimeout(() => {
        gameGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
    }, 450);
  }

  if (coinBox) coinBox.addEventListener('click', startGame);
  if (btnStartGame) btnStartGame.addEventListener('click', startGame);

  // --- 2. Canvas de Moedas & Estrelas Pixel ---
  const canvas = document.getElementById('pixelCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const pixels = [];
  for (let i = 0; i < 25; i++) {
    pixels.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.floor(Math.random() * 6 + 3),
      speedY: -(Math.random() * 1.5 + 0.5),
      color: Math.random() > 0.5 ? '#facc15' : '#22c55e'
    });
  }

  function animatePixels() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixels.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      p.y += p.speedY;
      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animatePixels);
  }
  animatePixels();

  // --- 3. Contagem Regressiva para 22/11/2026 às 14:00 ---
  const targetDate = new Date('2026-11-22T14:00:00-03:00').getTime();

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
    const m = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = d < 10 ? `0${d}` : d;
    if (hoursEl) hoursEl.textContent = h < 10 ? `0${h}` : h;
    if (minutesEl) minutesEl.textContent = m < 10 ? `0${m}` : m;
    if (secondsEl) secondsEl.textContent = s < 10 ? `0${s}` : s;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // --- 4. Formulário RSVP via WhatsApp ---
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const playerName = document.getElementById('playerName').value.trim();
      const playerCount = document.getElementById('playerCount').value;
      const presence = document.querySelector('input[name="presence"]:checked').value;

      const isYes = presence === 'sim';
      let message = `🎮 *Slot Confirmado no Lobby - Enzo Level 8 (Game Quest)*\n\n`;
      message += `👤 *Player(s):* ${playerName}\n`;
      message += `🕹️ *Slots na Party:* ${playerCount}\n`;
      message += isYes 
        ? `🔥 *Status:* READY! Presença confirmadíssima! Vamos subir de nível juntos!` 
        : `💌 *Status:* Enzo meu amigo, ficarei AFK nessa fase, mas desejo um super level up e parabéns!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (gamerFeedback) gamerFeedback.classList.remove('hidden');
      window.open(waUrl, '_blank');
    });
  }

});
