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

let goodsSlider = new Glide('.glide_2', {
    type: 'carousel'
}).mount();
let isSliderExist = true;

//let mixer = mixitup('.goods__list');
const goodsList = $('.goods__list_slides');
const listForSorting = $('.goods__list-sort');
const filtersBtnsContainer = $('.filters');
currentActiveFilter = $('.filters__item_active');
filtersBtnsContainer.on('click', (e) => {
    var target = $(e.target);

    if (target.prop('tagName') == 'BUTTON') {
        target = target.parent();
    }

    currentActiveFilter.removeClass('filters__item_active');
    target.addClass('filters__item_active');
    currentActiveFilter = target;

    let targetIDValue = target.prop('id');

    if (isSliderExist && targetIDValue == 'goods-all') return;

    if (targetIDValue == 'goods-all' && isSliderExist == false) {
        goodsSlider = new Glide('.glide_2', {
            type: 'carousel'
        }).mount();
        goodsList.removeClass('goods__list_inactive');
        listForSorting.addClass('goods__list-sort_inactive');
        isSliderExist = true;
        return;
    }

    if (isSliderExist) {
        goodsSlider.destroy();
        goodsSlider = null;
        isSliderExist = false;

        goodsList.addClass('goods__list_inactive');
        listForSorting.removeClass('goods__list-sort_inactive');
    }

    Array.from(listForSorting.children()).forEach(i => {
        if (i.getAttribute('data-sort') == targetIDValue) {
            i.classList.add('goods__item-sort_active');
        } else {
            i.classList.remove('goods__item-sort_active');
        }
    })
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

// popup
const listWithChk = $('.popup__list');
listWithChk.on('click', (e) => {
    let target = $(e.target);
    if (target.prop('tagName') != 'LI') {
        target = target.closest('.popup__item');
    }

    let chkLabel = target.find('.popup__label');
    if (!chkLabel.hasClass('popup__label_active')) {
        console.log(chkLabel)
        chkLabel.addClass('popup__label_active');
    } else {
        chkLabel.removeClass('popup__label_active');
    }
});

const sliderLink = $('.slider__link');
sliderLink.on('click', (e) => {
    e.preventDefault()
    document.body.style.overflow = "hidden";
    let topScroll = $(window).scrollTop();
    popup.addClass('popup_active');
    popup.css('transform', `translateY(${topScroll}px)`);
})

const popup = $('.popup');
const closePopupBtn = $('.popup__close');
closePopupBtn.on('click', () => {
    popup.removeClass('popup_active');
    let topScroll = $(window).scrollTop() + 100;
    popup.css('transform', `translateY(-${topScroll}vh)`);
    document.body.style.overflow = "";
});








