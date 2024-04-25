document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__listas');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnsideMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnsideMenuToggle) {
            navMenu.classList.remove('active')
        }
    });
});


/*Animacion del proyecto*/

window.sr = ScrollReveal();

//HERO

    sr.reveal('.hero__title',{
        duration : 2000,
        origin : 'top',
        distance : '-100px'
    });

    sr.reveal('.hero__subtitle',{
        duration : 2500,
        origin : 'top',
        distance : '-100px'
    });

    sr.reveal('.hero__paragraph',{
        duration : 3000,
        origin : 'top',
        distance : '-100px'
    });

    sr.reveal('.hero__action',{
        duration : 3500,
        origin : 'top',
        distance : '-100px'

    });


    //ABOUT

    sr.reveal('.about__atributo:nth-child(1)',{
        duration : 1500,
        origin : 'top',
        distance : '-50px'
    });

    sr.reveal('.about__atributo:nth-child(2)',{
        duration : 2000,
        origin : 'top',
        distance : '-50px'
    });

    sr.reveal('.about__atributo:nth-child(3)',{
        duration : 2500,
        origin : 'top',
        distance : '-50px'
    });


    //TRAINER

    sr.reveal('.entrenador1',{
        duration : 1500,
        origin : 'top',
        distance : '-100px'
    });

    sr.reveal('.entrenador2',{
        duration : 1700,
        origin : 'top',
        distance : '-100px'
    });

    sr.reveal('.entrenador3',{
        duration : 1800,
        origin : 'top',
        distance : '-100px'
    });

    sr.reveal('.entrenador4',{
        duration : 1900,
        origin : 'top',
        distance : '-100px'
    });


    //Blog

    sr.reveal('.bg-1',{
        duration : 1750,
        origin : 'top',
        distance : '-200px'
    });

    sr.reveal('.bg-2',{
        duration : 2000,
        origin : 'top',
        distance : '-200px'
    });

    sr.reveal('.bg-3',{
        duration : 2250,
        origin : 'top',
        distance : '-200px'
    });

    sr.reveal('.bg-4',{
        duration : 2500,
        origin : 'top',
        distance : '-200px'
    });




















