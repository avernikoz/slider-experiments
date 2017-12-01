window.onload = function () {
    var tabrow1 = document.querySelector('#tab-cont-1');
    var tabrow2 = document.querySelector('#tab-cont-2');

    tabrow1.addEventListener('click', MakeActive);
    tabrow2.addEventListener('click', MakeActive);

    function MakeActive(e) {
        e.stopPropagation();

        if (e.target.className.toLowerCase() === 'tabs-text') {
            var curval = e.target.textContent;
            var current_tab_container = e.target.parentElement.id;

            var all_tabs_text = document.querySelectorAll('#' + current_tab_container + '>.tabs-text');
            all_tabs_text.forEach(function (t) {
                t.classList.remove('active');
            })
            e.target.classList.add('active');

            makeActiveTab(current_tab_container,curval);
        }

    }

    function makeActiveTab(current_tab_container,curval) {

        var currenttab = document.querySelector('#' + current_tab_container + '>#' + curval);
        var alltabs = document.querySelectorAll('#' + current_tab_container + '>.tab');
        alltabs.forEach(function (t) {
            t.classList.add('disable');
            t.classList.remove('active');

        })
        currenttab.classList.remove('disable');
        currenttab.classList.add('active');


    }
};
// For slick.js
// $(document).ready(function(){
//     $('.slick-class').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     });
// });

// For OwlCarousel2.js

// $(document).ready(function(){
//     $(".slick-class").owlCarousel( {
//         items: 3,
//         dots: false,
//         autoplay: true,
//         autoplayTimeout: 2000,
//     });
// });


// Tiny-slider

$(document).ready(function(){

    const allsliders = document.querySelectorAll('.slick-class');
    console.log(allsliders);

    for(const one of allsliders) {
        new tns({
            container: one,
            items: 3,
            slideBy: 'page',
            autoplay: true,
            // rewind: true,
            mouseDrag: true,
            loop: true,
            nav: false,
            controls: false

        })
    }
});





//Siema
// $(document).ready(function(){
//
//     const siemas = document.querySelectorAll('.slick-class');
//
//     for(const siema of siemas) {
//         new Siema({
//             selector: siema,
//             duration: 200,
//             easing: 'ease-out',
//             perPage: 1,
//             loop: true,
//         })
//     }
//
// });
