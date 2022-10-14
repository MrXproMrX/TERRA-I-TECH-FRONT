var i=0;
	$(".Catalog__top__max").each(function(){
  length
	i++;
	$(this).attr("class","Catalog__top__max"+i);
});

var i=0;
	$(".Catalog__top").each(function(){
  length
	i++;
	$(this).attr("class","Catalog__top"+i);
});

// ----------------------------------------------------------------------

const titles = document.querySelectorAll('.header__Catalog__button ');
const items = document.querySelectorAll('.header__Catalog');

titles.forEach(label => {
  label.addEventListener('click', (e) => {
    const cleackedTitles = e.currentTarget;
    const element = cleackedTitles.parentNode;
    if (element.classList.contains('header__Catalog__active')) {
      element.classList.remove('header__Catalog__active');
    } else {
      items.forEach(element => {
        if (element.classList.contains('header__Catalog__active')) {
          element.classList.remove('header__Catalog__active');
        }
      });
      element.classList.add('header__Catalog__active');
    }
  });
})

// ----------------------------------------------------------------------

const buttons = document.querySelectorAll('.header__Catalog__menu__link');
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('HeaderActive');
    
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('HeaderActive');
      }
    });
  });
});

// ----------------------------------------------------------------------

const buttons_1 = document.querySelectorAll('.products__Catalog__menu__link');
buttons_1.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('productsActive');
    
    buttons_1.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('productsActive');
      }
    });
  });
});


// ----------------------------------------------------------------------

const buttons_2 = document.querySelectorAll('.products__title__h2 ');
buttons_2.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('productsActive002');
    
    buttons_2.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('productsActive002');
      }
    });
  });
});

// ----------------------------------------------------------------------

$(document).ready(function(){
    $('.none_max_1').click(function(){
        $('.header__from').css('opacity','1')
        $('.header__from').css('top','50%')
        $('.none_max_2').css('display','block')
        $('.none_max_1').css('display','none')
      })
    });
  
$(document).ready(function(){
    $('.none_max_2').click(function(){
      $('.header__from').css('opacity','1')
      $('.header__from').css('top','-50%')
      $('.none_max_2').css('display','none')
      $('.none_max_1').css('display','block')
    })
});

// ----------------------------------------------------------------------

$(document).ready(function(){
    $('.max_none_max_1').click(function(){
      $('.header__burger__menu').fadeTo(500, 1)
      $('.header__burger__menu').css('display','flex')
      $('.header__burger__x__link').css('display','block')
      $('.max_none_max_1').css('display','none')
    })
  });
  
$(document).ready(function(){
    $('.header__burger__x__link').click(function(){
      $('.header__burger__menu').fadeTo(500, 1)
      $('.header__burger__menu').css('display','none')
      $('.header__burger__x__link').css('display','none')
      $('.max_none_max_1').css('display','block')
    })
});