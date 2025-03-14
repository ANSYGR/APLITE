function toggleMenu() {
  const menu = document.getElementById('menu');
  // Om menyn visas, dölj den; annars, visa den
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}
