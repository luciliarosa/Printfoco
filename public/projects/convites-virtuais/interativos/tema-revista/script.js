// ========================================================
// CONVITE VIRTUAL INTERATIVO - EDITORIAL DE REVISTA VOGUE
// Printfoco - Valentina 15 Anos
// ========================================================

document.addEventListener('DOMContentLoaded', () => {

  const TOTAL_PAGES = 3;
  let currentPage = 1;

  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const pageIndicator = document.getElementById('pageIndicator');
  const btnOpenEditorial = document.getElementById('btnOpenEditorial');
  const btnGoPage3 = document.getElementById('btnGoPage3');

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');

  const rsvpForm = document.getElementById('rsvpForm');
  const magFeedback = document.getElementById('magFeedback');

  function showPage(page) {
    if (page < 1 || page > TOTAL_PAGES) return;
    currentPage = page;

    for (let i = 1; i <= TOTAL_PAGES; i++) {
      const p = document.getElementById(`magPage-${i}`);
      if (p) p.classList.toggle('active', i === currentPage);
    }

    if (pageIndicator) {
      pageIndicator.textContent = `Pág ${currentPage} de ${TOTAL_PAGES}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (prevPageBtn) prevPageBtn.addEventListener('click', () => showPage(currentPage - 1));
  if (nextPageBtn) nextPageBtn.addEventListener('click', () => showPage(currentPage + 1));
  if (btnOpenEditorial) btnOpenEditorial.addEventListener('click', () => showPage(2));
  if (btnGoPage3) btnGoPage3.addEventListener('click', () => showPage(3));

  // --- Contagem Regressiva para 14/11/2026 às 20:30 ---
  const targetDate = new Date('2026-11-14T20:30:00-03:00').getTime();

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
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    if (daysEl) daysEl.textContent = d < 10 ? `0${d}` : d;
    if (hoursEl) hoursEl.textContent = h < 10 ? `0${h}` : h;
    if (minutesEl) minutesEl.textContent = m < 10 ? `0${m}` : m;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // --- Formulário RSVP via WhatsApp ---
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guestName').value.trim();
      const guestTotal = document.getElementById('guestTotal').value;
      const presence = document.querySelector('input[name="presence"]:checked').value;

      const isYes = presence === 'sim';
      let message = `📖 *Confirmação RSVP - Revista Vogue Valentina 15 Anos*\n\n`;
      message += `👤 *Convidado(s):* ${guestName}\n`;
      message += `👥 *Total de Convidados:* ${guestTotal}\n`;
      message += isYes 
        ? `✨ *Status:* Presença confirmadíssima! Será uma honra celebrar os 15 anos da Valentina nessa noite tão especial!` 
        : `💌 *Status:* Infelizmente não poderemos comparecer ao baile, mas desejamos todo sucesso e felicidade à debutante!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = '5511975855682';
      const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

      if (magFeedback) magFeedback.classList.remove('hidden');
      window.open(waUrl, '_blank');
    });
  }

});
