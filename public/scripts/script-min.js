let sliderElem;const btnBurger1=$("#burger1"),btnTopElem=$("#burger1 .burger__elem_top"),btnMiddleElem=$("#burger1 .burger__elem_middle"),btnBottomElem=$("#burger1 .burger__elem_bottom"),mobileMenu=$(".header__mobile-menu");btnBurger1.on("click",function(){return $(this).hasClass("burger_closed")?(btnTopElem.animate(),btnMiddleElem.animate({opacity:0},{duration:100}),btnBottomElem.animate(),mobileMenu.addClass("header__mobile-menu_open"),sliderElem.pause(),void $(this).animate().removeClass("burger_closed").addClass("burger_opened")):$(this).hasClass("burger_opened")?(btnTopElem.animate(),btnMiddleElem.animate({opacity:1}),btnBottomElem.animate(),mobileMenu.removeClass("header__mobile-menu_open"),sliderElem.play(),void $(this).animate().removeClass("burger_opened").addClass("burger_closed")):void 0}),(sliderElem=new Glide(".glide",{type:"carousel",autoplay:3e3})).mount();const btnNextSlide=document.querySelector(".header__btn_right");btnNextSlide.addEventListener("mousedown",function(){this.classList.add("header__btn_active")}),btnNextSlide.addEventListener("mouseup",function(){this.classList.remove("header__btn_active")}),btnNextSlide.addEventListener("touchstart",function(){this.classList.add("header__btn_active")}),btnNextSlide.addEventListener("touchend",function(){this.classList.remove("header__btn_active")});const btnPrevSlide=document.querySelector(".header__btn_right");btnPrevSlide.addEventListener("mousedown",function(){this.classList.add("header__btn_active")}),btnPrevSlide.addEventListener("mouseup",function(){this.classList.remove("header__btn_active")}),btnPrevSlide.addEventListener("touchstart",function(){this.classList.add("header__btn_active")}),btnPrevSlide.addEventListener("touchend",function(){this.classList.remove("header__btn_active")});let goodsSlider=new Glide(".glide_2",{type:"carousel",perView:1}).mount(),isSliderExist=!0,mixer=mixitup(".goods__list-sort");const goodsList=$(".goods__list_slides"),btnGoddsNext=$(".goods__next"),listForSorting=$(".goods__list-sort"),filtersBtnsContainer=$(".filters");currentActiveFilter=$(".filters__item_active"),filtersBtnsContainer.on("click",e=>{var t=$(e.target);if(console.log(t),"UL"==t.prop("tagName"))return void console.log(t.prop("tagName"));"BUTTON"==t.prop("tagName")&&(t=t.parent()),currentActiveFilter.removeClass("filters__item_active"),t.addClass("filters__item_active"),currentActiveFilter=t;let o=t.prop("id");return isSliderExist&&"goods-all"==o?void 0:"goods-all"==o&&0==isSliderExist?(goodsSlider=new Glide(".glide_2",{type:"carousel"}).mount(),goodsList.removeClass("goods__list_inactive"),listForSorting.addClass("goods__list-sort_inactive"),isSliderExist=!0,void btnGoddsNext.css("display","block")):void(isSliderExist&&(goodsSlider.destroy(),goodsSlider=null,isSliderExist=!1,btnGoddsNext.css("display","none"),goodsList.addClass("goods__list_inactive"),listForSorting.removeClass("goods__list-sort_inactive")))});const navBar=$(".nav");navBar.on("click",e=>{let t=$(e.target);"A"==t.prop("tagName")&&e.preventDefault();let o=t.attr("data-scroll"),s=$(`#${o}`).offset().top;$("html, body").animate({scrollTop:s},500)});const popup=$(".popup"),popupBox=$(".popup__box"),popupBtn=$(".cooperation__btn");$(".cooperation__btn").on("click",e=>{e.preventDefault();let t=$(window).scrollTop();popup.addClass("popup_active"),popupBox.css("transform",`translateY(${t}px)`)});const closePopupBtn=$(".popup__close");closePopupBtn.on("click",()=>{popup.removeClass("popup_active");let e=$(window).scrollTop()+100;popupBox.css("transform",`translateY(-${e}vh)`)}),popup.on("click",e=>{if($(e.target).hasClass("popup__box")||$(e.target).hasClass("popup")){popup.removeClass("popup_active");let e=$(window).scrollTop()+100;popupBox.css("transform",`translateY(-${e}vh)`)}});const popupForm=$(".popup__form");let heightChildrenInPopupForm=0;popupForm.children().each(function(){heightChildrenInPopupForm+=$(this).height()});const popupListHeight=$(".popup__list").height();heightChildrenInPopupForm-=popupListHeight;const popupContainerHeight=$(".popup__container").height();$(".popup__list").height((popupContainerHeight-heightChildrenInPopupForm)/2);const chkAgree=$(".popup__wrap_agree"),labelAgree=$(".popup__agree-label"),listWithChk=$(".popup__list");chkAgree.on("click",function(e){let t=$(e.target);"DIV"!=t.prop("tagName")&&(t=t.closest(".popup__wrap_agree"));let o=t.find(".popup__agree-label");o.hasClass("popup__agree-label_active")?(o.removeClass("popup__agree-label_active"),listWithChk.addClass("popup__list_inactive"),$(".popup__label_active").each(function(e){$(this).removeClass("popup__label_active")})):(o.addClass("popup__agree-label_active"),listWithChk.removeClass("popup__list_inactive"))}),listWithChk.on("click",function(e){if($(this).hasClass("popup__list_inactive"))return;let t=$(e.target);"LI"!=t.prop("tagName")&&(t=t.closest(".popup__item"));let o=t.find(".popup__label");o.hasClass("popup__label_active")?o.removeClass("popup__label_active"):o.addClass("popup__label_active")}),goodsList.on("click",e=>{if("UL"==$(e.target).prop("tagName"))return;let t=$(window).scrollTop();popup.addClass("popup_active"),popupBox.css("transform",`translateY(${t}px)`)}),listForSorting.on("click",e=>{if("UL"==$(e.target).prop("tagName"))return;let t=$(window).scrollTop();popup.addClass("popup_active"),popupBox.css("transform",`translateY(${t}px)`)});