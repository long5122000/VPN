$(".customer-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    dots:true,
    default:"50px",
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg" /></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg" /></button>`
});