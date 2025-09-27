const themeSelector = document.querySelector('#theme-choice');
function changeTheme() {
  if (themeSelector.value === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.logo').src = 'byui-logo_white.png'; 
  } else if (themeSelector.value === 'light') {
    document.body.classList.remove('dark');
    document.querySelector('.logo').src = 'byui-logo_blue.webp';
  }
}

themeSelector.addEventListener('change', changeTheme);
