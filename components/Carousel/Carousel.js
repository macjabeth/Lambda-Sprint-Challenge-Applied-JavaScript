class Carousel {
  constructor (element) {
    // assign this.element to the carousel
    this.element = element;

    // grab the laft and right buttons
    this.leftBtn = this.element.firstElementChild;
    this.rightBtn = this.element.lastElementChild;

    // grab a reference to all of the images
    this.images = this.element.querySelectorAll('img');

    // set the first image to be visible
    this.images[0].style.visibility = 'visible';

    // create a current index
    this.index = 0;

    // add click handlers to the buttons
    this.leftBtn.addEventListener('click', () => this.slideLeft());
    this.rightBtn.addEventListener('click', () => this.slideRight());
  }

  slideRight () {
    // store the previous index
    const previousIndex = this.index;

    // cycle the current index
    this.index = this.index === this.images.length - 1 ? 0 : ++this.index;

    // set the next image to slide in from the right
    this.images[this.index].style.animation = '0.6s rightslidein';
    this.images[this.index].style.animationFillMode = 'forwards';

    // slide the current image out to the left
    this.images[previousIndex].style.animation = '0.6s rightslideout';
    this.images[previousIndex].style.animationFillMode = 'forwards';
  }

  slideLeft () {
    // store the previous index
    const previousIndex = this.index;

    // cycle the index
    this.index = this.index === 0 ? this.images.length - 1 : --this.index;

    // set the next image to slide in from the left
    this.images[this.index].style.animation = '0.6s leftslidein';
    this.images[this.index].style.animationFillMode = 'forwards';

    // slide the current image out to the left
    this.images[previousIndex].style.animation = '0.6s leftslideout';
    this.images[previousIndex].style.animationFillMode = 'forwards';
  }
}

const carousel = new Carousel(document.querySelector('.carousel'));
