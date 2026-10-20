const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const projects = {
  attendly: {
    kicker: '01 / EDUCATION · WEB APP CONCEPT',
    title: 'Attendly — Student Attendance',
    description: 'A proposed attendance tool for a teacher or small institute to organize student records and review attendance by class and date.',
    features: ['Student list and profile fields', 'Present / absent / late status concept', 'Date-wise attendance summary', 'Exportable report workflow (planned)', 'Database or Firebase connection (planned, not included)']
  },
  pennywise: {
    kicker: '02 / PERSONAL FINANCE · UI CONCEPT',
    title: 'Pennywise — Expense Tracker',
    description: 'A finance dashboard concept that helps users understand everyday spending through categories and a clear monthly overview.',
    features: ['Income and expense entries (planned)', 'Category and date filters', 'Monthly budget snapshot', 'Spending charts and summaries', 'Persistent storage or cloud sync (planned, not included)']
  },
  flowtask: {
    kicker: '03 / PRODUCTIVITY · UI CONCEPT',
    title: 'FlowTask — Task Manager',
    description: 'A productivity interface concept for keeping tasks visible, organized, and easier to prioritize.',
    features: ['Create and organize tasks (planned)', 'Priority and due-date labels', 'To-do / in-progress / done workflow', 'Search and filter concepts', 'API or cloud synchronization (planned, not included)']
  }
};
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalKicker = document.getElementById('modalKicker');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
function closeModal() { modal.hidden = true; document.body.style.overflow = ''; }
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    modalKicker.textContent = project.kicker;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalFeatures.replaceChildren(...project.features.map(feature => {
      const li = document.createElement('li'); li.textContent = feature; return li;
    }));
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('modalClose').focus();
  });
});
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
