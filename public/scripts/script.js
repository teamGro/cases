let sliderElem;

const btnBurger1 = $("#burger1");
const btnTopElem = $("#burger1 .burger__elem_top");
const btnMiddleElem = $("#burger1 .burger__elem_middle");
const btnBottomElem = $("#burger1 .burger__elem_bottom");
const mobileMenu = $(".header__mobile-menu");

btnBurger1.on("click", function () {
  if ($(this).hasClass("burger_closed")) {
    btnTopElem.animate();
    btnMiddleElem.animate(
      {
        opacity: 0,
      },
      {
        duration: 100,
      }
    );
    btnBottomElem.animate();

    mobileMenu.addClass("header__mobile-menu_open");
    sliderElem.pause();

    $(this).animate().removeClass("burger_closed").addClass("burger_opened");

    return;
  }

  if ($(this).hasClass("burger_opened")) {
    btnTopElem.animate();
    btnMiddleElem.animate({
      opacity: 1,
    });
    btnBottomElem.animate();

    mobileMenu.removeClass("header__mobile-menu_open");
    sliderElem.play();

    $(this).animate().removeClass("burger_opened").addClass("burger_closed");

    return;
  }
});

setTimeout(() => {
  $('.slider__item_sec').css('display', 'flex');
  sliderElem = new Glide(".glide", {
    type: "carousel",
    //autoplay: 3000,
  });
  sliderElem.mount();
}, 500);

$('.header').on('click', (e) => {
  let target = e.target;
  console.log(target)
  if (target.closest('.glide__slide')) {
    btnTopElem.animate();
    btnMiddleElem.animate({
      opacity: 1,
    });
    btnBottomElem.animate();

    mobileMenu.removeClass("header__mobile-menu_open");
    sliderElem.play();

    btnBurger1.animate().removeClass("burger_opened").addClass("burger_closed");
  }

  return;
});

const btnNextSlide = document.querySelector(".header__btn_right");
btnNextSlide.addEventListener("mousedown", function () {
  this.classList.add("header__btn_active");
});
btnNextSlide.addEventListener("mouseup", function () {
  this.classList.remove("header__btn_active");
});

btnNextSlide.addEventListener("touchstart", function () {
  this.classList.add("header__btn_active");
});
btnNextSlide.addEventListener("touchend", function () {
  this.classList.remove("header__btn_active");
});

const btnPrevSlide = document.querySelector(".header__btn_right");
btnPrevSlide.addEventListener("mousedown", function () {
  this.classList.add("header__btn_active");
});
btnPrevSlide.addEventListener("mouseup", function () {
  this.classList.remove("header__btn_active");
});

btnPrevSlide.addEventListener("touchstart", function () {
  this.classList.add("header__btn_active");
});
btnPrevSlide.addEventListener("touchend", function () {
  this.classList.remove("header__btn_active");
});

let goodsSlider = new Glide(".glide_2", {
  type: "carousel",
  perView: 1,
}).mount();
let isSliderExist = true;

let mixer = mixitup(".goods__list-sort");
const goodsList = $(".goods__list_slides");
const btnGoddsNext = $(".goods__next");
const listForSorting = $(".goods__list-sort");
const filtersBtnsContainer = $(".filters");
currentActiveFilter = $(".filters__item_active");

filtersBtnsContainer.on("click", (e) => {
  var target = $(e.target);
  console.log(target);
  if (target.prop('tagName') == 'UL') {
    console.log(target.prop('tagName'));
    return;
  }

  if (target.prop("tagName") == "BUTTON") {
    target = target.parent();
  }

  currentActiveFilter.removeClass("filters__item_active");
  target.addClass("filters__item_active");
  currentActiveFilter = target;

  let targetIDValue = target.prop("id");

  if (isSliderExist && targetIDValue == "goods-all") return;

  if (targetIDValue == "goods-all" && isSliderExist == false) {
    goodsSlider = new Glide(".glide_2", {
      type: "carousel",
    }).mount();
    goodsList.removeClass("goods__list_inactive");
    listForSorting.addClass("goods__list-sort_inactive");
    isSliderExist = true;
    btnGoddsNext.css("display", "block");
    return;
  }

  if (isSliderExist) {
    goodsSlider.destroy();
    goodsSlider = null;
    isSliderExist = false;
    btnGoddsNext.css("display", "none");

    goodsList.addClass("goods__list_inactive");
    listForSorting.removeClass("goods__list-sort_inactive");
  }
});



