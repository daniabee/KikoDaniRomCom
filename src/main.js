var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

//Pages
var homeViewPage = document.querySelectorAll('section')[1];
var formPage = document.querySelectorAll('section')[5];
var savedCoversPage = document.querySelectorAll('section')[3];

//Buttons
var randomButton = document.querySelector('.random-cover-button');
var makeYourButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeBookButton = document.querySelector('.create-new-book-button');

//Cover elements
var coverImage = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var subtitle1 = document.querySelector('.tagline-1');
var subtitle2 = document.querySelector('.tagline-2');

//User input variables to create Cover
var coverInput = document.querySelector('#cover.user-cover');
var titleInput = document.querySelector('#title.user-title');
var descriptorInput1 = document.querySelector('#descriptor1.user-desc1');
var descriptorInput2 = document.querySelector('#descriptor2.user-desc2');

//Mini covers elements
var miniCovers = document.querySelectorAll('.mini-cover');
var savedCoversSection = document.querySelector('.saved-covers-section');

//Randomize covers
randomButton.addEventListener('click', randomizeCover);

//Changes view to Make Your Own Cover Form
makeYourButton.addEventListener('click', viewFormPage);

//Changes view to View Saved Covers Page
viewSavedButton.addEventListener('click', viewSavedCoversPage);

//Change view to home page
homeButton.addEventListener('click', viewHomePage);

//Generates cover
makeBookButton.addEventListener('click', generateCover);
makeBookButton.addEventListener('click', viewHomePage);

//Save a new cover
saveCoverButton.addEventListener('click', saveCover);

//Removes cover
savedCoversSection.addEventListener('dblclick', removeCover);

//Functions

function randomizeCover () {
  coverImage.src = covers[getRandomIndex(covers)];
  title.innerText = titles[getRandomIndex(titles)];
  subtitle1.innerText = descriptors[getRandomIndex(descriptors)];
  subtitle2.innerText = descriptors[getRandomIndex(descriptors)];
  title.innerText = descriptors[getRandomIndex(descriptors)];
}

function viewFormPage() {
    homeViewPage.className = 'view home-view hidden';
    formPage.className = 'view form-view';
    randomButton.className = 'random-cover-button hidden';
    saveCoverButton.className = 'save-cover-button hidden';
    homeButton.className = 'home-button';
    savedCoversPage.className = 'view saved-view hidden';
}

function viewSavedCoversPage() {
    formPage.className = 'view form-view hidden';
    savedCoversPage.className = 'view saved-view';
    homeViewPage.className = 'view home-view hidden';
    homeButton.className = 'home-button';
    randomButton.className = 'random-cover-button hidden';
    saveCoverButton.className = 'save-cover-button hidden';

    savedCoversSection.innerHTML = "";

    for (var i = 0; i < savedCovers.length; i++) {
      savedCoversSection.innerHTML +=
      `<span class = "mini-cover" id = "${savedCovers[i].id}">
      <img class = "cover-image" src = ${savedCovers[i].cover}>
      <h2 class = "cover-title">${savedCovers[i].title}</h2>
      <h3 class = "tagline"> A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
      </span>`
    }
}

function viewHomePage() {
    homeButton.className = 'home-button hidden';
    homeViewPage.className = 'view home-view';
    savedCoversPage.className = 'view saved-view hidden';
    randomButton.className = 'random-cover-button';
    saveCoverButton.className = 'save-cover-button';
    formPage.className = 'view form-view hidden';

    titleInput.value = '';
    coverInput.value = '';
    descriptorInput1.value = '';
    descriptorInput2.value = '';
}

function generateCover(event) {

    event.preventDefault();

    titles.push(titleInput.value);
    covers.push(coverInput.value);
    descriptors.push(descriptorInput1.value);
    descriptors.push(descriptorInput2.value);

    coverImage.src = covers[covers.length-1];
    title.innerText = titles[titles.length-1];
    subtitle1.innerText = descriptors[descriptors.length-2];
    subtitle2.innerText = descriptors[descriptors.length-1];
}

function saveCover() {
    var userMadeCover = new Cover(coverImage.src, title.innerText, subtitle1.innerText, subtitle2.innerText);
      if (savedCovers.length === 0) {
        savedCovers.push(userMadeCover);
      }
      else if (savedCovers[savedCovers.length-1].cover != userMadeCover.cover) {
        savedCovers.push(userMadeCover);
      }
}

function removeCover(event) {
  var miniCovers = document.querySelectorAll('.mini-cover');
  var miniCoverId = event.target.parentElement;
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id.toString() === miniCoverId.id) {
      savedCovers.splice(i,1);
      miniCovers[i].remove();
    }
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
