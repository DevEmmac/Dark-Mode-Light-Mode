const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const camp = document.getElementById('camp');
const explore = document.getElementById('explore');
const party = document.getElementById('party');
const textBox = document.getElementById('text-box');

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    camp.src ='img/undraw_camping_dark.svg';
    explore.src ='img/undraw_explore_dark.svg';
    party.src ='img/undraw_outdoor_party_dark.svg';
}

// light Mode Styles
function lightMode () {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[1].classList.remove('fa-moon');
    camp.src ='img/undraw_camping_light.svg';
    explore.src ='img/undraw_explore_light.svg';
    party.src ='img/undraw_outdoor_party_light.svg';

}

// Switch Theme Dynamically
function switchTheme(event) {
    // console.log(event.target.checked);
    if (event.target.checked) {
         document.documentElement.setAttribute('data-theme', 'dark');
         darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
