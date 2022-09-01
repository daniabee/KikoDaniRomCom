// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var coverImage = document.querySelector('.cover-image');
var randomButton = document.querySelector('.random-cover-button');
var title = document.querySelector('.cover-title');
var subtitle = document.querySelector('.tagline');

var makeYourButton = document.querySelector('.make-new-button');
var homeViewPage = document.querySelectorAll('section')[1];
var formPage = document.querySelectorAll('section')[5];
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');

var viewSavedButton = document.querySelector('.view-saved-button')
var savedCoversPage = document.querySelectorAll('section')[3];


// Add your event listeners here 👇
randomButton.addEventListener('click', changeImage);
randomButton.addEventListener('click', changeTitle);
randomButton.addEventListener('click', changeSubtitle);

makeYourButton.addEventListener('click',viewFormPage); //changes view to Make Your Own Cover Form

viewSavedButton.addEventListener('click',viewSavedCoversPage);//changes view to View Saved Covers Page

homeButton.addEventListener('click', viewHomePage); //change view to home page

// Create your event handlers and other functions here 👇
function changeImage() {
  coverImage.src=covers[getRandomIndex(covers)];
}

function changeTitle() {
  title.innerText = titles[getRandomIndex(titles)];
}

function changeSubtitle() {
  subtitle.innerText = descriptors[getRandomIndex(descriptors)];
}

function viewFormPage() {
    homeViewPage.className = 'view home-view hidden';
    formPage.className = 'view form-view';
    randomButton.className = 'random-cover-button hidden';
    saveCoverButton.className = 'save-cover-button hidden';
    homeButton.className = 'home-button';
}

function viewSavedCoversPage() {
    formPage.className = 'view form-view hidden';
    savedCoversPage.className = 'view saved-view';
    homeViewPage.className = 'view home-view hidden';
    homeButton.className = 'home-button';
    randomButton.className = 'random-cover-button hidden';
    saveCoverButton.className = 'save-cover-button hidden';
}

function viewHomePage() {
    homeButton.className = 'home-button hidden';
    homeViewPage.className = 'view home-view';
    savedCoversPage.className = 'view saved-view hidden';
    randomButton.className = 'random-cover-button';
    saveCoverButton.className = 'save-cover-button';
    formPage.className = 'view form-view hidden';

}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
