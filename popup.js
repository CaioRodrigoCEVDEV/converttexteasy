// public/assets/js/popup.js
export function createPopup() {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close" onclick="closePopup()">×</span>
      <p>Bem-vindo ao ConvertTextEasy!</p>
    </div>
  `;

  function closePopup() {
    popup.style.display = 'none';
  }

  return popup;
}
