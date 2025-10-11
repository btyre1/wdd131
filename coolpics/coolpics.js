const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } 
  else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

var gallery = document.querySelector('.gallery');

function handleGalleryClick(event) {
  var clickedImage = event.target.closest('img');

  if (!clickedImage) {
    return;
  }

  var src = clickedImage.getAttribute('src');
  var alt = clickedImage.getAttribute('alt');

  var largeImage = src.split('-')[0] + '-full.jpeg';

  var modal = document.createElement('dialog');

  var modalImage = document.createElement('img');
  modalImage.setAttribute('src', largeImage);
  modalImage.setAttribute('alt', alt);

  var closeButton = document.createElement('button');
  closeButton.className = 'close-viewer';
  closeButton.textContent = 'X';

  modal.appendChild(modalImage);
  modal.appendChild(closeButton);

  document.body.appendChild(modal);

  modal.showModal();

  closeButton.addEventListener('click', () => {
    modal.close();
  });

  modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
    }});
}

gallery.addEventListener('click', handleGalleryClick);

