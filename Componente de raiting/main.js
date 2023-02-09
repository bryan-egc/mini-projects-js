const raitingContainer = document.querySelector('.raiting');
let currentValue = 0;
const limit = 10;

const html = Array.from(Array(limit)).map( (_, i) => {
  return `<div class="item item-${i}" data-pos="${i}"></div>`;
}); //Arreglo basado en el párametro que se ingrese

raitingContainer.innerHTML = html.join('');

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('mouseover', e =>{ // mouseover para detectar que el mouse paso por encima del elemento
    const pos = item.getAttribute('data-pos');

    if (currentValue === parseInt(pos) + 1) {
      return;
    }

    document.querySelectorAll('.item').forEach(it => {
      if (it.classList.contains('item-full')) {
        it.classList.remove('item-full');
      };
    });

    for (let i = 0; i <= pos; i++) {
      const square = document.querySelector(`.item-${i}`);
      if (!square.classList.contains('item-full')) {
        square.classList.add('item-full');
      } 
    }
    currentValue = parseInt(pos) + 1;
  });

  item.addEventListener('click', e => {
    const pos = item.getAttribute('data-pos');
    currentValue = parseInt(pos) + 1;
    console.log(currentValue);
  });
});

