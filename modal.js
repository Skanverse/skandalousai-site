/* SKANdalousAI – modal control */
const modal    = document.getElementById('waitlistModal');
const openBtn  = document.getElementById('openWaitlist');
const closeBtn = document.querySelector('.modal-close');
const backdrop = document.querySelector('.modal-backdrop');

function openModal () {
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
}
function closeModal () {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}

openBtn.addEventListener('click',  e => { e.preventDefault(); openModal(); });
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

document.addEventListener('waitlist:success', () => {
  if (typeof gtag === 'function') gtag('event','waitlist_signup');
  closeModal();
});
