document.getElementById('get-crazy').addEventListener('click', getCrazy);
document.getElementById('get-assets').addEventListener('click', getAssets);

function getCrazy() {
  document.getElementById('party').style.background = `url('src/img/8.jpg') no-repeat top center`;
  document.getElementById('party').style.backgroundSize = 'cover';
  document.getElementById('party-dialogue').textContent = 'Hey beautiful, It\'s your birthday, wanna drink Bacardi?';
  document.getElementById('get-crazy').setAttribute('id', 'drink-bacardi');
  document.getElementById('drink-bacardi').textContent = 'Drink Bacardi*';
  document.getElementById('disclaimer').style.display = 'inline';
  document.getElementById('drink-bacardi').addEventListener('click', drinkBacardi);
}

function drinkBacardi() {
  document.getElementById('party').style.background = `url('src/img/10.jpg') no-repeat bottom left`;
  document.getElementById('party').style.backgroundSize = 'cover';
  document.getElementById('drink-bacardi').style.display = 'none';
  document.getElementById('disclaimer').style.display = 'none';
  document.getElementById('party-dialogue').textContent = 'Happy birthday, Maja!';
}

function getAssets() {
  document.getElementById('office').style.background = `url('src/img/12.jpg') no-repeat top center`;
  document.getElementById('office').style.backgroundSize = 'cover';
  document.getElementById('office-dialogue').textContent = 'I\'m on it, here you go';
  document.getElementById('get-assets').style.display = 'none';
  document.getElementById('thank-you').style.display = 'inline-block';
}
