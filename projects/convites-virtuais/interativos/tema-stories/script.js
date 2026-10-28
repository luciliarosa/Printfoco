// ========================================================
// CONVITE VIRTUAL INTERATIVO - STORIES EM TELA CHEIA
// Printfoco - Luiza 18 Anos
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  const TOTAL_SLIDES = 4;
  let currentSlide = 0;
  let isPaused = false;
  let slideTimer = null;
  let progress = 0;
  const SLIDE_DURATION = 6000; // 6 segundos por story

  const touchLeft = document.getElementById('touchLeft');
  const touchRight = document.getElementById('touchRight');
  const pauseToggleBtn = document.getElementById('pauseToggleBtn');
  const musicToggleBtn = document.getElementById('musicToggleBtn');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');

  const btnPollYes = document.getElementById('btnPollYes');
  const btnPollNo = document.getElementById('btnPollNo');
  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpDone = document.getElementById('rsvpDone');

  // --- 1. Troca de Slides & Barra de Progresso ---
  function updateSlides() {
    for (let i = 0; i < TOTAL_SLIDES; i++) {
      const slide = document.getElementById(`slide-${i}`);
      const fill = document.getElementById(`fill-${i}`);
      if (slide) {
        slide.classList.toggle('active', i === currentSlide);
      }
      if (fill) {
        if (i < currentSlide) {
          fill.style.width = '100%';
        } else if (i > currentSlide) {
          fill.style.width = '0%';
        }
      }
    }
    progress = 0;
  }

  function nextSlide() {
    if (currentSlide < TOTAL_SLIDES - 1) {
      currentSlide++;
      updateSlides();
    } else {
      // No último story, pausa o timer automático
      isPaused = true;
      if (pauseToggleBtn) pauseToggleBtn.textContent = '▶️';
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlides();
    }
  }

  // Timer de Avanço Automático do Story
  function startStoryTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
      if (!isPaused) {
        progress += (100 / (SLIDE_DURATION / 100));
        const activeFill = document.getElementById(`fill-${currentSlide}`);
        if (activeFill) {
          activeFill.style.width = `${Math.min(100, progress)}%`;
        }

        if (progress >= 100) {
          nextSlide();
        }
      }
    }, 100);
  }
  startStoryTimer();

  // Controles de toque
  if (touchRight) touchRight.addEventListener('click', nextSlide);
  if (touchLeft) touchLeft.addEventListener('click', prevSlide);

  if (pauseToggleBtn) {
    pauseToggleBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseToggleBtn.textContent = isPaused ? '▶️' : '⏸️';
    });
  }

  // --- 2. Áudio Lo-Fi Pop Synth ---
  let audioCtx = null;
  let isPlaying = false;
  let musicTimer = null;
  let noteIndex = 0;

  const loFiNotes = [329.63, 392, 440, 523.25, 440, 392]; // E4, G4, A4, C5

  function playLoFiChime() {
    if (!audioCtx || !isPlaying) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(loFiNotes[noteIndex], audioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);

    noteIndex = (noteIndex + 1) % loFiNotes.length;
    musicTimer = setTimeout(playLoFiChime, 700);
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
      clearTimeout(musicTimer);
      musicToggleBtn.textContent = '🔇';
    } else {
      isPlaying = true;
      musicToggleBtn.textContent = '🎵';
      playLoFiChime();
    }
  }

  if (musicToggleBtn) musicToggleBtn.addEventListener('click', toggleMusic);

  // --- 3. Contagem Regressiva para 19/12/2026 às 21:00 ---
  const targetDate = new Date('2026-12-19T21:00:00-03:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60)) / (1000 * 60));

    if (daysEl) daysEl.textContent = d < 10 ? `0${d}` : d;
    if (hoursEl) hoursEl.textContent = h < 10 ? `0${h}` : h;
    if (minutesEl) minutesEl.textContent = m < 10 ? `0${m}` : m;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // --- 4. Enquete & RSVP WhatsApp ---
  let voted = false;
  function handlePoll(isYes) {
    if (voted) return;
    voted = true;
    if (btnPollYes) btnPollYes.style.background = isYes ? '#dcfce7' : '#f4f4f5';
    if (btnPollNo) btnPollNo.style.background = !isYes ? '#fee2e2' : '#f4f4f5';
  }

  if (btnPollYes) btnPollYes.addEventListener('click', () => handlePoll(true));
  if (btnPollNo) btnPollNo.addEventListener('click', () => handlePoll(false));

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guestName').value.trim();

      let message = `📱 *Confirmação via Story - Luiza 18 Anos*\n\n`;
      message += `👤 *Nome:* ${guestName}\n`;
      message += `✨ *Status:* Presença confirmada! Vi o story e estarei lá para comemorar seus 18 anos!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (rsvpDone) rsvpDone.classList.remove('hidden');
      window.open(waUrl, '_blank');
    });
  }

});
