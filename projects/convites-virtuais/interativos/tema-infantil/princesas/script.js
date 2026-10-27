/**
 * CONVITE INTERATIVO - 1º ANINHO PRINCESA HELENA
 * Web Audio API, Canvas Sparkles & RSVP • Printfoco
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     1. SISTEMA DE ÁUDIO SINTETIZADO (Web Audio API)
     Melodia Real de Caixinha de Música / Valsa Encantada
     ========================================================== */
  class RoyalAudio {
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

    playTone(freq, type = 'sine', duration = 0.35, gainValue = 0.12) {
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

    playChime() {
      this.init();
      const notes = [659.25, 783.99, 987.77, 1318.51]; // E5, G5, B5, E6
      notes.forEach((n, idx) => {
        setTimeout(() => {
          this.playTone(n, 'triangle', 0.5, 0.1);
        }, idx * 90);
      });
    }

    toggleMelody() {
      this.init();
      if (this.isPlaying) {
        this.stopMelody();
        return false;
      }

      this.isPlaying = true;

      // Valsa das Princesas (Once Upon a Dream / Fairy Tale Waltz)
      const waltz = [
        { note: 523.25, dur: 0.3, gap: 320 }, // C5
        { note: 587.33, dur: 0.3, gap: 320 }, // D5
        { note: 659.25, dur: 0.5, gap: 500 }, // E5
        { note: 523.25, dur: 0.3, gap: 320 }, // C5
        { note: 783.99, dur: 0.5, gap: 550 }, // G5
        { note: 659.25, dur: 0.5, gap: 500 }, // E5
        { note: 587.33, dur: 0.3, gap: 320 }, // D5
        { note: 523.25, dur: 0.6, gap: 700 }, // C5
        { note: 659.25, dur: 0.3, gap: 320 }, // E5
        { note: 698.46, dur: 0.3, gap: 320 }, // F5
        { note: 783.99, dur: 0.6, gap: 650 }, // G5
        { note: 880.00, dur: 0.3, gap: 320 }, // A5
        { note: 783.99, dur: 0.5, gap: 500 }, // G5
        { note: 659.25, dur: 0.6, gap: 750 }  // E5
      ];

      let noteIdx = 0;
      const playStep = () => {
        if (!this.isPlaying) return;
        const cur = waltz[noteIdx];
        this.playTone(cur.note, 'triangle', cur.dur, 0.12);
        noteIdx = (noteIdx + 1) % waltz.length;
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

  const royalAudio = new RoyalAudio();
  const musicBtn = document.getElementById('musicBtn');
  const musicText = document.getElementById('musicText');

  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      const playing = royalAudio.toggleMelody();
      musicText.textContent = playing ? 'Pausar' : 'Valsa';
      musicBtn.classList.toggle('playing', playing);
    });
  }

  /* ==========================================================
     2. CANVAS DE BRILHOS & ESTRELINHAS MÁGICAS
     ========================================================== */
  const canvas = document.getElementById('magicCanvas');
  const ctx = canvas.getContext('2d');
  let animationFrameId = null;
  let sparklesEnabled = true;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const sparkles = [];
  const sparkleColors = ['#f4a8be', '#e2b36b', '#ffffff', '#e8c2cb'];

  for (let i = 0; i < 40; i++) {
    sparkles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1,
      color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
      alpha: Math.random() * 0.8 + 0.2,
      dy: Math.random() * 0.8 + 0.3,
      dx: (Math.random() - 0.5) * 0.5,
      twinkleSpeed: Math.random() * 0.03 + 0.01
    });
  }

  function drawSparkles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!sparklesEnabled) return;

    sparkles.forEach(p => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.restore();

      p.y -= p.dy;
      p.x += p.dx;
      p.alpha += Math.sin(Date.now() * p.twinkleSpeed) * 0.02;
      if (p.alpha > 1) p.alpha = 1;
      if (p.alpha < 0.2) p.alpha = 0.2;

      if (p.y < 0) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
    });

    animationFrameId = requestAnimationFrame(drawSparkles);
  }
  drawSparkles();

  const toggleSparklesBtn = document.getElementById('toggleSparklesBtn');
  if (toggleSparklesBtn) {
    toggleSparklesBtn.addEventListener('click', () => {
      sparklesEnabled = !sparklesEnabled;
      toggleSparklesBtn.style.opacity = sparklesEnabled ? '1' : '0.5';
      if (sparklesEnabled && !animationFrameId) {
        drawSparkles();
      }
    });
  }

  /* ==========================================================
     3. ABERTURA DO ENVELOPE / CONVITE REAL
     ========================================================== */
  const envelopeGate = document.getElementById('envelopeGate');
  const inviteContent = document.getElementById('inviteContent');
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const openInviteBtn = document.getElementById('openInviteBtn');

  function openEnvelope() {
    royalAudio.playChime();
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
     4. RECURSO INTERATIVO: VARINHA MÁGICA
     ========================================================== */
  const magicWandBtn = document.getElementById('magicWandBtn');
  const wandWishText = document.getElementById('wandWishText');

  if (magicWandBtn) {
    magicWandBtn.addEventListener('click', () => {
      royalAudio.playChime();
      wandWishText.classList.remove('hidden');
      
      // Efeito de estrelas extras explodindo do centro
      for (let i = 0; i < 25; i++) {
        sparkles.push({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          radius: Math.random() * 3 + 1.5,
          color: '#e0a353',
          alpha: 1,
          dy: (Math.random() - 0.5) * 4,
          dx: (Math.random() - 0.5) * 4,
          twinkleSpeed: 0.05
        });
      }
    });
  }

  /* ==========================================================
     5. CONTAGEM REGRESSIVA
     ========================================================== */
  const targetDate = new Date("2026-10-18T16:00:00").getTime();

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
      const adultsCount = document.getElementById('adultsCount').value;
      const kidsCount = document.getElementById('kidsCount').value;
      const attending = document.querySelector('input[name="attending"]:checked').value;

      const isAttending = attending === 'sim';
      let message = `👑 *CONFIRMAÇÃO 1º ANINHO DA PRINCESA HELENA*\n\n`;
      message += `*Convidado(a):* ${guestName}\n`;
      message += `*Presença:* ${isAttending ? 'SIM, ESTAREMOS LÁ!' : 'Infelizmente não poderei comparecer'}\n`;
      if (isAttending) {
        message += `*Adultos:* ${adultsCount}\n`;
        message += `*Crianças:* ${kidsCount}\n`;
      }
      message += `\nEnviado pelo Convite Virtual Interativo Printfoco ✨`;

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
