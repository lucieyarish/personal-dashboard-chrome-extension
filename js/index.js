const locationEl = document.getElementById('location');
const timeEl = document.getElementById('time');
const weatherEl = document.getElementById('weather');

fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=zen'
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    locationEl.textContent = data.location.name;
  })
  .catch(() => {
    document.body.style.backgroundImage =
      "url('/assets/images/default-image.jpg')";
    locationEl.textContent = `Doi Hua Mae Kham, Mae Salong Nai, Thailand`;
  });

const renderTime = () => {
  const date = new Date();
  timeEl.textContent = date.toLocaleString('en-US', { timeStyle: 'short' });
};

setInterval(renderTime, 1000);

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error('Weather data not available');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const temperature = Math.round(data.main.temp);
        weatherEl.innerHTML = `
        <div class="temperature-container">
          <img src=${iconUrl} />
          <p class="temperature">${temperature}&deg;C</p>
        </div>
        <div class="temperature-location">
          <p class="weather-location">${data.name}</p>
        </div>
        `;
      })
      .catch((err) => console.error(err));
  });
}
