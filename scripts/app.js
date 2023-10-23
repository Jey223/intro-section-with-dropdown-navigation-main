// mobile navigation
const openMenu = document.querySelector('.menu-img');
const closeMenu = document.querySelector('.menu-close-img');
const showNavigation = document.querySelector('.navigation');
const overLay = document.querySelector('.overlay');
const dropdowns = document.querySelectorAll(".dropdownbutton");



const toggleNav = () => {
    showNavigation.classList.toggle('show');
    overLay.classList.toggle('show');
}

openMenu.addEventListener('click', toggleNav);
closeMenu.addEventListener('click', toggleNav);
overLay.addEventListener('click', toggleNav);














// dropdown 
dropdowns.forEach((dropdown) => {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    const arrowUp = dropdown.querySelector(".arrow-up");
    const arrowDown = dropdown.querySelector(".arrow-down");

    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        if(dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none'
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'block';
        } else {
            dropdownContent.style.display = 'block';
            arrowUp.style.display = 'block';
            arrowDown.style.display = 'none';
        }
    })
});


//Close dropdown and Menu on the click of the body
document.addEventListener('click', (e) => {
    dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        const arrowUp = dropdown.querySelector(".arrow-up");
        const arrowDown = dropdown.querySelector(".arrow-down");
        
        if(!dropdown.contains(e.target)) {
            dropdownContent.style.display = 'none';
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'block';
        }
    });



});