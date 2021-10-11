$(function () {

   // $('.plan__slider').slick({
   //    arrows: false,
   //    dots: true,
   //    infinite: false,
   //    slidesToShow: 1,
   //    slidesToScroll: 1
   // })

   // var slider, btn, tabC, prevIndex, objTab = {};

   // btn = $(".plan__btn");
   // tabC = $(".plan__content");

   // prevIndex = 0;

   // btn.on("click", function () {

   //    var th, thIndex;

   //    th = $(this);
   //    thIndex = th.index();

   //    if (!th.hasClass("active")) {
   //       if (prevIndex != thIndex && prevIndex !== 'undefined') {
   //          btn.eq(prevIndex).removeClass("active");
   //          tabC.eq(prevIndex).removeClass("show");
   //       }
   //       btn.eq(thIndex).addClass("active");
   //       tabC.eq(thIndex).addClass("show");
   //       prevIndex = thIndex;

   //       //slick position filter
   //       //if you have problem with slick in tabs, use next option
   //       //magic option
   //       tabC.eq(thIndex).find(".slider").slick('setPosition');
   //    }
   // });

   slider = $(".slider");

   slider.slick({
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1
   });


   $('.photo__inner').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".photobg__inner",
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true
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
            breakpoint: 767,
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

   $('.photobg__inner').slick({
      infinite: true,
      arrows: false,
      dots: false,
      vertucal: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".photo__inner"

   });

   $('.header__menu-btn').on('click', function () {
      $('.header__menu').toggleClass('header__menu--active')
   });

   var mixer = mixitup('.plan__inner', {
      load: {
         filter: '.studio'
      }
   });
});