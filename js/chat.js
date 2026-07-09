function initChat() {
  const trigger = document.querySelector('.chat-widget__trigger');
  const box = document.querySelector('.chat-widget__box');

  if (!trigger || !box) return;

  trigger.addEventListener('click', () => {
    box.classList.toggle('chat-widget__box--open');
  });
}

document.addEventListener('DOMContentLoaded', initChat);
