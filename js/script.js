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
  $("#mysidebar").css({"width": "460px", "max-width": "100%"});
}
function closebtn() {
  $("#mysidebar").css({"width": "0"});
}

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
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
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
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});

/*Center Mode*/
$('.center3').slick({
  dots: true,  
  centerMode: true,
  centerPadding: '120px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});

/*Center Mode-4*/
$('.center4').slick({
  dots: false,
  arrows: false,
  centerMode: false,
  centerPadding: '0',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});

/*Center Mode-5*/
$('.center5').slick({
  dots: false,
  arrows: true,
  centerMode: false,
  centerPadding: '0',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
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

// tab-3
$('ul.tabs3 li').click(function () {
  var tab_id = $(this).attr('href');

  $('ul.tabs3 li').removeClass('current');
  $('.tab-content3').removeClass('current');

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

//product count -1
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

//product count -2
$('.add2').click(function () {
  if ($("#count2").val() < 3) {
    $("#count2").val(+$("#count2").val() + 1);
  }
});
$('.sub2').click(function () {
  if ($("#count2").val() > 1) {
    if ($("#count2").val() > 1) $("#count2").val(+$("#count2").val() - 1);
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

//prod-slider
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav"
});
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: true,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false
      }
    },
    {
      breakpoint: 580,
      settings: {
        vertical: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 380,
      settings: {
        vertical: false,
        slidesToShow: 2
      }
    }
  ]
});

// accordian script
$(".hide_box").hide();

$(document).on('click', '.slide_box', function(){
 $(this).find('.hide_box').slideToggle();
 if($(this).hasClass('active'))
 {
 	console.log("yes");
 	$(this).removeClass('active');
 }
 else {
 	$(this).siblings().removeClass("active");
 	$(this).addClass("active");
 }
 $(this).siblings().find('.hide_box').slideUp();
});


// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

