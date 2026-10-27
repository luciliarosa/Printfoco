/**
 * CONVITE INTERATIVO - 1º ANINHO THEO • DINO PARK
 * Web Audio API, Canvas Jungle Leaves & RSVP • Printfoco
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     1. SISTEMA DE ÁUDIO SINTETIZADO (Web Audio API)
     Melodia Safari Alegre & Sons de Dinos Amigáveis
     ========================================================== */
  class DinoAudio {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.timer = null;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freq, type = 'sine', duration = 0.3, gainValue = 0.12) {
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(gainValue, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.warn('Audio error', e);
      }
    }

    playRoar(type) {
      this.init();
      if (type === 'trex') {
        // T-Rex Baby roar: pitch sweep down
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.4);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.4);
      } else if (type === 'bronto') {
        // Long friendly whistle
        this.playTone(392, 'triangle', 0.5, 0.12);
        setTimeout(() => this.playTone(523.25, 'triangle', 0.4, 0.1), 120);
      } else {
        // Chirp
        this.playTone(659.25, 'sine', 0.2, 0.12);
        setTimeout(() => this.playTone(880, 'sine', 0.25, 0.12), 100);
      }
    }

    playOpenSound() {
      this.init();
      const notes = [349.23, 440.00, 523.25, 698.46]; // F, A, C, F
      notes.forEach((n, idx) => {
        setTimeout(() => {
          this.playTone(n, 'triangle', 0.4, 0.12);
        }, idx * 100);
      });
    }

    toggleMelody() {
      this.init();
      if (this.isPlaying) {
        this.stopMelody();
        return false;
      }

      this.isPlaying = true;

      // Trilha Safari Alegre (Marimba estilo Rei Leão / Aventura Tropical)
      const safariTheme = [
        { note: 261.63, dur: 0.2, gap: 240 }, // C
        { note: 329.63, dur: 0.2, gap: 240 }, // E
        { note: 392.00, dur: 0.25, gap: 300 }, // G
        { note: 440.00, dur: 0.2, gap: 240 }, // A
        { note: 392.00, dur: 0.35, gap: 400 }, // G
        { note: 329.63, dur: 0.2, gap: 240 }, // E
        { note: 293.66, dur: 0.2, gap: 240 }, // D
        { note: 261.63, dur: 0.4, gap: 480 }, // C
        { note: 392.00, dur: 0.2, gap: 240 }, // G
        { note: 440.00, dur: 0.2, gap: 240 }, // A
        { note: 523.25, dur: 0.35, gap: 420 }, // C5
        { note: 440.00, dur: 0.2, gap: 240 }, // A
        { note: 392.00, dur: 0.5, gap: 600 }  // G
      ];

      let noteIdx = 0;
      const playStep = () => {
        if (!this.isPlaying) return;
        const cur = safariTheme[noteIdx];
        this.playTone(cur.note, 'triangle', cur.dur, 0.12);
        noteIdx = (noteIdx + 1) % safariTheme.length;
        this.timer = setTimeout(playStep, cur.gap);
      };

      playStep();
      return true;
    }

    stopMelody() {
      this.isPlaying = false;
      if (this.timer) clearTimeout(this.timer);
    }
  }

  const dinoAudio = new DinoAudio();
  const musicBtn = document.getElementById('musicBtn');
  const musicText = document.getElementById('musicText');

  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      const playing = dinoAudio.toggleMelody();
      musicText.textContent = playing ? 'Pausar' : 'Safari';
      musicBtn.classList.toggle('playing', playing);
    });
  }

  /* ==========================================================
     2. CANVAS DE FOLHAS TROPICAIS & PEGADAS
     ========================================================== */
  const canvas = document.getElementById('dinoCanvas');
  const ctx = canvas.getContext('2d');
  let animationFrameId = null;
  let leavesEnabled = true;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const leaves = [];
  const leafColors = ['#528c62', '#2d5a3a', '#c26743', '#79aa86', '#b7d4be'];

  for (let i = 0; i < 35; i++) {
    leaves.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3.5 + 2,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      alpha: Math.random() * 0.7 + 0.3,
      dy: Math.random() * 0.9 + 0.4,
      dx: Math.sin(Math.random() * Math.PI) * 0.8,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.04
    });
  }

  function drawLeaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!leavesEnabled) return;

    leaves.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.beginPath();
      // Desenha formato oval de folhinha
      ctx.ellipse(0, 0, p.radius * 2, p.radius, 0, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.restore();

      p.y += p.dy;
      p.x += p.dx;
      p.rotation += p.rotationSpeed;

      if (p.y > canvas.height + 15) {
        p.y = -15;
        p.x = Math.random() * canvas.width;
      }
    });

    animationFrameId = requestAnimationFrame(drawLeaves);
  }
  drawLeaves();

  const toggleLeavesBtn = document.getElementById('toggleLeavesBtn');
  if (toggleLeavesBtn) {
    toggleLeavesBtn.addEventListener('click', () => {
      leavesEnabled = !leavesEnabled;
      toggleLeavesBtn.style.opacity = leavesEnabled ? '1' : '0.5';
      if (leavesEnabled && !animationFrameId) {
        drawLeaves();
      }
    });
  }

  /* ==========================================================
     3. ABERTURA DO PASSAPORTE JURÁSSICO
     ========================================================== */
  const envelopeGate = document.getElementById('envelopeGate');
  const inviteContent = document.getElementById('inviteContent');
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const openInviteBtn = document.getElementById('openInviteBtn');

  function openEnvelope() {
    dinoAudio.playOpenSound();
    envelopeGate.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    envelopeGate.style.opacity = '0';
    envelopeGate.style.transform = 'scale(0.95)';

    setTimeout(() => {
      envelopeGate.classList.add('hidden');
      inviteContent.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  }

  if (envelopeWrapper) envelopeWrapper.addEventListener('click', openEnvelope);
  if (openInviteBtn) openInviteBtn.addEventListener('click', openEnvelope);

  /* ==========================================================
     4. RECURSO INTERATIVO: SONS DE DINOS
     ========================================================== */
  const dinoButtons = document.querySelectorAll('.btn-dino-sound');
  const dinoFeedback = document.getElementById('dinoFeedback');

  dinoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const dinoType = btn.getAttribute('data-dino');
      dinoAudio.playRoar(dinoType);
      
      btn.style.transform = 'scale(1.15) rotate(-3deg)';
      setTimeout(() => { btn.style.transform = ''; }, 250);

      if (dinoFeedback) {
        dinoFeedback.classList.remove('hidden');
        if (dinoType === 'trex') {
          dinoFeedback.innerText = "🦖 O pequeno T-Rex rugiu: ROAAR! Bem-vindo à expedição!";
        } else if (dinoType === 'bronto') {
          dinoFeedback.innerText = "🦕 O Braquiossauro cumprimentou com a cauda lá no alto!";
        } else {
          dinoFeedback.innerText = "🦏 O Triceratops deu pulinhos de alegria!";
        }
      }
    });
  });

  /* ==========================================================
     5. CONTAGEM REGRESSIVA
     ========================================================== */
  const targetDate = new Date("2026-11-12T15:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById('days').innerText = "00";
      document.getElementById('hours').innerText = "00";
      document.getElementById('minutes').innerText = "00";
      document.getElementById('seconds').innerText = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    const dEl = document.getElementById('days');
    const hEl = document.getElementById('hours');
    const mEl = document.getElementById('minutes');
    const sEl = document.getElementById('seconds');

    if (dEl) dEl.innerText = pad(days);
    if (hEl) hEl.innerText = pad(hours);
    if (mEl) mEl.innerText = pad(minutes);
    if (sEl) sEl.innerText = pad(seconds);
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  /* ==========================================================
     6. FORMULÁRIO RSVP VIA WHATSAPP
     ========================================================== */
  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpSuccess = document.getElementById('rsvpSuccess');

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guestName').value.trim();
      const explorersCount = document.getElementById('explorersCount').value;
      const attending = document.querySelector('input[name="attending"]:checked').value;

      const isAttending = attending === 'sim';
      let message = `🦖 *CONFIRMAÇÃO DINO PARK - 1º ANO DO THEO*\n\n`;
      message += `*Família Exploradora:* ${guestName}\n`;
      message += `*Presença:* ${isAttending ? 'SIM, ESTAREMOS NA EXPEDIÇÃO!' : 'Infelizmente não poderemos participar'}\n`;
      if (isAttending) {
        message += `*Total de Exploradores:* ${explorersCount}\n`;
      }
      message += `\nEnviado pelo Convite Virtual Interativo Printfoco 🌿`;

      const whatsappPhone = "5511975855682";
      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

      rsvpSuccess.classList.remove('hidden');
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 400);
    });
  }

  /* ==========================================================
     7. COPIAR CHAVE PIX
     ========================================================== */
  const copyPixBtn = document.getElementById('copyPixBtn');
  const pixKeyText = document.getElementById('pixKeyText');
  const copyPixText = document.getElementById('copyPixText');

  if (copyPixBtn && pixKeyText) {
    copyPixBtn.addEventListener('click', () => {
      const key = pixKeyText.innerText.trim();
      navigator.clipboard.writeText(key).then(() => {
        copyPixText.innerText = "✓ Copiado!";
        copyPixBtn.style.background = "#2ea44f";
        setTimeout(() => {
          copyPixText.innerText = "Copiar Pix";
          copyPixBtn.style.background = "";
        }, 3000);
      }).catch(() => {
        alert("Chave Pix: " + key);
      });
    });
  }

});
