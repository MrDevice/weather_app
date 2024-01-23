const API_KEY = '273cf7b9eaf2ab7a2b55709dd22dce9f';

//geocoder api key://


const address = 'London';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}';

const GEO_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${address}&limit=5&appid=${API_KEY}`;



fetch(GEO_API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  let map_address = document.getElementById('city_address');

  document.getElementById('city') = map_address;