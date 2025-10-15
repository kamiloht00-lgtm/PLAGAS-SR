// Sidebar toggle for mobile
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebar.querySelector('nav ul li a').focus();
});

// Chatbot open/close logic
const chatPanel = document.getElementById('chat-panel');
const btnChat = document.querySelector('.btn-chat');
const btnCloseChat = document.querySelector('.chatbot-close');

btnChat.addEventListener('click', () => {
  chatPanel.setAttribute('aria-hidden', 'false');
  document.getElementById('chat-input').focus();
});
btnCloseChat.addEventListener('click', () => {
  chatPanel.setAttribute('aria-hidden', 'true');
  btnChat.focus();
});

// Keyboard accessibility for chatbot (ESC to close)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && chatPanel.getAttribute('aria-hidden') === 'false') {
    chatPanel.setAttribute('aria-hidden', 'true');
    btnChat.focus();
  }
});

// Chatbot send message (basic demo)
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatBody = document.getElementById('chat-body');
chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});
function sendMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = msg;
  chatBody.appendChild(userMsg);
  chatInput.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
  // Simulate bot response
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.textContent = 'Gracias por tu mensaje. Pronto te responderemos.';
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);
}

// Chart.js demo data
if (window.Chart) {
  const ctxMonths = document.getElementById('chart-months').getContext('2d');
  new Chart(ctxMonths, {
    type: 'line',
    data: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      datasets: [{
        label: 'Citas',
        data: [40, 55, 60, 70, 65, 80, 90, 85, 75, 60, 50, 45],
        borderColor: '#d4af37',
        backgroundColor: 'rgba(212,175,55,0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });

  const ctxPlagas = document.getElementById('chart-plagas').getContext('2d');
  new Chart(ctxPlagas, {
    type: 'doughnut',
    data: {
      labels: ['Ratas', 'Cucarachas', 'Hormigas', 'Arañas', 'Otros'],
      datasets: [{
        data: [120, 200, 90, 60, 40],
        backgroundColor: [
          '#d4af37',
          '#232323',
          '#b0b0b0',
          '#181818',
          '#444'
        ]
      }]
    },
    options: {
      plugins: { legend: { position: 'bottom', labels: { color: '#f5f5f5' } } }
    }
  });
}
