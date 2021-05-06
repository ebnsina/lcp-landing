import $ from 'jquery';
import 'slick-carousel/slick/slick';

$(document).ready(function () {
  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    prevArrow:
      '<span class="slick-nav slick-nav-testimonial slick-prev material-icons">chevron_left</span>',
    nextArrow:
      '<span class="slick-nav slick-nav-testimonial slick-next material-icons">chevron_right</span>',
    dots: false,
    centerMode: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
