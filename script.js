// Holat boshqaruvi
let currentView = 'landing';

// Render funksiyalari
function renderLanding() {
  return `
    <div class="mobile-shell min-h-screen flex flex-col">
      <header class="sticky-header px-2 pt-2 pb-1 sm:px-4 sm:pt-4 sm:pb-2">
        <div class="max-w-3xl mx-auto clay px-3 h-14 sm:px-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="images/bird-logo.png" alt="Deca" class="h-10 w-10 object-contain" />
            <span class="text-lg font-extrabold text-neutral-800">Deca</span>
          </div>
          <div class="flex items-center gap-2">
            <a href="https://instagram.com/deca.uz" target="_blank" rel="noreferrer" class="w-9 h-9 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition" style="background: none;" title="@deca.uz">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.2 1.4C1.3 2.7.9 3.4.6 4.2.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.1.6 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.4-2.2C21.3 1.3 20.6.9 19.8.6 19 .3 18.2.1 16.9.1 15.7 0 15.3 0 12 0z"/><path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg>
            </a>
          </div>
        </div>
      </header>
      <section class="flex-1 flex items-center justify-center px-2 py-2 sm:px-4">
        <div class="max-w-xl mx-auto text-center">
          <img src="images/bird-mascot.png" alt="Deca" class="w-56 h-56 sm:w-32 sm:h-32 mx-auto mb-5" />
          <h1 class="text-4xl sm:text-6xl font-extrabold text-neutral-800 mb-7 leading-tight">Deca</h1>
          <div class="flex justify-center">
            <button onclick="setView('projects')" class="clay-btn text-neutral-900 font-bold px-10 py-4 sm:px-12 sm:py-4.5">📁 Projects</button>
          </div>
        </div>
      </section>
      <footer class="sticky-footer px-2 pb-2 sm:px-4 sm:pb-4 pt-1">
        <div class="max-w-3xl mx-auto clay px-4 py-3 sm:p-5">
          <p class="text-[11px] text-neutral-400 text-center">© 2026 Deca · we will open soon</p>
        </div>
      </footer>
    </div>
  `;
}

function renderProjects() {
  const projectCards = projects.map((p, i) => `
    <a href="${p.url}" target="_blank" rel="noreferrer" class="flex flex-col items-center gap-2 group">
      <div class="p-0.5 w-full transition group-active:scale-95 rounded-2xl" style="box-shadow: none; border: 1px solid #000000; background: rgba(255,255,255,0.9);">
        <div class="p-1 aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
          <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover" draggable="false" />
        </div>
      </div>
      <span class="text-xs sm:text-sm font-semibold text-neutral-600 text-center truncate w-full">${p.title}</span>
    </a>
  `).join('');

  return `
    <div class="mobile-shell min-h-screen flex flex-col">
      <header class="sticky-header px-2 pt-2 pb-1 sm:px-4 sm:pt-4 sm:pb-2 shrink-0">
        <div class="max-w-3xl mx-auto clay px-3 h-14 sm:px-4 flex items-center justify-between">
          <button onclick="setView('landing')" class="flex items-center gap-2 hover:opacity-70 transition">
            <img src="images/bird-logo.png" alt="Deca" class="h-10 w-10 object-contain" />
            <span class="text-lg font-extrabold text-neutral-800">Deca</span>
          </button>
          <button onclick="setView('landing')" class="clay-ghost-btn text-sm font-semibold text-neutral-600 px-4 py-2">← Назад</button>
        </div>
      </header>
      <div class="text-center px-2 pt-2 pb-3 sm:px-4 shrink-0" style="background: none;">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-neutral-800">Projects</h1>
      </div>
      <main class="flex-1 overflow-y-auto px-2 pb-8 sm:px-4">
        <div class="max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">${projectCards}</div>
      </main>
      <footer class="sticky-footer px-2 pb-2 sm:px-4 sm:pb-4 pt-1">
        <div class="max-w-3xl mx-auto clay px-4 py-3 sm:p-5">
          <p class="text-[11px] text-neutral-400 text-center">© 2026 Deca · we will open soon</p>
        </div>
      </footer>
    </div>
  `;
}

// Hodisa ishlovchilari
function setView(view) {
  currentView = view;
  render();
}

// Asosiy render funksiyasi
function render() {
  const app = document.getElementById('app');
  if (currentView === 'landing') {
    app.innerHTML = renderLanding();
  } else if (currentView === 'projects') {
    app.innerHTML = renderProjects();
  }
}

// Nusxa olishni bloklash
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('cut', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());
document.addEventListener('keydown', e => {
  const blockedKeys = ['c', 'x', 'v', 'a'];
  if ((e.ctrlKey || e.metaKey) && blockedKeys.includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

render();
