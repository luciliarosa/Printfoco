// ========================================================
// CONVITE VIRTUAL INTERATIVO - CLAQUETE DE CINEMA & PREMIERE
// Printfoco - Arthur Faz 7 Anos
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  const clapperboard = document.getElementById('clapperboard');
  const clapperArm = document.getElementById('clapperArm');
  const btnActionStart = document.getElementById('btnActionStart');
  const cinemaGate = document.getElementById('cinemaGate');
  const inviteContent = document.getElementById('inviteContent');
  const clackBtn = document.getElementById('clackBtn');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const rsvpForm = document.getElementById('rsvpForm');
  const cinemaFeedback = document.getElementById('cinemaFeedback');

  // --- 1. Som e Batida da Claquete ---
  let audioCtx = null;
  function ensureAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Estalo realista de madeira de claquete
  function playClackSound() {
    ensureAudioCtx();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  }

  function snapClapper() {
    playClackSound();
    if (clapperArm) {
      clapperArm.classList.add('snapped');
      setTimeout(() => clapperArm.classList.remove('snapped'), 250);
    }
  }

  if (clackBtn) clackBtn.addEventListener('click', snapClapper);

  function openMovie() {
    snapClapper();

    setTimeout(() => {
      cinemaGate.style.opacity = '0';
      cinemaGate.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        cinemaGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
    }, 450);
  }

  if (clapperboard) clapperboard.addEventListener('click', openMovie);
  if (btnActionStart) btnActionStart.addEventListener('click', openMovie);

  // --- 2. Contagem Regressiva para 10/10/2026 às 15:30 ---
  const targetDate = new Date('2026-10-10T15:30:00-03:00').getTime();

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

  // --- 3. Formulário RSVP via WhatsApp ---
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guestName').value.trim();
      const ticketCount = document.getElementById('ticketCount').value;
      const presence = document.querySelector('input[name="presence"]:checked').value;

      const isYes = presence === 'sim';
      let message = `🎬 *Reserva de Poltrona - Arthur Faz 7 (Sessão de Cinema)*\n\n`;
      message += `👤 *Nome(s):* ${guestName}\n`;
      message += `🎟️ *Poltronas:* ${ticketCount}\n`;
      message += isYes 
        ? `🍿 *Status:* Presença confirmadíssima! Preparem nossa pipoca que estaremos lá na pré-estreia!` 
        : `💌 *Status:* Arthur meu querido, infelizmente não poderemos ir na sessão, mas desejamos um feliz aniversário com muita diversão!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (cinemaFeedback) {
        cinemaFeedback.classList.remove('hidden');
      }

      window.open(waUrl, '_blank');
    });
  }

});