const navBar = $(".nav");
navBar.on("click", (e) => {
  let target = $(e.target);
  if (target.prop("tagName") == "A") e.preventDefault();
  let scrollName = target.attr("data-scroll");
  let scrollElem = $(`#${scrollName}`);
  let scrollTop = scrollElem.offset().top;

  $("html, body").animate(
    {
      scrollTop: scrollTop,
    },
    500
  );
});

// popup
const popup = $(".popup");
const popupBox = $('.popup__box');

const popupBtn = $(".cooperation__btn");
$(".cooperation__btn").on("click", (e) => {
  e.preventDefault();
  let topScroll = $(window).scrollTop();
  popup.removeClass('popup_close').addClass("popup_active");
  popupBox.css("transform", `translateY(${topScroll}px)`);
});

const closePopupBtn = $(".popup__close");
closePopupBtn.on("click", () => {
  popup.removeClass("popup_active").addClass('popup_close');
});

popup.on('click', (e) => {
  if ($(e.target).hasClass('popup__box') || $(e.target).hasClass('popup')) {
    popup.removeClass('popup_active').addClass("popup_close");
    let topScroll = $(window).scrollTop() + 100;
    popupBox.css("transform", `translateY(-${topScroll}vh)`)
  }
});

$('.slider__link').on('click', (e) => {
  e.preventDefault();
  console.log(1)
  let topScroll = $(window).scrollTop();
  popup.removeClass('popup_close').addClass("popup_active");
  popupBox.css("transform", `translateY(${topScroll}px)`);
})

//height for list
const popupForm = $(".popup__form");
let heightChildrenInPopupForm = 0;
popupForm.children().each(function () {
  heightChildrenInPopupForm += $(this).height();
});
const popupListHeight = $(".popup__list").height();
heightChildrenInPopupForm -= popupListHeight;

const popupContainerHeight = $(".popup__container").height();
$(".popup__list").height(
  (popupContainerHeight - heightChildrenInPopupForm) / 2
);

const chkAgree = $('.popup__wrap_agree');
const labelAgree = $('.popup__agree-label');
const listWithChk = $(".popup__list");

chkAgree.on('click', function (e) {
  let target = $(e.target);

  if (target.prop("tagName") != "DIV") {
    target = target.closest(".popup__wrap_agree");
  }

  let chkLabel = target.find(".popup__agree-label");
  if (!chkLabel.hasClass("popup__agree-label_active")) {
    chkLabel.addClass("popup__agree-label_active");
    listWithChk.removeClass('popup__list_inactive');
  } else {
    chkLabel.removeClass("popup__agree-label_active");
    listWithChk.addClass('popup__list_inactive');
    $('.popup__label_active').each(function (i) {
      $(this).removeClass('popup__label_active');
    })
  }
});

listWithChk.on("click", function (e) {
  if ($(this).hasClass('popup__list_inactive')) return;

  let target = $(e.target);
  if (target.prop("tagName") != "LI") {
    target = target.closest(".popup__item");
  }

  let chkLabel = target.find(".popup__label");
  if (!chkLabel.hasClass("popup__label_active")) {
    chkLabel.addClass("popup__label_active");
  } else {
    chkLabel.removeClass("popup__label_active");
  }
});


goodsList.on('click', (e) => {
  let target = $(e.target);
  if (target.prop('tagName') == "UL") return;

  if (!target.hasClass('goods__item')) {
    target = target.closest('.goods__item');
  }

  let topScroll = $(window).scrollTop();
  popup.removeClass('popup_close').addClass("popup_active");
  popupBox.css("transform", `translateY(${topScroll}px)`);

  $('.popup__label_active').each(function () {
    $(this).removeClass('popup__label_active');
  })

  listWithChk.children().each(function () {
    if ($(this).attr('id') == target.attr('data-type')) {
      $(this).remove();
      $(this).insertBefore($('.popup__item:first-child'));
      $(this).find('.popup__label').addClass("popup__label_active");
    }
  })

})

listForSorting.on('click', (e) => {
  let target = $(e.target);
  if (target.prop('tagName') == "UL") return;
  let topScroll = $(window).scrollTop();
  popup.removeClass('popup_close').addClass("popup_active");
  popupBox.css("transform", `translateY(${topScroll}px)`);
})


