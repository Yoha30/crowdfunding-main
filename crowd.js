let grayBookmark = document.getElementById('gray-bookmark');
let greenBookmark = document.getElementById('green-bookmark');
let bookmarkColor = document.getElementById('bookmark-color');
var bookmarked = document.createTextNode("ed");
let backProject = document.getElementById('back-project');
let backgroundImage = document.getElementById('background-image');
let aboutSection = document.getElementById('about-this');
let logo = document.getElementById('logo');
let line = document.querySelector('#horizontal-line');
let firstSelcted = document.getElementById('selcted-section');
let secondLine = document.getElementById('second-line');
let secondSection = document.getElementById('second-section');
let position = document.getElementById('black-edition');
let button = document.getElementById('button');
let completed = document.getElementById('complete');
let mainSection = document.getElementById('main-section');
let analysis = document.getElementById('analysis-section');
let menu = document.getElementById('menu');
let closeMenu = document.getElementById('close-menu');
let list = document.getElementById('list');
let selectBamboo = document.getElementById('select-bamboo');
let bamboo = document.getElementById('bamboo-stand');
let edition = document.getElementById('black');

function bookMark() {
    if (greenBookmark.classList.contains('hidden')) {
        grayBookmark.classList.add('hidden');
        greenBookmark.classList.remove('hidden');
        bookmarkColor.classList.add('text-darkCyan');
        bookmarkColor.appendChild(bookmarked);
    } else {
        grayBookmark.classList.remove('hidden');
        greenBookmark.classList.add('hidden');
        bookmarkColor.classList.remove('text-darkCyan');
        bookmarkColor.removeChild(bookmarked);
    }
}

function backThisProject() {
    if (backProject.classList.contains('hidden')) {
        backProject.classList.remove('hidden');
        backgroundImage.classList.add('opacity-50');
        aboutSection.classList.add('opacity-50');
        logo.classList.add('hidden');
    }
}

function closeModal() {
    if (backgroundImage.classList.contains('opacity-50')) {
        backProject.classList.add('hidden');
        backgroundImage.classList.remove('opacity-50');
        aboutSection.classList.remove('opacity-50');
        logo.classList.remove('hidden');
    }
}

function checked() {
    line.classList.remove('hidden');
    firstSelcted.classList.remove('hidden');
    firstSelcted.classList.add('flex');
}

function blackedition() {
    secondLine.classList.remove('hidden');
    secondSection.classList.remove('hidden');
    secondSection.classList.add('flex');
    position.classList.add('bottom-106');
    position.classList.remove('bottom-87');
}

function complete() {
    completed.classList.remove('hidden');
    backProject.classList.add('hidden');
    mainSection.classList.add('opacity-50');
    analysis.classList.add('opacity-50');
    logo.classList.remove('hidden');

}

function backOrignal() {
    completed.classList.add('hidden');
    backgroundImage.classList.remove('opacity-50');
    aboutSection.classList.remove('opacity-50');
    mainSection.classList.remove('opacity-50');
    analysis.classList.remove('opacity-50');
    logo.classList.remove('hidden');
}

function mobileMenu() {
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        list.classList.remove('pr-32');
        menu.classList.add('hidden');
        closeMenu.classList.remove('hidden');
    } else if (menu.classList.contains('hidden')) {
        list.classList.add('hidden');
        closeMenu.classList.add('hidden');
        menu.classList.remove('hidden');

    }
}

function rewardClick() {
    backThisProject();
    bamboo.checked = true;
    checked();
}

function editionReward() {
    backThisProject();
    edition.checked = true;
    blackedition();
}

let pops = document.getElementById('pops');
let twentyFive = document.getElementById('twenty-five');
let error = document.getElementById('error');
function success() {

    setTimeout(function () {
        if (twentyFive.value >= 25) {
            pops.classList.remove('hidden');
            pops.classList.add('flex');
            complete();
        }else{
            error.classList.remove('hidden');
            error.classList.add('flex');
        }
    }, 500);
    setTimeout(function (){
        if (pops.classList.contains('flex')){
            pops.classList.add('hidden');
            pops.classList.remove('flex');
        }else{
            error.classList.add('hidden');
            error.classList.remove('flex');
        }
    },1200);
}

