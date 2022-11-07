$(document).ready(function(){  

  $(document).ready(function(){
    $('.SwitchTpLink__mrx1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.SwitchTpLink__mrx2'
    });

    $('.SwitchTpLink__mrx2').slick({
                    arrows: false,
                    asNavFor:'.SwitchTpLink__mrx1',
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                     responsive: [
                   {
                  breakpoint: 600,
                  settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                  }
                },
                 {
                  breakpoint: 480,
                  settings: {
                  slidesToShow: 2,
                 slidesToScroll: 1
                  }
                 },
               ]
    });
  });

  $('.slaeder__list').slick({
      dots: false,
      arrows:true,
      autoplaySpeed:3000,
      infinite: true,
      speed: 1500,
      autoplay:true,
      fade: true,
  });

  $('.WeAre__item__slic').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
       breakpoint: 1600,
       settings: {
       slidesToShow: 4,
       slidesToScroll: 1,
       infinite: true,
       dots: false
       }
     },
      {
       breakpoint: 940,
       settings: {
       slidesToShow: 3,
      slidesToScroll: 1
       }
      },

      {
       breakpoint: 680,
       settings: {
       slidesToShow: 2,
      slidesToScroll: 1
       }
      },

      {
       breakpoint: 380,
       settings: {
       slidesToShow: 1,
      slidesToScroll: 1
       }
      },
    ]
  });

  $('.AboutSlic__top').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
     breakpoint: 1600,
     settings: {
     slidesToShow: 4,
     slidesToScroll: 1,
     infinite: true,
     dots: false
     }
   },
    {
     breakpoint: 940,
     settings: {
     slidesToShow: 3,
    slidesToScroll: 1
     }
    },

    {
     breakpoint: 680,
     settings: {
     slidesToShow: 2,
    slidesToScroll: 1
     }
    },

    {
     breakpoint: 380,
     settings: {
     slidesToShow: 1,
    slidesToScroll: 1
     }
    },
  ]
  });
}); 
