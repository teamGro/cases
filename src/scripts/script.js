$(function () {
    const btnBurger1 = $('#burger1');
    const btnTopElem = $('#burger1 .burger__elem_top');
    const btnMiddleElem = $('#burger1 .burger__elem_middle');
    const btnBottomElem = $('#burger1 .burger__elem_bottom');
    const overlay = $('.overlay');

    btnBurger1.on('click', function () {
        if ($(this).hasClass("burger_closed")) {
            btnTopElem.animate()
            btnMiddleElem.animate({
                opacity: 0
            }, {
                duration: 100
            });
            btnBottomElem.animate()

            $(this)
                .removeClass("burger_closed")
                .addClass("burger_opened");

            return;
        }

        if ($(this).hasClass("burger_opened")) {
            btnTopElem.animate()
            btnMiddleElem.animate({
                opacity: 1
            });
            btnBottomElem.animate()

            $(this)
                .removeClass("burger_opened")
                .addClass("burger_closed");

            return;
        }
    })

    const btnBurger2 = $('#burger2');
    const btnTopElem2 = $('#burger2 .burger__elem_top');
    const btnMiddleElem2 = $('#burger2 .burger__elem_middle');
    const btnBottomElem2 = $('#burger2 .burger__elem_bottom');

    btnBurger2.on('click', function () {
        if ($(this).hasClass("burger_closed")) {
            btnTopElem2.animate()
            btnMiddleElem2.animate({
                opacity: 0
            }, {
                duration: 100
            });
            btnBottomElem2.animate()

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
            btnBottomElem2.animate()

            $(this)
                .removeClass("burger_opened")
                .addClass("burger_closed");

            return;
        }
    })

    new Glide('.glide', {
        type: 'carousel',
        // autoplay: 3000
    }).mount()
})


function closeMobileMenu(menuBtnObj, headerContainer, headerNav) {
    if (menuBtnObj.menu.hasClass("mobile-menu_opened")) {
        menuBtnObj.topElem.animate()
        menuBtnObj.middleElem.animate({
            opacity: 1
        });
        menuBtnObj.bottomElem.animate()

        headerContainer
            .removeClass("header__container_moved")
            .addClass("header__container")

        headerNav
            .removeClass("navigate_opened")
            .addClass("navigate_closed")


        menuBtnObj.menu
            .removeClass("mobile-menu_opened")
            .addClass("mobile-menu_closed");
        return;
    }
}