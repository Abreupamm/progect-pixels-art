function quadroPixels(numero) {
  const quantElement = numero;
  const sectionPai = document.getElementById('pixel-board');
  for (let index = 1; index <= quantElement; index += 1) {
    const sect = document.createElement('div');
    for (let i = 1; i <= quantElement; i += 1) {
      const quadro = document.createElement('div');
      quadro.classList.add('pixel', 'white');
      sect.appendChild(quadro);
    }
    sectionPai.appendChild(sect);
  }
}
quadroPixels('5');

function selected(event) {
  const elementSelected = event.target.id;
  document.querySelector('.selected').classList.remove('selected');
  document.getElementById(elementSelected).classList.add('selected');
}

const paleta = document.querySelectorAll('.color');
for (let index = 0; index < paleta.length; index += 1) {
  const element = paleta[index];
  document.getElementById('preto').classList.add('selected');
  element.addEventListener('click', selected);
}

function pintaCor(event) {
  const pixelSelected = event.target;
  const quadro = document.querySelector('.selected').id;
  pixelSelected.classList = '';
  pixelSelected.classList.add('pixel');
  pixelSelected.classList.add(quadro);
}

const divSelected = document.querySelectorAll('.pixel');
for (let i = 0; i < divSelected.length; i += 1) {
  const div = divSelected[i];
  div.addEventListener('click', pintaCor);
}

function clear() {
  const divs = document.querySelectorAll('.pixel');
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].classList = '';
    divs[i].classList.add('pixel');
    divs[i].classList.add('white');
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clear);
