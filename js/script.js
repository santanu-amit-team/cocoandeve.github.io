//preloader
$(window).bind("load", function () {
  jQuery("#loader").fadeOut("slow");
  jQuery("#preloader").delay(0).fadeOut();
});


//slider navbar
// function openbtn() {
//   document.getElementById("mysidebar").style.width = "460px";
// }
// function closebtn() {
//   document.getElementById("mysidebar").style.width = "0";
// }
function openbtn() {
  $("#mysidebar").css({"width": "460px", "max-width": "95%"});
}
function closebtn() {
  $("#mysidebar").css({"width": "0"});
}


//sticky navbar
// window.onscroll = function() {myFunction()};
//   var header = document.getElementById("header");
//   var sticky = header.offsetTop;

//   function myFunction() {
//     if (window.pageYOffset > sticky) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   }


//scroll to top script
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});  

/*single slider*/
$('.single-item').slick({
  dots: true, /*for use list dots*/
});  

/*Center Mode*/
$('.center').slick({
  dots: true,  
  centerMode: true,
  centerPadding: '120px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

/*Center Mode*/
$('.center2').slick({
  dots: true,  
  centerMode: true,
  centerPadding: '120px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});


//tab script start
// tab-1
$('ul.tabs1 li').click(function () {
  var tab_id = $(this).attr('href');

  $('ul.tabs1 li').removeClass('current');
  $('.tab-content1').removeClass('current');

  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
})
// tab-2
$('ul.tabs2 li').click(function () {
  var tab_id = $(this).attr('href');

  $('ul.tabs2 li').removeClass('current');
  $('.tab-content2').removeClass('current');

  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
})
//tab script end

//btn hover text chage 
$(document).ready(function() {
  $('.cart_btn').hover(function() {
    $(this).html('Add To Cart');
  }, function() {
    $(this).html('Choose style');
  });
});

//toggle script
$("#promo").click(function(){
  $("#promo_box").slideToggle();
});

//product count 
$('.add').click(function () {
  if ($("#count").val() < 3) {
    $("#count").val(+$("#count").val() + 1);
  }
});
$('.sub').click(function () {
  if ($("#count").val() > 1) {
    if ($("#count").val() > 1) $("#count").val(+$("#count").val() - 1);
  }
});

//AOS script

AOS.init({
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


