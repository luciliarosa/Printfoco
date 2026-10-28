// ========================================================
// CONVITE VIRTUAL INTERATIVO - RASPADINHA DIGITAL DA SORTE
// Printfoco - Murilo 30 Anos Secret Party
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  const scratchCanvas = document.getElementById('scratchCanvas');
  const scratchCtx = scratchCanvas.getContext('2d');
  const btnContinue = document.getElementById('btnContinue');
  const autoScratchBtn = document.getElementById('autoScratchBtn');
  const scratchGate = document.getElementById('scratchGate');
  const inviteContent = document.getElementById('inviteContent');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  const rsvpForm = document.getElementById('rsvpForm');
  const secretFeedback = document.getElementById('secretFeedback');

  let isDrawing = false;
  let isRevealed = false;

  // --- 1. Inicializar a Tinta Dourada no Canvas ---
  function initScratchFoil() {
    scratchCanvas.width = scratchCanvas.offsetWidth || 320;
    scratchCanvas.height = scratchCanvas.offsetHeight || 220;

    // Gradiente metálico dourado
    const grad = scratchCtx.createLinearGradient(0, 0, scratchCanvas.width, scratchCanvas.height);
    grad.addColorStop(0, '#facc15');
    grad.addColorStop(0.3, '#ca8a04');
    grad.addColorStop(0.7, '#eab308');
    grad.addColorStop(1, '#a16207');

    scratchCtx.fillStyle = grad;
    scratchCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);

    // Texto gravado na raspadinha
    scratchCtx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    scratchCtx.font = 'bold 15px sans-serif';
    scratchCtx.textAlign = 'center';
    scratchCtx.fillText('★ RASPE AQUI COM O DEDO ★', scratchCanvas.width / 2, scratchCanvas.height / 2 - 10);
    scratchCtx.font = '12px sans-serif';
    scratchCtx.fillText('Revele a data e o local secreto!', scratchCanvas.width / 2, scratchCanvas.height / 2 + 15);
  }
  initScratchFoil();

  // --- 2. Lógica de Raspagem com Touch e Mouse ---
  function getPosition(e) {
    const rect = scratchCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function scratch(e) {
    if (!isDrawing || isRevealed) return;
    const pos = getPosition(e);

    scratchCtx.globalCompositeOperation = 'destination-out';
    scratchCtx.beginPath();
    scratchCtx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
    scratchCtx.fill();

    createSparkle(pos.x, pos.y);
    checkScratchPercentage();
  }

  function checkScratchPercentage() {
    // Amostragem de pixels para performance
    const imgData = scratchCtx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height);
    const pixels = imgData.data;
    let transparentCount = 0;
    const totalSample = pixels.length / 16; // Pula de 4 em 4 pixels

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }

    const percentage = (transparentCount / totalSample) * 100;
    if (percentage > 40 && !isRevealed) {
      revealComplete();
    }
  }

  function revealComplete() {
    isRevealed = true;
    // Limpar o restante com fade
    scratchCtx.clearRect(0, 0, scratchCanvas.width, scratchCanvas.height);
    if (btnContinue) {
      btnContinue.classList.remove('hidden');
    }
    burstSparkles(60);
  }

  // Event Listeners de Mouse e Touch
  scratchCanvas.addEventListener('mousedown', (e) => { isDrawing = true; scratch(e); });
  window.addEventListener('mouseup', () => { isDrawing = false; });
  scratchCanvas.addEventListener('mousemove', scratch);

  scratchCanvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); }, { passive: true });
  window.addEventListener('touchend', () => { isDrawing = false; });
  scratchCanvas.addEventListener('touchmove', scratch, { passive: true });

  if (autoScratchBtn) {
    autoScratchBtn.addEventListener('click', revealComplete);
  }

  if (btnContinue) {
    btnContinue.addEventListener('click', () => {
      scratchGate.style.opacity = '0';
      scratchGate.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        scratchGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
    });
  }

  // --- 3. Canvas de Fagulhas Douradas ---
  const sCanvas = document.getElementById('sparkleCanvas');
  const sCtx = sCanvas.getContext('2d');
  let sparkles = [];

  function resizeSparkles() {
    sCanvas.width = window.innerWidth;
    sCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeSparkles);
  resizeSparkles();

  function createSparkle(x, y) {
    if (sparkles.length > 40) return;
    const rect = scratchCanvas.getBoundingClientRect();
    sparkles.push({
      x: x + rect.left,
      y: y + rect.top,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 3 + 2,
      alpha: 1,
      color: Math.random() > 0.5 ? '#facc15' : '#ffffff'
    });
  }

  function burstSparkles(count = 40) {
    for (let i = 0; i < count; i++) {
      sparkles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight * 0.4,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        size: Math.random() * 4 + 2,
        alpha: 1,
        color: Math.random() > 0.3 ? '#facc15' : '#ffffff'
      });
    }
  }

  function animateSparkles() {
    sCtx.clearRect(0, 0, sCanvas.width, sCanvas.height);

    for (let i = sparkles.length - 1; i >= 0; i--) {
      const sp = sparkles[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.alpha -= 0.03;

      sCtx.save();
      sCtx.fillStyle = sp.color;
      sCtx.globalAlpha = Math.max(0, sp.alpha);
      sCtx.beginPath();
      sCtx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
      sCtx.fill();
      sCtx.restore();

      if (sp.alpha <= 0) {
        sparkles.splice(i, 1);
      }
    }

    requestAnimationFrame(animateSparkles);
  }
  animateSparkles();

  // --- 4. Contagem Regressiva para 05/12/2026 às 20:00 ---
  const targetDate = new Date('2026-12-05T20:00:00-03:00').getTime();

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

  // --- 5. RSVP via WhatsApp ---
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guestName').value.trim();
      const guestTotal = document.getElementById('guestTotal').value;
      const presence = document.querySelector('input[name="presence"]:checked').value;

      const isYes = presence === 'sim';
      let message = `🎰 *Confirmação de Entrada - Secret Party Murilo (30 Anos)*\n\n`;
      message += `👤 *Nome:* ${guestName}\n`;
      message += `🎟️ *Vagas:* ${guestTotal}\n`;
      message += isYes 
        ? `🥃 *Status:* Confirmadíssimo na Secret Party! Já raspei o convite e guardei o segredo!` 
        : `💌 *Status:* Murilo, infelizmente não poderei ir nessa, mas desejo um feliz aniversário!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (secretFeedback) {
        secretFeedback.classList.remove('hidden');
      }

      window.open(waUrl, '_blank');
    });
  }

});
