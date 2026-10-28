// ========================================================
// CONVITE VIRTUAL INTERATIVO - INGRESSO VIP DE FESTIVAL
// Printfoco - Yasmin 15 Anos VIP Festival
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  const flipCard = document.getElementById('flipCard');
  const flipInner = document.getElementById('flipInner');
  const btnClaimWristband = document.getElementById('btnClaimWristband');
  const ticketGate = document.getElementById('ticketGate');
  const inviteContent = document.getElementById('inviteContent');

  const laserBtn = document.getElementById('laserBtn');
  const beatBtn = document.getElementById('beatBtn');
  const beatIcon = document.getElementById('beatIcon');
  const beatText = document.getElementById('beatText');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const rsvpForm = document.getElementById('rsvpForm');
  const vipFeedback = document.getElementById('vipFeedback');

  // --- 1. Giro 3D do Ingresso (Flip) ---
  let isFlipped = false;
  if (flipCard && flipInner) {
    flipCard.addEventListener('click', (e) => {
      // Se não clicou no botão de claim
      if (!e.target.closest('#btnClaimWristband')) {
        isFlipped = !isFlipped;
        flipInner.classList.toggle('flipped', isFlipped);
      }
    });
  }

  // --- 2. Resgatar Pulseira VIP & Abrir ---
  function openFestival() {
    playLaserSound();

    setTimeout(() => {
      ticketGate.style.opacity = '0';
      ticketGate.style.transform = 'scale(0.95)';
      setTimeout(() => {
        ticketGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        startBeatOnce();
      }, 400);
    }, 400);
  }

  if (btnClaimWristband) btnClaimWristband.addEventListener('click', openFestival);

  // --- 3. Canvas de Lasers & Luzes Neon ---
  const canvas = document.getElementById('neonCanvas');
  const ctx = canvas.getContext('2d');
  let lasersActive = true;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const lasers = [];
  const LASER_COLORS = ['#a855f7', '#06b6d4', '#ec4899', '#3b82f6'];

  class LaserBeam {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.targetX = Math.random() * canvas.width;
      this.targetY = Math.random() * canvas.height;
      this.color = LASER_COLORS[Math.floor(Math.random() * LASER_COLORS.length)];
      this.alpha = Math.random() * 0.4 + 0.2;
      this.width = Math.random() * 2 + 1;
    }
  }

  for (let i = 0; i < 6; i++) {
    lasers.push(new LaserBeam());
  }

  function drawLasers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (lasersActive) {
      lasers.forEach(l => {
        ctx.save();
        ctx.strokeStyle = l.color;
        ctx.globalAlpha = l.alpha;
        ctx.lineWidth = l.width;
        ctx.shadowBlur = 15;
        ctx.shadowColor = l.color;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, -10);
        ctx.lineTo(l.targetX, l.targetY);
        ctx.stroke();
        ctx.restore();

        l.targetX += (Math.random() - 0.5) * 6;
        if (Math.random() > 0.98) {
          l.reset();
        }
      });
    }

    requestAnimationFrame(drawLasers);
  }
  drawLasers();

  if (laserBtn) {
    laserBtn.addEventListener('click', () => {
      lasersActive = !lasersActive;
      laserBtn.classList.toggle('active', lasersActive);
    });
  }

  // --- 4. Web Audio Beat Eletrônico ---
  let audioCtx = null;
  let isPlaying = false;
  let beatTimer = null;
  let step = 0;

  function ensureAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playLaserSound() {
    ensureAudioCtx();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  }

  // Beat de House / Balada (Kick em 4/4 e Synth Pluck)
  const synthNotes = [220, 261.63, 293.66, 329.63, 392];

  function playBeatStep() {
    if (!audioCtx || !isPlaying) return;

    // Kick no tempo 0 e 2
    if (step % 2 === 0) {
      const kickOsc = audioCtx.createOscillator();
      const kickGain = audioCtx.createGain();
      kickOsc.frequency.setValueAtTime(150, audioCtx.currentTime);
      kickOsc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.15);

      kickGain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      kickGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);

      kickOsc.connect(kickGain);
      kickGain.connect(audioCtx.destination);
      kickOsc.start();
      kickOsc.stop(audioCtx.currentTime + 0.15);
    }

    // Synth Pluck melódico
    const note = synthNotes[step % synthNotes.length];
    const synthOsc = audioCtx.createOscillator();
    const synthGain = audioCtx.createGain();
    synthOsc.type = 'sawtooth';
    synthOsc.frequency.setValueAtTime(note, audioCtx.currentTime);

    synthGain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    synthGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

    synthOsc.connect(synthGain);
    synthGain.connect(audioCtx.destination);
    synthOsc.start();
    synthOsc.stop(audioCtx.currentTime + 0.2);

    step = (step + 1) % 8;
    beatTimer = setTimeout(playBeatStep, 250); // 120 BPM
  }

  function toggleBeat() {
    ensureAudioCtx();

    if (isPlaying) {
      isPlaying = false;
      clearTimeout(beatTimer);
      beatBtn.classList.remove('active');
      beatIcon.textContent = '🎧';
      beatText.textContent = 'Beat DJ';
    } else {
      isPlaying = true;
      beatBtn.classList.add('active');
      beatIcon.textContent = '🔊';
      beatText.textContent = 'Tocando';
      playBeatStep();
    }
  }

  function startBeatOnce() {
    if (!isPlaying && !audioCtx) {
      toggleBeat();
    }
  }

  if (beatBtn) beatBtn.addEventListener('click', toggleBeat);

  // --- 5. Contagem Regressiva para 28/11/2026 às 21:00 ---
  const targetDate = new Date('2026-11-28T21:00:00-03:00').getTime();

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
      const presence = document.querySelector('input[name="presence"]:checked').value;

      const isYes = presence === 'sim';
      let message = `🎟️ *Pulseira VIP Confirmada - Yasmin 15 Anos Festival*\n\n`;
      message += `👤 *Nome:* ${guestName}\n`;
      message += `👥 *Total de Acessos VIP:* ${guestCount}\n`;
      message += isYes 
        ? `🔥 *Presença:* Confirmadíssima na pista! Já estou preparando o look para comemorar!` 
        : `💌 *Presença:* Yasmin, infelizmente não poderei ir nessa, mas desejo uma festa incrível!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (vipFeedback) {
        vipFeedback.classList.remove('hidden');
      }

      window.open(waUrl, '_blank');
    });
  }

});
