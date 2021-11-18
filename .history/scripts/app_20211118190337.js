$(".customer-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    dots:true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg" /></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg" /></button>`,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        },
      
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});