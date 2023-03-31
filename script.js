const photos = document.querySelectorAll('.photos-container img');
const buttons = document.querySelectorAll('.buttons-container button');

// Função para exibir a foto selecionada
function showPhoto(photoIndex) {
  // Remove a classe 'active' de todas as fotos e botões
  photos.forEach(photo => {
    photo.classList.remove('active');
  });

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Adiciona a classe 'active' à foto e botão selecionados
  photos[photoIndex - 1].classList.add('active');
  buttons[photoIndex - 1].classList.add('active');
}

// Adiciona um evento de clique a cada botão
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showPhoto(index + 1);
  });
});
