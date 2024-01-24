const locationEl = document.getElementById('location');

fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=zen'
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    locationEl.textContent = data.location.name;
  });
