/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imagePaths = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

function Carousel(imagePaths) {
  // create elements
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const rightBtn = document.createElement('div');
  const images = imagePaths.map(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('animationend', () => {
      img.style.animationName = '';
    });
    return img;
  });

  // create structure
  carousel.append(...images, leftBtn, rightBtn);

  // add attributes and data
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  leftBtn.textContent = '<';
  rightBtn.classList.add('right-button');
  rightBtn.textContent = '>';

  // handle functionality
  let index = 0;

  rightBtn.addEventListener('click', () => {
    images[index].style.animationName = 'fadeOut';
    setTimeout(() => {
      images[index].style.display = 'none';
      if (++index === images.length) index = 0;
      images[index].style.animationName = 'fadeIn';
      images[index].style.display = 'block';
    }, 250);
  });

  leftBtn.addEventListener('click', () => {
    images[index].style.animationName = 'fadeOut';
    setTimeout(() => {
      images[index].style.display = 'none';
      if (--index === -1) index = images.length - 1;
      images[index].style.animationName = 'fadeIn';
      images[index].style.display = 'block';
    }, 250);
  });

  images[index].style.display = 'block';

  // return carousel component
  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.append(Carousel(imagePaths));