$(document).ready(function(){
  $('.main-slider1').slick({
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.main-slider__categories').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          
        },
      },
    ]
  });
  
  $('.main-slider2').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2
        },
      },
    ]
  });

  $('.main-slider3').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        },
      },
    ]
  });

  $('.main-slider3-small').slick({
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
  });

});