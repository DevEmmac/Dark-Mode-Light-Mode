const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const camp = document.getElementById('camp');
const explore = document.getElementById('explore');
const party = document.getElementById('party');
const textBox = document.getElementById('text-box');

 function imageMode (color) {
    camp.src = `img/undraw_camping_${color}.svg`;
    explore.src = `img/undraw_explore_${color}.svg`;
    party.src = `img/undraw_outdoor_party_${color}.svg`;

}
// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode('dark')
}

// light Mode Styles
function lightMode () {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode('light')
   

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
