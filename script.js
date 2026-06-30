// State management
let currentView = 'landing';

const projects = [
  {
    title: "Deca",
    url: "https://deca.uz",
    img: "images/bird-logo.png"
  },
];

// Render functions
function renderLanding() {
  return `
    <div class="min-h-screen flex flex-col">
      <header class="px-4 pt-1">
        <div class="max-w-3xl mx-auto clay px-4 h-14 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="images/bird-logo.png" alt="Deca" class="h-8 w-8 object-contain" />
            <span class="text-lg font-extrabold text-neutral-800">Deca</span>
          </div>
          <div class="flex items-center gap-2">
            <a href="https://instagram.com/deca.uz" target="_blank" rel="noreferrer" class="w-9 h-9 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition" style="background: none;" title="@deca.uz">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.2 1.4C1.3 2.7.9 3.4.6 4.2.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.1.6 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.4-2.2C21.3 1.3 20.6.9 19.8.6 19 .3 18.2.1 16.9.1 15.7 0 15.3 0 12 0z"/><path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg>
            </a>
          </div>
        </div>
      </header>
      <section class="flex-1 flex items-center justify-center px-4 py-2">
        <div class="max-w-xl mx-auto text-center">
          <img src="images/bird-mascot.png" alt="Deca" class="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 float-anim fade-in" style="animation-delay: 0s" />
          <h1 class="text-3xl sm:text-5xl font-extrabold text-neutral-800 mb-6 leading-tight slide-up" style="animation-delay: 0.1s">Deca</h1>
          <div class="flex justify-center slide-up" style="animation-delay: 0.2s">
            <button onclick="setView('projects')" class="clay-btn text-neutral-900 font-bold px-8 py-3.5">📁 Проекты</button>
          </div>
        </div>
      </section>
      <footer class="px-4 pb-4 pt-2">
        <div class="max-w-3xl mx-auto clay p-5">
          <p class="text-[11px] text-neutral-400 text-center">© 2026 Deca · we will open soon</p>
        </div>
      </footer>
    </div>
  `;
}

function renderProjects() {
  const projectCards = projects.map((p, i) => `
    <a href="${p.url}" target="_blank" rel="noreferrer" class="flex flex-col items-center gap-2 group" style="animation: fadeInUp 0.3s ease ${i * 0.05}s both">
      <div class="clay-sm p-1.5 w-full transition group-hover:-translate-y-1 group-active:scale-95" style="border: none;">
        <div class="aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
          <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover" draggable="false" />
        </div>
      </div>
      <span class="text-xs sm:text-sm font-semibold text-neutral-600 text-center truncate w-full">${p.title}</span>
    </a>
  `).join('');

  return `
    <div class="min-h-screen flex flex-col">
      <header class="px-4 pt-4 pb-2 shrink-0">
        <div class="max-w-3xl mx-auto clay px-4 h-14 flex items-center justify-between">
          <button onclick="setView('landing')" class="flex items-center gap-2 hover:opacity-70 transition">
            <img src="images/bird-logo.png" alt="Deca" class="h-8 w-8 object-contain" />
            <span class="text-lg font-extrabold text-neutral-800">Deca</span>
          </button>
          <button onclick="setView('landing')" class="clay-ghost-btn text-sm font-semibold text-neutral-600 px-4 py-2">← Назад</button>
        </div>
      </header>
      <div class="text-center px-4 pt-2 pb-4 shrink-0">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-neutral-800">Проекты</h1>
      </div>
      <main class="flex-1 overflow-y-auto px-4 pb-8">
        <div class="max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">${projectCards}</div>
      </main>
    </div>
  `;
}

// Event handlers
function setView(view) {
  currentView = view;
  render();
}

// Main render function
function render() {
  const app = document.getElementById('app');
  if (currentView === 'landing') {
    app.innerHTML = renderLanding();
  } else if (currentView === 'projects') {
    app.innerHTML = renderProjects();
  }
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Initial animation for landing page elements */
  .fade-in {
    animation: fadeIn 0.5s ease forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .slide-up {
    animation: slideUp 0.5s ease forwards;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Block context menu and copy prevention
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('cut', e => e.preventDefault());

// Initial render
render();
