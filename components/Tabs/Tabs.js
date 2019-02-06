class TabLink {
  constructor (tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;

    // Check to see if this.tabData is equal to 'all', select card data appropriately
    this.cards = this.tabData === 'all'
      ? document.querySelectorAll('.card')
      : document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);

     // Convert each this.cards element into a new instance of the TabCard class
    this.cards = [...this.cards].map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab () {
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display = 'none');

    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');

    // Invoke selectCard() for each TabCard class
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor (cardElement) {
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard () {
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
  }

}

/* START HERE:

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');

tabs.forEach(tab => new TabLink(tab));
