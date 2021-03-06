// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function Tab(topic) {
  // create element
  const tab = document.createElement('div');

  // add attributes and data
  tab.classList.add('tab');
  tab.textContent = topic;
  tab.dataset.topic = topic === 'node.js' ? 'node' : topic;

  // handle functionality
  tab.addEventListener('click', () => {
    const cards = document.getElementsByClassName('card');
    for (const card of cards) {
      card.style.display = (card.dataset.topic === tab.dataset.topic || topic === 'all')
        ? 'flex'
        : 'none';
    }
  });

  // return tab component
  return tab;
}

const topics = document.querySelector('div.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    topics.append(Tab('all'));
    response.data.topics.forEach(topic => {
      topics.append(Tab(topic));
    });
  });