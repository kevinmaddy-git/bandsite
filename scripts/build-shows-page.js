const shows = document.querySelector('.shows__section');

// Shows Array
const bookShows = [
  {
    date: 'Mon Sept 06 2021',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: 'Tue Sept 21 2021',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Oct 15 2021',
    venue: 'View Lounge',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Nov 06 2021',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Nov 26 2021',
    venue: 'Moscow Center',
    location: 'San Francisco, CA',
  },
  {
    date: 'Wed Dec 15 2021',
    venue: 'Press Club',
    location: 'San Francisco, CA',
  },
];

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

  const date = document.createElement('p');
  date.classList.add('card__text-title');
  date.innerText = show.date;
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
  venue.innerText = show.venue;
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
bookShows.forEach(show => displayShows(show));

// Add event listener for show highlight
shows.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    if (card) {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.classList.remove('selected'));
      card.classList.add('selected');
    }
  });
$(document).on('click', '.card', function(event) {
    event.stopPropagation();
  });