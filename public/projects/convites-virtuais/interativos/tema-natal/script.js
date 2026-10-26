/**
 * CONVITE DE NATAL INTERATIVO & SIMULADOR
 * Natal da Família na Casa da Elaine e Edson
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     1. SISTEMA DE ÁUDIO SINTETIZADO (Web Audio API)
     Toca melodias natalinas nativas no navegador
     ========================================================== */
  class FestiveAudio {
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
        console.warn('Audio note error', e);
      }
    }

    playChime() {
      this.init();
      const notes = [587.33, 659.25, 783.99, 1046.50]; // D5, E5, G5, C6
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      this.playTone(randomNote, 'triangle', 0.5, 0.14);
    }

    playBark() {
      this.init();
      this.playTone(480, 'sine', 0.12, 0.15);
      setTimeout(() => {
        this.playTone(620, 'triangle', 0.14, 0.13);
      }, 110);
    }

    playOpenSound() {
      this.init();
      const chords = [523.25, 659.25, 783.99, 1046.50];
      chords.forEach((note, idx) => {
        setTimeout(() => {
          this.playTone(note, 'sine', 0.6, 0.12);
        }, idx * 110);
      });
    }

    toggleMelody() {
      this.init();
      if (this.isPlaying) {
        this.stopMelody();
        return false;
      }

      this.isPlaying = true;

      const melody = [
        { note: 329.63, dur: 0.25, gap: 300 }, // E
        { note: 329.63, dur: 0.25, gap: 300 }, // E
        { note: 329.63, dur: 0.45, gap: 550 }, // E
        { note: 329.63, dur: 0.25, gap: 300 }, // E
        { note: 329.63, dur: 0.25, gap: 300 }, // E
        { note: 329.63, dur: 0.45, gap: 550 }, // E
        { note: 329.63, dur: 0.25, gap: 300 }, // E
        { note: 392.00, dur: 0.25, gap: 300 }, // G
        { note: 261.63, dur: 0.35, gap: 350 }, // C
        { note: 293.66, dur: 0.25, gap: 300 }, // D
        { note: 329.63, dur: 0.6,  gap: 750 }, // E
        { note: 349.23, dur: 0.25, gap: 300 }, // F
        { note: 349.23, dur: 0.25, gap: 300 }, // F
        { note: 349.23, dur: 0.35, gap: 350 }, // F
        { note: 349.23, dur: 0.25, gap: 300 }, // F
        { note: 349.23, dur: 0.25, gap: 300 }, // F
        { note: 329.63, dur: 0.25, gap: 300 }, // E
        { note: 329.63, dur: 0.25, gap: 300 }, // E
      ];

      let step = 0;
      const playNext = () => {
        if (!this.isPlaying) return;
        const current = melody[step];
        this.playTone(current.note, 'triangle', current.dur, 0.09);
        step = (step + 1) % melody.length;
        this.timer = setTimeout(playNext, current.gap);
      };

      playNext();
      return true;
    }

    stopMelody() {
      this.isPlaying = false;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }

  const soundSystem = new FestiveAudio();

  // Controle de Áudio
  const musicBtn = document.getElementById('musicBtn');
  const musicIcon = document.getElementById('musicIcon');
  const musicText = document.getElementById('musicText');

  musicBtn.addEventListener('click', () => {
    const isPlaying = soundSystem.toggleMelody();
    if (isPlaying) {
      musicIcon.textContent = '🔊';
      musicText.textContent = 'Tocando';
      showToast('🎶 Melodia festiva tocando');
    } else {
      musicIcon.textContent = '🔔';
      musicText.textContent = 'Melodia';
      showToast('Melodia pausada');
    }
  });


  /* ==========================================================
     2. BRILHOS & LUZES FESTIVAS (Canvas para Fundo Claro)
     ========================================================== */
  const canvas = document.getElementById('snowCanvas');
  const ctx = canvas.getContext('2d');
  let animationId = null;
  let isGlittering = true;
  let sparkles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function createSparkles() {
    const count = window.innerWidth < 600 ? 35 : 60;
    sparkles = [];
    for (let i = 0; i < count; i++) {
      sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1.2,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: Math.random() * 0.6 - 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        isGold: Math.random() > 0.4
      });
    }
  }
  createSparkles();

  function updateSparkles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let sp of sparkles) {
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
      ctx.fillStyle = sp.isGold 
        ? `rgba(217, 119, 6, ${sp.opacity})` 
        : `rgba(225, 29, 72, ${sp.opacity * 0.7})`;
      ctx.fill();

      sp.y += sp.speedY;
      sp.x += sp.speedX;

      if (sp.y > canvas.height) {
        sp.y = -6;
        sp.x = Math.random() * canvas.width;
      }
      if (sp.x > canvas.width) sp.x = 0;
      if (sp.x < 0) sp.x = canvas.width;
    }

    if (isGlittering) {
      animationId = requestAnimationFrame(updateSparkles);
    }
  }
  updateSparkles();

  const toggleSnowBtn = document.getElementById('toggleSnowBtn');
  toggleSnowBtn.addEventListener('click', () => {
    isGlittering = !isGlittering;
    if (isGlittering) {
      updateSparkles();
      toggleSnowBtn.style.opacity = '1';
      showToast('✨ Brilhos ativados');
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
      toggleSnowBtn.style.opacity = '0.6';
      showToast('Brilhos pausados');
    }
  });


  /* ==========================================================
     3. TRANSIÇÃO: SIMULADOR DE ABERTURA DO ENVELOPE
     ========================================================== */
  const envelopeGate = document.getElementById('envelopeGate');
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const openInviteBtn = document.getElementById('openInviteBtn');
  const inviteContent = document.getElementById('inviteContent');

  function openEnvelope() {
    if (envelopeWrapper.classList.contains('opening')) return;

    soundSystem.playOpenSound();
    envelopeWrapper.classList.add('opening');

    setTimeout(() => {
      envelopeGate.style.opacity = '0';
      envelopeGate.style.transform = 'scale(0.96)';
      envelopeGate.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

      setTimeout(() => {
        envelopeGate.classList.add('hidden');
        inviteContent.classList.remove('hidden');
        const dogsTrack = document.getElementById('dogsRunningTrack');
        if (dogsTrack) dogsTrack.classList.add('visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('🎄 Bem-vindos ao nosso Natal em família!');
      }, 500);
    }, 800);
  }

  envelopeWrapper.addEventListener('click', openEnvelope);
  openInviteBtn.addEventListener('click', openEnvelope);
  envelopeWrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelope();
    }
  });


  /* ==========================================================
     4. CONTAGEM REGRESSIVA PARA O NATAL
     ========================================================== */
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minEl = document.getElementById('minutes');
  const secEl = document.getElementById('seconds');

  function getTargetChristmasDate() {
    const now = new Date();
    let currentYear = now.getFullYear();
    let christmas = new Date(currentYear, 11, 24, 19, 0, 0);

    if (now.getTime() > christmas.getTime()) {
      christmas = new Date(currentYear + 1, 11, 24, 19, 0, 0);
    }
    return christmas;
  }

  const targetDate = getTargetChristmasDate();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minEl.textContent = '00';
      secEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minEl.textContent = String(minutes).padStart(2, '0');
    secEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);


  /* ==========================================================
     5. SIMULADOR DA ÁRVORE DA FAMÍLIA
     ========================================================== */
  const treeStage = document.getElementById('treeStage');
  const ornamentsLayer = document.getElementById('ornamentsLayer');
  const ornamentCounter = document.getElementById('ornamentCounter');
  const resetTreeBtn = document.getElementById('resetTreeBtn');
  const ornamentButtons = document.querySelectorAll('.ornament-choice');

  let selectedType = 'red';
  let placedCount = 0;

  ornamentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      ornamentButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedType = btn.getAttribute('data-type');
    });
  });

  function createOrnamentElement(type, xPercent, yPercent) {
    const wrapper = document.createElement('div');
    wrapper.className = 'placed-ornament';
    wrapper.style.left = `${xPercent}%`;
    wrapper.style.top = `${yPercent}%`;

    let innerContent = '';
    if (type === 'red') {
      innerContent = `<div class="ball-shape red-style" title="Bolinha do Amor"></div>`;
    } else if (type === 'gold') {
      innerContent = `<div class="ball-shape gold-style" title="Bolinha da Prosperidade"></div>`;
    } else if (type === 'silver') {
      innerContent = `<div class="ball-shape silver-style" title="Bolinha da Paz"></div>`;
    } else if (type === 'bell') {
      innerContent = `<div class="emoji-ornament" title="Sininho da Alegria">🔔</div>`;
    } else if (type === 'gift') {
      innerContent = `<div class="emoji-ornament" title="Presente da União">🎁</div>`;
    } else if (type === 'thor') {
      innerContent = `
        <div class="pet-ornament thor-ornament" title="Thor 🐾">
          <div class="ornament-cap"></div>
          <div class="pet-ornament-frame">
            <img src="assets/thor_face.jpg" alt="Thor" class="pet-ornament-img">
            <span class="pet-ornament-accessory">🎅</span>
          </div>
        </div>`;
    } else if (type === 'jade') {
      innerContent = `
        <div class="pet-ornament jade-ornament" title="Jade 🎀">
          <div class="ornament-cap"></div>
          <div class="pet-ornament-frame">
            <img src="assets/jade_face.jpg" alt="Jade" class="pet-ornament-img">
            <span class="pet-ornament-accessory">🎀</span>
          </div>
        </div>`;
    }

    wrapper.innerHTML = innerContent;

    wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      wrapper.classList.remove('shake');
      void wrapper.offsetWidth;
      wrapper.classList.add('shake');
      if (type === 'thor') {
        soundSystem.playBark();
        showToast('Thor 🐾: Au au! Feliz Natal em família!');
      } else if (type === 'jade') {
        soundSystem.playBark();
        showToast('Jade 🎀: Au au! Muito amor na ceia!');
      } else {
        soundSystem.playChime();
      }
    });

    return wrapper;
  }

  treeStage.addEventListener('click', (e) => {
    const rect = treeStage.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const xPercent = (clickX / rect.width) * 100;
    const yPercent = (clickY / rect.height) * 100;

    if (yPercent < 15 || yPercent > 84 || xPercent < 15 || xPercent > 85) {
      showToast('Toque na copa verde da árvore para pendurar! 🎄');
      return;
    }

    const ornament = createOrnamentElement(selectedType, xPercent, yPercent);
    ornamentsLayer.appendChild(ornament);

    placedCount++;
    ornamentCounter.textContent = placedCount;

    const typesName = {
      red: 'Amor ❤️',
      gold: 'Prosperidade ✨',
      silver: 'Paz 🕊️',
      bell: 'Alegria 🔔',
      gift: 'União 🎁',
      thor: 'Thor 🐾',
      jade: 'Jade 🎀'
    };

    if (selectedType === 'thor') {
      soundSystem.playBark();
      showToast('Bolinha do Thor pendurada na árvore! 🐾');
    } else if (selectedType === 'jade') {
      soundSystem.playBark();
      showToast('Bolinha da Jade pendurada na árvore! 🎀');
    } else {
      soundSystem.playChime();
      showToast(`Enfeite de ${typesName[selectedType] || 'Natal'} pendurado!`);
    }
  });

  const initialOrnaments = [
    { type: 'gold', x: 50, y: 32 },
    { type: 'thor', x: 38, y: 52 },
    { type: 'jade', x: 62, y: 54 },
    { type: 'red', x: 42, y: 72 },
    { type: 'gift', x: 58, y: 73 }
  ];

  initialOrnaments.forEach(item => {
    const orn = createOrnamentElement(item.type, item.x, item.y);
    ornamentsLayer.appendChild(orn);
    placedCount++;
  });
  ornamentCounter.textContent = placedCount;

  resetTreeBtn.addEventListener('click', () => {
    ornamentsLayer.innerHTML = '';
    placedCount = 0;
    ornamentCounter.textContent = placedCount;
    showToast('Árvore renovada! Pendure seus enfeites!');
  });


  /* ==========================================================
     6. MENSAGENS NATALINAS DA FAMÍLIA (SORTEIO)
     ========================================================== */
  const holidayMessages = [
    {
      text: "O melhor presente de Natal é poder ver a nossa família reunida, rindo das mesmas histórias e celebrando o privilégio de estarmos juntos mais um ano.",
      author: "— Família Reunida"
    },
    {
      text: "Que a nossa ceia seja cheia de afeto, gratidão e aquela energia única que só a nossa família tem quando se junta!",
      author: "— Família Reunida"
    },
    {
      text: "Natal no Brasil é sinônimo de abraço sincero, mesa farta, calor no coração e orgulho das nossas raízes familiares.",
      author: "— Família Reunida"
    },
    {
      text: "Mais do que presentes, que neste Natal a gente troque olhares de carinho, recordações especiais e muitos sorrisos sinceros.",
      author: "— Família Reunida"
    },
    {
      text: "Que a luz desta noite renove as esperanças de cada um de nós, fortalecendo a harmonia e o amor que nos mantêm sempre unidos.",
      author: "— Família Reunida"
    }
  ];

  let currentMsgIndex = 0;
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const nextMessageBtn = document.getElementById('nextMessageBtn');
  const messageCard = document.getElementById('messageCard');

  nextMessageBtn.addEventListener('click', () => {
    messageCard.style.opacity = '0';
    messageCard.style.transform = 'translateY(6px)';

    soundSystem.playChime();

    setTimeout(() => {
      let nextIndex = Math.floor(Math.random() * holidayMessages.length);
      while (nextIndex === currentMsgIndex && holidayMessages.length > 1) {
        nextIndex = Math.floor(Math.random() * holidayMessages.length);
      }
      currentMsgIndex = nextIndex;

      quoteText.textContent = holidayMessages[currentMsgIndex].text;
      quoteAuthor.textContent = holidayMessages[currentMsgIndex].author;

      messageCard.style.opacity = '1';
      messageCard.style.transform = 'translateY(0)';
    }, 250);
  });


  /* ==========================================================
     7. ATALHO: PEDIR ENDEREÇO & CALENDÁRIO
     ========================================================== */
  const scrollAddressBtn = document.getElementById('scrollAddressBtn');
  const requestAddressCheck = document.getElementById('requestAddressCheck');
  const guestNameInput = document.getElementById('guestName');

  if (scrollAddressBtn) {
    scrollAddressBtn.addEventListener('click', (e) => {
      e.preventDefault();
      requestAddressCheck.checked = true;
      const rsvpSection = document.getElementById('rsvpSection');
      if (rsvpSection) {
        rsvpSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          guestNameInput.focus();
        }, 500);
      }
      showToast('📍 Opção de pedir endereço marcada para a confirmação!');
    });
  }

  // Adicionar ao Calendário (Apenas com "Casa da Elaine e Edson")
  const addToCalendarBtn = document.getElementById('addToCalendarBtn');
  addToCalendarBtn.addEventListener('click', () => {
    const year = targetDate.getFullYear();
    const title = encodeURIComponent("Natal da Família • Casa da Elaine e Edson");
    const details = encodeURIComponent("Grande celebração de Natal da nossa família na Casa da Elaine e Edson! A partir das 19:00.");
    const location = encodeURIComponent("Casa da Elaine e Edson");
    
    const startDate = `${year}1224T220000Z`;
    const endDate = `${year}1225T030000Z`;

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  });


  /* ==========================================================
     8. CONFIRMAÇÃO DE PRESENÇA NO WHATSAPP (SEM EXPOR NÚMERO)
     ========================================================== */
  const confirmWhatsappBtn = document.getElementById('confirmWhatsappBtn');
  const guestDishInput = document.getElementById('guestDish');

  confirmWhatsappBtn.addEventListener('click', () => {
    const name = guestNameInput.value.trim();
    const dish = guestDishInput ? guestDishInput.value.trim() : '';
    const targetPhone = "5511975855682"; // Número seguro enviado diretamente à API
    const wantsAddress = requestAddressCheck.checked;

    let messageText = "";

    if (name) {
      messageText = `Olá! 🎄✨ Aqui é *${name}*. Confirmo com muita alegria a nossa presença no Natal da nossa família na casa da Elaine e do Edson! Nos vemos lá a partir das 19:00. ❤️🥂`;
    } else {
      messageText = `Olá! 🎄✨ Gostaria de confirmar nossa presença na ceia de Natal da família na casa da Elaine e do Edson! Nos vemos lá a partir das 19:00. ❤️🥂`;
    }

    // Se a pessoa informou o prato e a bebida
    if (dish) {
      messageText += `\n\n🍽️ *Prato e Bebida que vamos levar:* ${dish}`;
    }

    // Se a pessoa marcou o checkbox pedindo endereço/localização
    if (wantsAddress) {
      messageText += `\n\n📍 *Poderiam me mandar a localização e o endereço completo, por favor?*`;
    }

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  });


  /* ==========================================================
     9. TOAST NOTIFICATION HELPER
     ========================================================== */
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

});
