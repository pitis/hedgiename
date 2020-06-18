const firebaseConfig = {
  apiKey: 'AIzaSyCUKR7Kc8Zi9yGbPNy5QSaOfqfsQk2_qc8',
  authDomain: 'hedgiename.firebaseapp.com',
  databaseURL: 'https://hedgiename.firebaseio.com',
  projectId: 'hedgiename',
  storageBucket: 'hedgiename.appspot.com',
  messagingSenderId: '182519469709',
  appId: '1:182519469709:web:a441dbefaf647c673db4c4',
  measurementId: 'G-M4FFX2XMGC',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

const names = new Array(
  'Koko',
  'Poki',
  'Zippie',
  'Willow',
  'Gnash',
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
  'Orchid',
  'Quill.i.am',
  'Dora',
  'Quillie Eilish',
  'Peach'
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
