//Växlar visningen av navigationsmenyn samt uppdaterar hamburgerikonen genom att ändra klass baserat på menyns aktuella tillstånd.
function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuToggle = document.querySelector('.menu-toggle i');
  
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    menuToggle.classList.remove('fa-times');
    menuToggle.classList.add('fa-bars');
  } 

  else {
    menu.style.display = 'block';
    menuToggle.classList.remove('fa-bars');
    menuToggle.classList.add('fa-times');
  }
}

//skapar och visar en top-knapp när man scrollar ner över ett visst avstånd.
window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.createElement('div');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #9a0707;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  //När topp-knappen klickas, animeras en scroll tillbaka till sidans början.
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.opacity = '1';
    document.body.appendChild(scrollToTopBtn);
  } else if (document.body.contains(scrollToTopBtn)) {
    document.body.removeChild(scrollToTopBtn);
  }

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});