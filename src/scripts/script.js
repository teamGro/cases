let sliderElem;

const btnBurger1 = $('#burger1');
const btnTopElem = $('#burger1 .burger__elem_top');
const btnMiddleElem = $('#burger1 .burger__elem_middle');
const btnBottomElem = $('#burger1 .burger__elem_bottom');
const mobileMenu = $('.header__mobile-menu');

btnBurger1.on('click', function () {
    if ($(this).hasClass("burger_closed")) {
        btnTopElem.animate()
        btnMiddleElem.animate({
            opacity: 0
        }, {
            duration: 100
        });
        btnBottomElem.animate();

        mobileMenu.addClass('header__mobile-menu_open');
        sliderElem.pause();

        $(this).
            animate()
            .removeClass("burger_closed")
            .addClass("burger_opened");

        return;
    }

    if ($(this).hasClass("burger_opened")) {
        btnTopElem.animate()
        btnMiddleElem.animate({
            opacity: 1
        });
        btnBottomElem.animate();

        mobileMenu.removeClass('header__mobile-menu_open');
        sliderElem.play();

        $(this).
            animate()
            .removeClass("burger_opened")
            .addClass("burger_closed");

        return;
    }
})

const btnBurger2 = $('#burger2');
const btnTopElem2 = $('#burger2 .burger__elem_top');
const btnMiddleElem2 = $('#burger2 .burger__elem_middle');
const btnBottomElem2 = $('#burger2 .burger__elem_bottom');
const mobileMenu2 = $('.header__mobile-menu_sec');

btnBurger2.on('click', function () {
    if ($(this).hasClass("burger_closed")) {
        btnTopElem2.animate()
        btnMiddleElem2.animate({
            opacity: 0
        }, {
            duration: 100
        });
        btnBottomElem2.animate();

        mobileMenu2.addClass('header__mobile-menu_open');
        sliderElem.pause();

        $(this)
            .removeClass("burger_closed")
            .addClass("burger_opened");

        return;
    }

    if ($(this).hasClass("burger_opened")) {
        btnTopElem2.animate()
        btnMiddleElem2.animate({
            opacity: 1
        });
        btnBottomElem2.animate();

        mobileMenu2.removeClass('header__mobile-menu_open');
        sliderElem.play();

        $(this)
            .removeClass("burger_opened")
            .addClass("burger_closed");

        return;
    }
})

sliderElem = new Glide('.glide', {
    type: 'carousel',
    autoplay: 3000
})
sliderElem.mount();

var mySwiper = new Swiper('.swiper-container', {
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 3
        },
        320: {
            slidesPerView: 2
        }
    },
    slidesPerColumn: 2,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
    },
});
var mySwiper = document.querySelector('.swiper-container').swiper;

const filtersBtnsContainer = $('.filters');
currentActiveFilter = $('.filters__item_active');
filtersBtnsContainer.on('click', (e) => {
    var target = $(e.target);
    //let mixer = mixitup('.goods__list');

    //mySwiper.destroy();

    if (target.prop('tagName') == 'BUTTON') {
        target = target.parent();
    }

    currentActiveFilter.removeClass('filters__item_active');
    target.addClass('filters__item_active');
    currentActiveFilter = target;

    if (target.hasClass('filters__item_all')) {
        mySwiper.init();
    }
});

const navBar = $('.nav');
navBar.on("click", (e) => {
    let target = $(e.target);
    if (target.prop("tagName") == "A") e.preventDefault();
    let scrollName = target.attr("data-scroll");
    let scrollElem = $(`#${scrollName}`);
    let scrollTop = scrollElem.offset().top;

    $('html, body').animate({
        scrollTop: scrollTop
    }, 500);

});









