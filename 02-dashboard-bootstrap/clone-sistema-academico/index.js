const iconExpansion = document.querySelector('.icon-expansion');
const iconExpansionWrapper = document.querySelector('.icon-expansion-wrapper');
const navTitle = document.querySelector('.nav-title');
const infoClienteAside = document.querySelector('.info-cliente-aside');
const navLinkText = document.querySelectorAll('.nav-link-text');
const navLink = document.querySelectorAll('.nav-link');
const layout = document.querySelector('.layout');

const DELAY_EXPAND_MS = 200;

function aplicarEstadoSidebar({ colapsada }) {
  infoClienteAside.classList.toggle('closed', colapsada);
  navTitle.classList.toggle('closed', colapsada);

  navLinkText.forEach((el) => el.classList.toggle('closed', colapsada));

  iconExpansion.classList.toggle('bi-chevron-double-right', colapsada);
  iconExpansion.classList.toggle('bi-chevron-double-left', !colapsada);

  navLink.forEach((el) => el.classList.toggle('justify-content-center', colapsada));
}

function setColapsada(colapsada) {
  layout.classList.toggle('is-collapsed', colapsada);

  if (!colapsada) {
    setTimeout(() => aplicarEstadoSidebar({ colapsada: false }), DELAY_EXPAND_MS);
    return;
  }

  aplicarEstadoSidebar({ colapsada: true });
}

iconExpansion?.addEventListener('click', () => {
  const colapsadaAgora = layout.classList.contains('is-collapsed');
  setColapsada(!colapsadaAgora);
});

