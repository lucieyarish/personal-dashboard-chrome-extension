const locationEl = document.getElementById('location');
const timeEl = document.getElementById('time');

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
