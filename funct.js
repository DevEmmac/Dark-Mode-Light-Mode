const toggleSwitch = document.querySelector('input[type="checkbox"]');

    //  Repeating document.getElementById

// const nav = document.getElementById('nav');
// const toggleIcon = document.getElementById('toggle-icon');
// const camp = document.getElementById('camp');
// const explore = document.getElementById('explore');
// const party = document.getElementById('party');
// const textBox = document.getElementById('text-box');
 

//  cleaned-up some document.getElementById() to a single function

let id = (id) => document.getElementById(id);
   let camp = id('camp'),
       explore = id('explore'),
       party = id('party'),
       textBox = id('text-box'),
       toggleIcon = id('toggle-icon'),
       nav = id('nav');



 function imageMode (color) {
    camp.src = `img/undraw_camping_${color}.svg`;
    explore.src = `img/undraw_explore_${color}.svg`;
    party.src = `img/undraw_outdoor_party_${color}.svg`;
}
        //   Cleaned-up code (dry code)
function toggleDarkLightMode (isDark) {
        nav.style.backgroundColor =  isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
        textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
        toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
        isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
        isDark ? imageMode('dark') : imageMode('light');

}

       // Repeating same code

//    (Dark Mode Styles, this is a comment!)
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
//     imageMode('dark');
// }

//         (light Mode Styles, this is a comment!)
// function lightMode () {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
//     imageMode('light');
// }

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
         document.documentElement.setAttribute('data-theme', 'dark');
         localStorage.setItem('theme', 'dark');
        //  darkMode();
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // lightMode();
        toggleDarkLightMode(false)
    }
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);


// check local storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        // darkMode();
        toggleDarkLightMode(true)
    }
}


