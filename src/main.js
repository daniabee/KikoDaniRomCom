var savedCovers = [];
var homeViewPage = document.querySelectorAll('section')[1];
var formPage = document.querySelectorAll('section')[5];
var savedCoversPage = document.querySelectorAll('section')[3];
var randomButton = document.querySelector('.random-cover-button');
var makeYourButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeBookButton = document.querySelector('.create-new-book-button');
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var subtitle1 = document.querySelector('.tagline-1');
var subtitle2 = document.querySelector('.tagline-2');
var coverInput = document.querySelector('#cover.user-cover');
var titleInput = document.querySelector('#title.user-title');
var descriptorInput1 = document.querySelector('#descriptor1.user-desc1');
var descriptorInput2 = document.querySelector('#descriptor2.user-desc2');
var miniCovers = document.querySelectorAll('.mini-cover');
var savedCoversSection = document.querySelector('.saved-covers-section');

randomizeCover();
randomButton.addEventListener('click', randomizeCover);
makeYourButton.addEventListener('click', viewFormPage);
viewSavedButton.addEventListener('click', viewSavedCoversPage);
homeButton.addEventListener('click', viewHomePage);
makeBookButton.addEventListener('click', generateCover);
makeBookButton.addEventListener('click', viewHomePage);
saveCoverButton.addEventListener('click', saveCover);
savedCoversSection.addEventListener('dblclick', removeCover);

function randomizeCover () {
  changeCoverDisplay(generateRandom(covers), generateRandom(titles), generateRandom(descriptors), generateRandom(descriptors));
}

function viewFormPage() {
  hide(homeViewPage);
  hide(randomButton);
  hide(saveCoverButton);
  hide(savedCoversPage);
  show(homeButton);
  show(formPage);
}

function viewSavedCoversPage() {
  hide(formPage);
  hide(randomButton);
  hide(saveCoverButton);
  hide(homeViewPage);
  show(homeButton);
  show(savedCoversPage);
  savedCoversSection.innerHTML = '';
  savedCovers.forEach((savedCover) => {
    savedCoversSection.innerHTML +=
    `<span class = "mini-cover" id = "${savedCover.id}">
    <img class = "cover-image" src = ${savedCover.cover}>
    <h2 class = "cover-title">${savedCover.title}</h2>
    <h3 class = "tagline"> A tale of ${savedCover.tagline1} and ${savedCover.tagline2}</h3>
    </span>`
  });
}

function viewHomePage() {
  hide(savedCoversPage);
  hide(formPage);
  hide(homeButton);
  show(randomButton);
  show(saveCoverButton);
  show(homeViewPage);
  titleInput.value = '';
  coverInput.value = '';
  descriptorInput1.value = '';
  descriptorInput2.value = '';
}

function generateCover(event) {
  event.preventDefault();
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(descriptorInput1.value);
  descriptors.push(descriptorInput2.value);

  coverImage.src = getLastElement(covers);
  title.innerText = getLastElement(titles);
  subtitle1.innerText = getLastElement(descriptors, 2);
  subtitle2.innerText = getLastElement(descriptors);
}

function saveCover() {
  const userMadeCover = new Cover(coverImage.src, title.innerText, subtitle1.innerText, subtitle2.innerText);
  if (savedCovers.length === 0) {
    savedCovers.push(userMadeCover);
  }
  else if (savedCovers[savedCovers.length-1].cover != userMadeCover.cover) {
    savedCovers.push(userMadeCover);
  }
}

function removeCover(event) {
  let selectedCover = savedCovers.findIndex((savedCover) => {
    return savedCover.id.toString() === event.target.id;
  });
    savedCovers.splice(selectedCover, 1);
    event.target.parentElement.remove();
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function changeCoverDisplay(cover, title, subtitle1, subtitle2) {
  coverImage.src = cover;
  title.innerText = title;
  subtitle1.innerText = subtitle1;
  subtitle2.innerText = subtitle2;
}

function getLastElement(array, num = 1) {
  var last = array[array.length - num];
  return last;
}

function generateRandom(array) {
  var generated = array[getRandomIndex(array)];
  return generated;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
