$(".customer-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:3,
    dots:true,
    centerMode:true,
    centerPadding: '60px',
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg" /></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg" /></button>`
});