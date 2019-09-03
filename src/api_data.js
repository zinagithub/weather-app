export default function gotData(url) {
  return fetch(url, { mode: 'cors' })
    .then((response) => response.json());
}
