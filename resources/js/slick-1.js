$('.slider-1').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left my-arrow left-arrow-slider1"></i>',
  nextArrow: '<i class="fas fa-chevron-right my-arrow right-arrow-slider1"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider-2').slick({
  dots: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left my-arrow left-arrow-slider1"></i>',
  nextArrow: '<i class="fas fa-chevron-right my-arrow right-arrow-slider1"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider-3').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left my-arrow left-arrow-slider1"></i>',
  nextArrow: '<i class="fas fa-chevron-right my-arrow right-arrow-slider1"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});