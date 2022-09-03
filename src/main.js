// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

//Last minute enhancement: improve saveCover() function so that it can save
//ANY cover (including random or form)

//WIP
var currentCover;
var currentTitle;
var currentDescriptor1;
var currentDestriptor2;

var coverImage = document.querySelector('.cover-image');
var randomButton = document.querySelector('.random-cover-button');
var title = document.querySelector('.cover-title');
var subtitle1 = document.querySelector('.tagline-1');
var subtitle2 = document.querySelector('.tagline-2');

var makeYourButton = document.querySelector('.make-new-button');
var homeViewPage = document.querySelectorAll('section')[1];
var formPage = document.querySelectorAll('section')[5];
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');

var viewSavedButton = document.querySelector('.view-saved-button')
var savedCoversPage = document.querySelectorAll('section')[3];

var coverInput = document.querySelector('#cover.user-cover');
var titleInput = document.querySelector('#title.user-title');
var descriptorInput1 = document.querySelector('#descriptor1.user-desc1')
var descriptorInput2 = document.querySelector('#descriptor2.user-desc2');
var makeBookButton = document.querySelector('.create-new-book-button');

// Add your event listeners here 👇
randomButton.addEventListener('click', changeImage);
randomButton.addEventListener('click', changeTitle);
randomButton.addEventListener('click', changeSubtitle);

makeYourButton.addEventListener('click',viewFormPage); //changes view to Make Your Own Cover Form

viewSavedButton.addEventListener('click',viewSavedCoversPage);//changes view to View Saved Covers Page

homeButton.addEventListener('click', viewHomePage); //change view to home page

makeBookButton.addEventListener('click', saveData);//may want to rename the function saveData to generateCover
makeBookButton.addEventListener('click', viewHomePage);

//WIP
saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers and other functions here 👇
function changeImage() {
  coverImage.src=covers[getRandomIndex(covers)];
}

function changeTitle() {
  title.innerText = titles[getRandomIndex(titles)];
}

function changeSubtitle() {
  subtitle1.innerText = descriptors[getRandomIndex(descriptors)];
  subtitle2.innerText = descriptors[getRandomIndex(descriptors)];
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

function saveData(event) {
  event.preventDefault();

    titles.push(titleInput.value);
    covers.push(coverInput.value);
    descriptors.push(descriptorInput1.value);
    descriptors.push(descriptorInput2.value);

//probably don't want to push 93-94 to the array yet until
//user clicks save coverbutton
    // var userMadeCover = [new Cover(coverInput.value, titleInput.value, descriptorInput1.value, descriptorInput2.value)];
    // savedCovers.push(userMadeCover);
    currentCover = covers[covers.length-1];
    currentTitle = titles[titles.length-1];
    currentDescriptor1 = descriptors[descriptors.length-2];
    currentDescriptor2 = descriptors[descriptors.length-1];

    coverImage.src= currentCover;
    title.innerText = currentTitle;
    subtitle.innerText = `${currentDescriptor1} ${currentDescriptor2}`;
}

//WIP
function saveCover() {
    var userMadeCover = new Cover(covers[covers.length-1], titles[titles.length-1], descriptors[descriptors.length-2], descriptors[descriptors.length-1]);
    if(savedCovers[savedCovers.length-1].cover != userMadeCover.cover){
          savedCovers.push(userMadeCover);
    }
  }

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
