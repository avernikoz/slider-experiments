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


            var currenttab = document.querySelector('#' + current_tab_container + '>#' + curval);
            var alltabs = document.querySelectorAll('#' + current_tab_container + '>.tab');
            alltabs.forEach(function (t) {
                t.classList.add('disable');
            })
            currenttab.classList.remove('disable');
        }

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

$(document).ready(function(){
    $(".slick-class").owlCarousel( {
        items: 3,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
    });
});