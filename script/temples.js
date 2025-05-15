

  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');
  
  hamButton.addEventListener('click', () => {
      navigation.style.display = (navigation.style.display === 'block') ? 'none' : 'block';
      hamButton.classList.toggle('open');
    });
  
