// ========================================================
// CONVITE VIRTUAL INTERATIVO - CARTÃO DE EMBARQUE & PASSAPORTE
// Printfoco - Destination Wedding Larissa & Bruno
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  const passGate = document.getElementById('passGate');
  const btnCheckin = document.getElementById('btnCheckin');
  const customsStamp = document.getElementById('customsStamp');
  const passStatus = document.getElementById('passStatus');
  const inviteContent = document.getElementById('inviteContent');
  const stampSoundBtn = document.getElementById('stampSoundBtn');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const rsvpForm = document.getElementById('rsvpForm');
  const travelFeedback = document.getElementById('travelFeedback');

  // --- 1. Efeito de Check-in e Carimbo no Bilhete ---
  let audioCtx = null;
  function ensureAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Som suave de sino de bordo / aviso de voo (dois tons clássicos Ding-Dong)
  function playCabinChime() {
    ensureAudioCtx();
    if (!audioCtx) return;

    const notes = [
      { freq: 659.25, time: 0 },    // E5
      { freq: 523.25, time: 0.35 }  // C5
    ];

    notes.forEach(n => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.freq, audioCtx.currentTime + n.time);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime + n.time);
      gain.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + n.time + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + n.time + 0.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + n.time);
      osc.stop(audioCtx.currentTime + n.time + 0.8);
    });
  }

  if (stampSoundBtn) {
    stampSoundBtn.addEventListener('click', playCabinChime);
  }

  function handleCheckin() {
    playCabinChime();

    // Carimbar o bilhete
    if (customsStamp) {
      customsStamp.classList.remove('hidden');
    }
    if (passStatus) {
      passStatus.textContent = 'CHECK-IN CONFIRMADO ✓';
      passStatus.classList.remove('status-pending');
      passStatus.classList.add('status-confirmed');
    }

    setTimeout(() => {
      passGate.style.opacity = '0';
      passGate.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        passGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
    }, 900);
  }

  if (btnCheckin) btnCheckin.addEventListener('click', handleCheckin);

  // --- 2. Canvas de Nuvens Flutuantes ---
  const canvas = document.getElementById('flightCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const clouds = [];
  for (let i = 0; i < 15; i++) {
    clouds.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 40 + 20,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.15 + 0.05
    });
  }

  function animateFlight() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';

    clouds.forEach(c => {
      ctx.beginPath();
      ctx.globalAlpha = c.opacity;
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
      ctx.arc(c.x + c.radius * 0.5, c.y - c.radius * 0.2, c.radius * 0.8, 0, Math.PI * 2);
      ctx.arc(c.x - c.radius * 0.5, c.y - c.radius * 0.1, c.radius * 0.7, 0, Math.PI * 2);
      ctx.fill();

      c.x += c.speed;
      if (c.x - c.radius * 2 > canvas.width) {
        c.x = -c.radius * 2;
        c.y = Math.random() * canvas.height;
      }
    });

    requestAnimationFrame(animateFlight);
  }
  animateFlight();

  // --- 3. Contagem Regressiva para 21/11/2026 às 16:30 ---
  const targetDate = new Date('2026-11-21T16:30:00-03:00').getTime();

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

  // --- 4. Formulário RSVP via WhatsApp ---
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const passengerName = document.getElementById('passengerName').value.trim();
      const seatsCount = document.getElementById('seatsCount').value;
      const travelStatus = document.querySelector('input[name="travel_status"]:checked').value;

      const isYes = travelStatus === 'sim';
      let message = `✈️ *Check-in de Voo - Destination Wedding Larissa & Bruno*\n\n`;
      message += `👤 *Passageiro(a):* ${passengerName}\n`;
      message += `🎟️ *Total de Assentos:* ${seatsCount}\n`;
      message += isYes 
        ? `🏖️ *Status:* Check-in Realizado! Estaremos a bordo para celebrar com vocês em Ilhabela!` 
        : `💌 *Status:* Infelizmente não poderemos decolar nessa data, mas desejamos uma linda celebração!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (travelFeedback) {
        travelFeedback.classList.remove('hidden');
      }

      window.open(waUrl, '_blank');
    });
  }

});
