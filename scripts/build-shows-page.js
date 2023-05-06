const apiKey = "3dbe1dce-3a08-47d5-baf1-8f70e87ccaaa";

// Cards for Show
function displayShows(show) {
  const card = document.createElement('div');
  card.classList.add('card');
  shows.appendChild(card);

  const dateWrap = document.createElement('div');
  dateWrap.classList.add('date');
  card.appendChild(dateWrap);

  const dateLabel = document.createElement('p');
  dateLabel.classList.add('card__label', 'card__label--margin');
  dateLabel.innerText = 'DATE';
  dateWrap.appendChild(dateLabel);

  const showdate = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

  const date = document.createElement('p');
  date.classList.add('card__text-title');
  date.innerText = new Date(show.date).toLocaleDateString('en-US', showdate).replace(',', '').replace('Sep', 'Sept');
  dateWrap.appendChild(date);

  const venueWrap = document.createElement('div');
  venueWrap.classList.add('venue');
  card.appendChild(venueWrap);

  const venueLabel = document.createElement('p');
  venueLabel.classList.add('card__label');
  venueLabel.innerText = 'VENUE';
  venueWrap.appendChild(venueLabel);

  const venue = document.createElement('p');
  venue.classList.add('card__text');
  venue.innerText = show.place;
  venueWrap.appendChild(venue);

  const locationWrap = document.createElement('div');
  locationWrap.classList.add('venue');
  card.appendChild(locationWrap);

  const locationLabel = document.createElement('p');
  locationLabel.classList.add('card__label');
  locationLabel.innerText = 'LOCATION';
  locationWrap.appendChild(locationLabel);

  const location = document.createElement('p');
  location.classList.add('card__text');
  location.innerText = show.location;
  locationWrap.appendChild(location);

  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('type', 'button');
  button.innerText = 'BUY TICKETS';
  card.appendChild(button);
}

// Display cards
axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
  .then(response => {
    response.data.forEach(show => {
      displayShows(show);
    });
  })
  .catch(error => {
    console.log(error);
  });

// Add event listener for show highlight
shows.addEventListener('click', function (event) {
  const card = event.target.closest('.card');
  if (card) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('selected'));
    card.classList.add('selected');
  }
});

$(document).on('click', '.card', function (event) {
  event.stopPropagation();
});