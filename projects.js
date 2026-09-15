const projects = [
  {
    title: "DECA",
    url: "https://www.deca.uz",
    img: "images/bird-logo.png"
  },
];

const grid = document.getElementById('projects-grid');
grid.innerHTML = projects.map(p => `
    <a href="${p.url}" target="_blank" rel="noreferrer" class="pjt-card">
        <img src="${p.img}" alt="${p.title}" draggable="false">
        <span>${p.title}</span>
    </a>
`).join('');