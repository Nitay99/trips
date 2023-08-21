const initMap = () => {
  // eslint-disable-next-line
  let map = L.map('map').setView([55.77487328280451, 37.6326415], 15);
  // eslint-disable-next-line
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  // eslint-disable-next-line
  let marker = new L.Marker([55.77487328280451, 37.6326415]);
  marker.addTo(map);
};

export {initMap};
