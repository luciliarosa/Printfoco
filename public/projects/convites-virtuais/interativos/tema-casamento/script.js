// ============================================
// CONVITE VIRTUAL INTERATIVO - CASAMENTO RÚSTICO CHIC
// Printfoco - Beatriz & Gabriel
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Elementos DOM ---
  const envelopeGate = document.getElementById('envelopeGate');
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const openInviteBtn = document.getElementById('openInviteBtn');
  const inviteContent = document.getElementById('inviteContent');
  
  const togglePetalsBtn = document.getElementById('togglePetalsBtn');
  const musicBtn = document.getElementById('musicBtn');
  const musicIcon = document.getElementById('musicIcon');
  const musicText = document.getElementById('musicText');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpSuccess = document.getElementById('rsvpSuccess');
  const copyPixBtn = document.getElementById('copyPixBtn');
  const copyPixText = document.getElementById('copyPixText');
  const pixKeyText = document.getElementById('pixKeyText');

  // --- 1. Abertura do Envelope ---
  function openInvite() {
    envelopeWrapper.classList.add('open');
    setTimeout(() => {
      envelopeGate.style.opacity = '0';
      envelopeGate.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        envelopeGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Iniciar melodia automaticamente se permitido pelo navegador
        startMelodyOnce();
      }, 400);
    }, 600);
  }

  if (envelopeWrapper) envelopeWrapper.addEventListener('click', openInvite);
  if (openInviteBtn) openInviteBtn.addEventListener('click', openInvite);

  // --- 2. Canvas de Efeito: Pétalas de Rosas e Brilhos Dourados ---
  const canvas = document.getElementById('weddingCanvas');
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particlesEnabled = true;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const particles = [];
  const PARTICLE_COUNT = 32;

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : -20;
      this.size = Math.random() * 8 + 4;
      this.speedY = Math.random() * 0.8 + 0.4;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.5;
      this.angle = Math.random() * Math.PI * 2;
      this.spin = (Math.random() - 0.5) * 0.02;
      this.opacity = Math.random() * 0.5 + 0.3;
      // 70% pétala (tom rosa/marfim/ouro), 30% brilho estrela
      this.type = Math.random() > 0.3 ? 'petal' : 'sparkle';
      this.color = this.type === 'petal' 
        ? (Math.random() > 0.5 ? 'rgba(218, 172, 140,' : 'rgba(224, 196, 178,')
        : 'rgba(212, 175, 55,';
    }
    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.angle) * 0.4 + this.speedX;
      this.angle += this.spin;
      if (this.y > canvas.height + 20) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      if (this.type === 'petal') {
        ctx.fillStyle = `${this.color} ${this.opacity})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = `${this.color} ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (particlesEnabled) {
      particles.forEach(p => {
        p.update();
        p.draw();
      });
    }
    animationFrameId = requestAnimationFrame(animateParticles);
  }
  animateParticles();

  if (togglePetalsBtn) {
    togglePetalsBtn.addEventListener('click', () => {
      particlesEnabled = !particlesEnabled;
      togglePetalsBtn.classList.toggle('active', particlesEnabled);
      if (!particlesEnabled) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  }

  // --- 3. Melodia Romântica Acústica (Canon in D / Pachelbel) via Web Audio API ---
  let audioCtx = null;
  let isPlaying = false;
  let melodyTimer = null;
  let noteIndex = 0;

  // Pachelbel Canon arpeggio frequencies (D, A, Bm, F#m, G, D, G, A)
  const canonMelody = [
    { freq: 293.66, dur: 0.6 }, // D4
    { freq: 369.99, dur: 0.3 }, // F#4
    { freq: 440.00, dur: 0.3 }, // A4
    { freq: 587.33, dur: 0.6 }, // D5
    { freq: 220.00, dur: 0.6 }, // A3
    { freq: 277.18, dur: 0.3 }, // C#4
    { freq: 329.63, dur: 0.3 }, // E4
    { freq: 440.00, dur: 0.6 }, // A4
    { freq: 246.94, dur: 0.6 }, // B3
    { freq: 293.66, dur: 0.3 }, // D4
    { freq: 369.99, dur: 0.3 }, // F#4
    { freq: 493.88, dur: 0.6 }, // B4
    { freq: 185.00, dur: 0.6 }, // F#3
    { freq: 220.00, dur: 0.3 }, // A3
    { freq: 277.18, dur: 0.3 }, // C#4
    { freq: 369.99, dur: 0.6 }, // F#4
    { freq: 196.00, dur: 0.6 }, // G3
    { freq: 246.94, dur: 0.3 }, // B3
    { freq: 293.66, dur: 0.3 }, // D4
    { freq: 392.00, dur: 0.6 }, // G4
    { freq: 293.66, dur: 0.6 }, // D4
    { freq: 369.99, dur: 0.3 }, // F#4
    { freq: 440.00, dur: 0.3 }, // A4
    { freq: 587.33, dur: 0.6 }, // D5
    { freq: 196.00, dur: 0.6 }, // G3
    { freq: 246.94, dur: 0.3 }, // B3
    { freq: 293.66, dur: 0.3 }, // D4
    { freq: 392.00, dur: 0.6 }, // G4
    { freq: 220.00, dur: 0.6 }, // A3
    { freq: 277.18, dur: 0.3 }, // C#4
    { freq: 329.63, dur: 0.3 }, // E4
    { freq: 440.00, dur: 0.6 }, // A4
  ];

  function playNote(freq, duration) {
    if (!audioCtx || !isPlaying) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // Timbre suave e aveludado estilo harpa/violino
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    // Envelope suave
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  }

  function stepMelody() {
    if (!isPlaying) return;
    const note = canonMelody[noteIndex];
    playNote(note.freq, note.dur);
    noteIndex = (noteIndex + 1) % canonMelody.length;
    melodyTimer = setTimeout(stepMelody, note.dur * 1000 * 0.9);
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
      musicIcon.textContent = '🎻';
      musicText.textContent = 'Melodia';
    } else {
      isPlaying = true;
      musicBtn.classList.add('playing');
      musicIcon.textContent = '🎵';
      musicText.textContent = 'Tocando';
      stepMelody();
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

  // --- 4. Contagem Regressiva para 14/11/2026 às 17:00 ---
  const targetDate = new Date('2026-11-14T17:00:00-03:00').getTime();

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

  // --- 5. Formulário RSVP via WhatsApp ---
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guestName').value.trim();
      const adultsCount = document.getElementById('adultsCount').value;
      const attending = document.querySelector('input[name="attending"]:checked').value;

      const isYes = attending === 'sim';
      let message = `💍 *Confirmação de Presença - Casamento Beatriz & Gabriel*\n\n`;
      message += `👤 *Nome(s):* ${guestName}\n`;
      message += `👥 *Total de pessoas:* ${adultsCount}\n`;
      message += isYes 
        ? `✨ *Status:* Sim! Estaremos presentes para celebrar esse grande dia!\n🥂 Parabéns aos noivos!` 
        : `💌 *Status:* Infelizmente não poderemos comparecer, mas desejamos toda a felicidade do mundo aos noivos!`;

      const encodedMsg = encodeURIComponent(message);
      // Número da central Printfoco / Noivos fictício
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (rsvpSuccess) {
        rsvpSuccess.classList.remove('hidden');
      }

      window.open(waUrl, '_blank');
    });
  }

  // --- 6. Copiar Chave Pix ---
  if (copyPixBtn && pixKeyText) {
    copyPixBtn.addEventListener('click', () => {
      const key = pixKeyText.textContent.trim();
      navigator.clipboard.writeText(key).then(() => {
        copyPixText.textContent = 'Chave Copiada! ✓';
        copyPixBtn.classList.add('copied');
        setTimeout(() => {
          copyPixText.textContent = 'Copiar Pix';
          copyPixBtn.classList.remove('copied');
        }, 3000);
      }).catch(() => {
        // Fallback para seleção manual
        prompt('Copie a chave Pix abaixo:', key);
      });
    });
  }

});
