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

            $(this).
                animate().
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

            $(this).
                animate().
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

    let mixer = mixitup('.goods__list');

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
    })
})


