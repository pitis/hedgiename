const names = new Array(
  'Koko',
  'Poki',
  'Zippie',
  'Lisa',
  'Reno',
  'Stewie',
  'Hadley',
  'Hugo',
  'Hesper',
  'Higgins',
  'Zeus',
  'Hera',
  'Duna',
  'Mimi',
  'Luna',
  'Spike',
  'Kella',
  'Zoey',
  'Aphrodite',
  'Daily',
  'Elvis',
  'Diego',
  'Oscar',
  'Yogi',
  'Diesel',
  'Dash',
  'Choco',
  'Orchid'
)

const name = document.querySelector('.name')
const btnCopy = document.querySelector('.btn-copy')

function copyName() {
  navigator.clipboard.writeText(name.innerHTML)
}

function changeName() {
  name.innerHTML = getRandomArrayElement(names)
}

function getRandomArrayElement(arr) {
  let min = 0
  let max = arr.length - 1
  let randIndex = Math.floor(Math.random() * (max - min)) + min
  return arr[randIndex]
}
