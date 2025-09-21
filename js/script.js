// toggle icon navbar //
let menuIcon = document.querySelector('#menu-icon'); // querySelector (pas All)
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');    // change l’icône
    navbar.classList.toggle('active');    // affiche/masque la navbar
};

let sections = document.querySelectorAll('section'); // "querySelectorAll" (pas ALL)
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // tu avais laissé vide

        if (top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(link => {
                link.classList.remove('active');
                document
                  .querySelector('header nav a[href*=' + id + ']')
                  .classList.add('active');
            });
            //active sections for animation on scroll//
            sec.classList.add('show-animate');
        }
        //if want to use animation that repeats on scroll use this//
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');    // change l’icône
    navbar.classList.remove('active');    // affiche/masque la navbar

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};


// remove toggle icon and navbar when click navbar links (scroll)
