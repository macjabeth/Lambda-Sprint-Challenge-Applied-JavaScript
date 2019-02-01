class Carousel {
  constructor (element) {
    // assign this.element to the carousel
    this.element = element;

    // grab the laft and right buttons
    this.leftBtn = this.element.firstElementChild;
    this.rightBtn = this.element.lastElementChild;

    // grab a reference to all of the images
    this.images = this.element.querySelectorAll('img');

    // create a current index
    this.index = 0;

    // display the current image
    this.images[this.index].style.visibility = 'visible';
    this.images[this.index].style.opacity = 1;

    // add click handlers to the buttons
    this.leftBtn.addEventListener('click', () => this.slideLeft());
    this.rightBtn.addEventListener('click', () => this.slideRight());
  }

  slideLeft () {
    // hide the current image
    this.images[this.index].style.visibility = 'hidden';
    this.images[this.index].style.opacity = 0;

    // cycle the index
    this.index = this.index === 0 ? this.images.length - 1 : --this.index;

    // display the new image
    this.images[this.index].style.visibility = 'visible';
    this.images[this.index].style.opacity = 1;
  }

  slideRight () {
    // hide the current image
    this.images[this.index].style.visibility = 'hidden';
    this.images[this.index].style.opacity = 0;

    // cycle the index
    this.index = this.index === this.images.length - 1 ? 0 : ++this.index;

    // display the new image - leaving the setTimeout here to see the transition differences between the two buttons
    setTimeout(() => {
      this.images[this.index].style.visibility = 'visible';
      this.images[this.index].style.opacity = 1;
    }, 300)
  }
}

const carousel = new Carousel(document.querySelector('.carousel'));
