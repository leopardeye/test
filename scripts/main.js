if (window.matchMedia("(max-width: 1024px)").matches) {
    // Your script here



let hamburger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    let divs = hamburger.querySelectorAll('div');
    if (divs.length === 3) {
        divs[0].style.transform = 'translateY(0.3rem) rotate(45deg)';
        divs[1].style.transform = 'translateY(-0.3rem) rotate(-45deg)';
        hamburger.removeChild(divs[2]);
        mobileNav.style.right = '0';
    } else {
        divs[0].style.transform = 'translateY(0) rotate(0deg)';
        divs[1].style.transform = 'translateY(0) rotate(0deg)';
        let newDiv = document.createElement('div');
        newDiv.id = 'ham-3';
        newDiv.style.width = '2rem';
        newDiv.style.height = '.3rem';
        newDiv.style.margin = '2px';
        newDiv.style.borderRadius = '20%';
        newDiv.style.backgroundColor = '$col-dark';
        hamburger.appendChild(newDiv);
        mobileNav.style.right = '-200px';
    }
});

document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
        let divs = hamburger.querySelectorAll('div');
        if (divs.length === 2) {
            divs[0].style.transform = 'translateY(0) rotate(0deg)';
            divs[1].style.transform = 'translateY(0) rotate(0deg)';
            let newDiv = document.createElement('div');
            newDiv.id = 'ham-3';
            newDiv.style.width = '2rem';
            newDiv.style.height = '.3rem';
            newDiv.style.margin = '2px';
            newDiv.style.borderRadius = '20%';
            newDiv.style.backgroundColor = 'var(--col-dark)';
            hamburger.appendChild(newDiv);
            mobileNav.style.right = '-200px';
        }
    }
})};