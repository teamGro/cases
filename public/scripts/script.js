$(function () {
    const headerBtnNextImg = $('.header__btn_right');
    const headerBtnPrevImg = $('.header__btn_left');

    headerBtnNextImg.on('click', () => {

        console.log('next');
    })

    headerBtnPrevImg.on('click', () => {
        console.log('prev');
    })
})

new Glide('.glide', {
    perView: 1,
    startAt: 0
}).mount()