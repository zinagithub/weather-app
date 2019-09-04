export default function handleError(e) {
  const alertBox = document.querySelector('.alert');
  alertBox.style.display = 'block';
  if (e.message === '404') {
    document.querySelector('.alert p').innerHTML = 'City not found';
  } else {
    document.querySelector('.alert p').innerHTML = 'Something went wrong';
  }
  document.querySelector('.alert button').addEventListener('click', () => {
    alertBox.style.display = 'none';
  });
}
