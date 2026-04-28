// main change buttons
const hairChange = document.querySelector('#hair');
const earsChange = document.querySelector('#ears');
const eyesChange = document.querySelector('#eyes');
const mouthChange = document.querySelector('#mouth');
const neckChange = document.querySelector('#neck');
const legChange = document.querySelector('#leg');
const accessoryChange = document.querySelector('#accessories');
const backgroundChange = document.querySelector('#background');

// style wrappers
const hairStyleWrapper = document.querySelector('.hair-styles-wrapper');
const earsStyleWrapper = document.querySelector('.ears-styles-wrapper');
const eyesStyleWrapper = document.querySelector('.eyes-styles-wrapper');
const mouthStyleWrapper = document.querySelector('.mouth-styles-wrapper');
const neckStyleWrapper = document.querySelector('.neck-styles-wrapper');
const legStyleWrapper = document.querySelector('.leg-styles-wrapper');
const accessoryStyleWrapper = document.querySelector('.accessories-styles-wrapper');
const bgStyleWrapper = document.querySelector('.background-styles-wrapper');

function hideAll() {
  hairStyleWrapper.classList.remove('show');
  earsStyleWrapper.classList.remove('show');
  eyesStyleWrapper.classList.remove('show');
  mouthStyleWrapper.classList.remove('show');
  neckStyleWrapper.classList.remove('show');
  legStyleWrapper.classList.remove('show');
  accessoryStyleWrapper.classList.remove('show');
  bgStyleWrapper.classList.remove('show');
}

function removeActiveFromAll() {
  hairChange.classList.remove('active');
  earsChange.classList.remove('active');
  eyesChange.classList.remove('active');
  mouthChange.classList.remove('active');
  neckChange.classList.remove('active');
  legChange.classList.remove('active');
  accessoryChange.classList.remove('active');
  backgroundChange.classList.remove('active');
}

// show hair by default
hairStyleWrapper.classList.add('show');
hairChange.classList.add('active');

hairChange.addEventListener('click', () => {
  hideAll();
  removeActiveFromAll();
  hairStyleWrapper.classList.add('show');
  hairChange.classList.add('active');
});

earsChange.addEventListener('click', () => {
  hideAll();
  removeActiveFromAll();
  earsStyleWrapper.classList.add('show');
  earsChange.classList.add('active');
});

eyesChange.addEventListener('click', () => {
  hideAll();
  removeActiveFromAll();
  eyesStyleWrapper.classList.add('show');
  eyesChange.classList.add('active');
});

mouthChange.addEventListener('click', () => {
  hideAll();
  removeActiveFromAll();
  mouthStyleWrapper.classList.add('show');
  mouthChange.classList.add('active');
});

neckChange.addEventListener('click', () => {
  hideAll();
  removeActiveFromAll();
  neckStyleWrapper.classList.add('show');
  neckChange.classList.add('active');
});

legChange.addEventListener('click', () => {
  hideAll();
  removeActiveFromAll();
  legStyleWrapper.classList.add('show');
  legChange.classList.add('active');
});

accessoryChange.addEventListener('click', () => {
  hideAll();
  removeActiveFromAll();
  accessoryStyleWrapper.classList.add('show');
  accessoryChange.classList.add('active');
});

backgroundChange.addEventListener('click', () => {
  hideAll();
  removeActiveFromAll();
  bgStyleWrapper.classList.add('show');
  backgroundChange.classList.add('active');
});