document.querySelectorAll('.faq-section__question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('open');
  });
});
