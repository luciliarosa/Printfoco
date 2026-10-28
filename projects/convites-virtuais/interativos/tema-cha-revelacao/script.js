// ========================================================
// CONVITE VIRTUAL INTERATIVO - CHÁ REVELAÇÃO
// Printfoco - Juliana & Rafael (Theo ou Lívia)
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Elementos DOM ---
  const revealGate = document.getElementById('revealGate');
  const mysteryBox = document.getElementById('mysteryBox');
  const openRevealBtn = document.getElementById('openRevealBtn');
  const inviteContent = document.getElementById('inviteContent');

  const confettiBtn = document.getElementById('confettiBtn');
  const musicBtn = document.getElementById('musicBtn');
  const musicIcon = document.getElementById('musicIcon');
  const musicText = document.getElementById('musicText');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpFeedback = document.getElementById('rsvpFeedback');

  // Enquete
  const btnVoteBoy = document.getElementById('btnVoteBoy');
  const btnVoteGirl = document.getElementById('btnVoteGirl');
  const boyPercentEl = document.getElementById('boyPercent');
  const boyVotesEl = document.getElementById('boyVotes');
  const girlPercentEl = document.getElementById('girlPercent');
  const girlVotesEl = document.getElementById('girlVotes');
  const barBoyFill = document.getElementById('barBoyFill');
  const barGirlFill = document.getElementById('barGirlFill');
  const voteSuccessBanner = document.getElementById('voteSuccessBanner');
  const votedChoiceText = document.getElementById('votedChoiceText');
  const voteControls = document.getElementById('voteControls');

  // --- 1. Abertura da Caixa Misteriosa ---
  function openInvite() {
    mysteryBox.style.transform = 'scale(1.15) rotate(-5deg)';
    burstConfetti(null, 60);

    setTimeout(() => {
      revealGate.style.opacity = '0';
      revealGate.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        revealGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        startMelodyOnce();
      }, 400);
    }, 500);
  }

  if (mysteryBox) mysteryBox.addEventListener('click', openInvite);
  if (openRevealBtn) openRevealBtn.addEventListener('click', openInvite);

  // --- 2. Canvas de Confetes Suaves e Explosão ---
  const canvas = document.getElementById('babyCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const BOY_COLORS = ['#42a5f5', '#90caf9', '#64b5f6'];
  const GIRL_COLORS = ['#ec407a', '#f48fb1', '#f06292'];
  const GOLD_COLORS = ['#ffd54f', '#ffca28', '#ffffff'];

  class ConfettiParticle {
    constructor(x, y, forceColor = null, speedMultiplier = 1) {
      this.x = x !== undefined ? x : Math.random() * canvas.width;
      this.y = y !== undefined ? y : -15;
      this.size = Math.random() * 8 + 4;
      this.speedY = (Math.random() * 2 + 1) * speedMultiplier;
      this.speedX = (Math.random() - 0.5) * 3 * speedMultiplier;
      this.angle = Math.random() * Math.PI * 2;
      this.spin = (Math.random() - 0.5) * 0.1;
      this.opacity = 1;

      if (forceColor) {
        this.color = forceColor;
      } else {
        const pool = Math.random() > 0.5 ? BOY_COLORS : (Math.random() > 0.3 ? GIRL_COLORS : GOLD_COLORS);
        this.color = pool[Math.floor(Math.random() * pool.length)];
      }
      this.shape = Math.random() > 0.4 ? 'rect' : 'circle';
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.angle += this.spin;
      if (this.y > canvas.height + 20) {
        this.opacity -= 0.05;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      if (this.shape === 'rect') {
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function burstConfetti(colorTheme = null, count = 50) {
    const originX = window.innerWidth / 2;
    const originY = window.innerHeight * 0.35;
    for (let i = 0; i < count; i++) {
      let chosenColor = null;
      if (colorTheme === 'boy') {
        chosenColor = BOY_COLORS[Math.floor(Math.random() * BOY_COLORS.length)];
      } else if (colorTheme === 'girl') {
        chosenColor = GIRL_COLORS[Math.floor(Math.random() * GIRL_COLORS.length)];
      }
      const p = new ConfettiParticle(originX, originY, chosenColor, 2.5);
      p.speedY = (Math.random() - 0.5) * 8;
      p.speedX = (Math.random() - 0.5) * 8;
      particles.push(p);
    }
  }

  // Chuva de confetes sutil contínua
  function loopConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (particles.length < 25 && Math.random() > 0.6) {
      particles.push(new ConfettiParticle());
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw();
      if (p.opacity <= 0 || p.y > canvas.height + 50) {
        particles.splice(i, 1);
      }
    }

    requestAnimationFrame(loopConfetti);
  }
  loopConfetti();

  if (confettiBtn) {
    confettiBtn.addEventListener('click', () => burstConfetti(null, 60));
  }

  // --- 3. Melodia de Caixa de Música de Bebê (Web Audio API) ---
  let audioCtx = null;
  let isPlaying = false;
  let melodyTimer = null;
  let noteIndex = 0;

  // Brilha Brilha Estrelinha (C4 C4 G4 G4 A4 A4 G4 | F4 F4 E4 E4 D4 D4 C4)
  const lullabyNotes = [
    { freq: 261.63, dur: 0.4 }, // C4
    { freq: 261.63, dur: 0.4 }, // C4
    { freq: 392.00, dur: 0.4 }, // G4
    { freq: 392.00, dur: 0.4 }, // G4
    { freq: 440.00, dur: 0.4 }, // A4
    { freq: 440.00, dur: 0.4 }, // A4
    { freq: 392.00, dur: 0.8 }, // G4
    { freq: 349.23, dur: 0.4 }, // F4
    { freq: 349.23, dur: 0.4 }, // F4
    { freq: 329.63, dur: 0.4 }, // E4
    { freq: 329.63, dur: 0.4 }, // E4
    { freq: 293.66, dur: 0.4 }, // D4
    { freq: 293.66, dur: 0.4 }, // D4
    { freq: 261.63, dur: 0.8 }, // C4
  ];

  function playMusicBoxBell(freq, duration) {
    if (!audioCtx || !isPlaying) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    // Timbre tipo caixa de música (sinusoidal puro com envelope metálico rápido)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration * 1.2);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration * 1.2);
  }

  function stepLullaby() {
    if (!isPlaying) return;
    const note = lullabyNotes[noteIndex];
    playMusicBoxBell(note.freq, note.dur);
    noteIndex = (noteIndex + 1) % lullabyNotes.length;
    melodyTimer = setTimeout(stepLullaby, note.dur * 1000 * 1.15);
  }

  function toggleMusic() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (isPlaying) {
      isPlaying = false;
      clearTimeout(melodyTimer);
      musicBtn.classList.remove('playing');
      musicIcon.textContent = '🧸';
      musicText.textContent = 'Melodia';
    } else {
      isPlaying = true;
      musicBtn.classList.add('playing');
      musicIcon.textContent = '🎶';
      musicText.textContent = 'Tocando';
      stepLullaby();
    }
  }

  function startMelodyOnce() {
    if (!isPlaying && !audioCtx) {
      toggleMusic();
    }
  }

  if (musicBtn) {
    musicBtn.addEventListener('click', toggleMusic);
  }

  // --- 4. Enquete Interativa com Gráfico em Tempo Real ---
  let boyVotes = 26;
  let girlVotes = 24;
  let hasVoted = false;

  function updatePollUI() {
    const total = boyVotes + girlVotes;
    const boyPct = Math.round((boyVotes / total) * 100);
    const girlPct = 100 - boyPct;

    if (boyPercentEl) boyPercentEl.textContent = `${boyPct}%`;
    if (girlPercentEl) girlPercentEl.textContent = `${girlPct}%`;
    if (boyVotesEl) boyVotesEl.textContent = `(${boyVotes} votos)`;
    if (girlVotesEl) girlVotesEl.textContent = `(${girlVotes} votos)`;

    if (barBoyFill) barBoyFill.style.width = `${boyPct}%`;
    if (barGirlFill) barGirlFill.style.width = `${girlPct}%`;
  }

  function handleVote(choice) {
    if (hasVoted) return;
    hasVoted = true;

    if (choice === 'boy') {
      boyVotes += 1;
      burstConfetti('boy', 70);
      if (votedChoiceText) {
        votedChoiceText.textContent = 'Você votou no Time Theo 👦! Palpite registrado e sincronizado com a Planilha!';
      }
    } else {
      girlVotes += 1;
      burstConfetti('girl', 70);
      if (votedChoiceText) {
        votedChoiceText.textContent = 'Você votou no Time Lívia 👧! Palpite registrado e sincronizado com a Planilha!';
      }
    }

    updatePollUI();

    if (voteControls) {
      voteControls.style.opacity = '0.6';
      voteControls.style.pointerEvents = 'none';
    }

    if (voteSuccessBanner) {
      voteSuccessBanner.classList.remove('hidden');
    }
  }

  if (btnVoteBoy) {
    btnVoteBoy.addEventListener('click', () => handleVote('boy'));
  }
  if (btnVoteGirl) {
    btnVoteGirl.addEventListener('click', () => handleVote('girl'));
  }

  // --- 5. Contagem Regressiva para 18/10/2026 às 15:00 ---
  const targetDate = new Date('2026-10-18T15:00:00-03:00').getTime();

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
      const guestCount = document.getElementById('guestCount').value;
      const guestGuess = document.getElementById('guestGuess').value;
      const presence = document.querySelector('input[name="presence"]:checked').value;

      const isYes = presence === 'sim';
      let message = `🍼 *Confirmação de Presença - Chá Revelação Juliana & Rafael*\n\n`;
      message += `👤 *Nome / Família:* ${guestName}\n`;
      message += `👥 *Total de Convidados:* ${guestCount}\n`;
      message += `🔮 *Palpite Oficial:* ${guestGuess}\n`;
      message += isYes 
        ? `🎉 *Presença:* Confirmadíssima! Mal posso esperar para descobrir se é Theo ou Lívia!` 
        : `💌 *Presença:* Infelizmente não poderei ir, mas estarei torcendo por vocês e pelo bebê!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (rsvpFeedback) {
        rsvpFeedback.classList.remove('hidden');
      }

      window.open(waUrl, '_blank');
    });
  }

});
