

$(document).ready(function () {
  /* $(window).resize(
     $("#header").height($(this).height())
   );*/
  new WOW().init();

  // $(window).on("load", function(){
  //   nav.removeClass("fix");
  //   $("a").css("color", "white");
  // });
  $(window).scroll(function () {
    nav = $(".navbar");
    if (($(window).scrollTop()) > 100) {
      nav.addClass("fix");
      $("a, h1, .fa-bars").css("color", "black");
    } else {
      nav.removeClass("fix");
      $("a").css("color", "white")
    };
  });
  var scroll = $(".scroll"),
    nav = $(".navbar"),
    but = $("#header button"),
    he =   $("html, body").height,
    serv = $("#Our-services");
  scroll.on("click", function () {
    $('html, body').animate({
      scrollTop: "0px"
    }, 1500);
  })
  but.on("click", function(){
    $("html, body").animate({
      scrollTop:"10000px"
    }, 14000)
  })

  $(window).resize(function () {
    if ((screen.width >= 480) & (screen.width <= 768)) {
      $("#Portfolio button").text("A")
    }
  }
  );
  $(window).scroll(function () {
    /* if ($(".count").offset().top < $(window).scrollTop()) {
       $(".timer").countTo();
     }; */
    if ($(window).scrollTop() >= $(".count").offset().top - 500) {
      $(".timer").countTo();
    }
    if ($(this).scrollTop() > 700) {
      scroll.fadeIn()
    } else {
      scroll.fadeOut()
    };

  });
  $(".navbar li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active")
  });
  $(".navbar li a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $("#" + $(this).data("scroll")).offset().top
    }, 1000);
  });
  $(".fa-angle-double-down").on("click", function () {
    $("html, body").animate({
      scrollTop: $("#about-us").offset().top
    }, 1000);
  });
  $("#Portfolio button").on("click", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $("html").niceScroll({
    cursorcolor: "#38ef7d",
    cursorwidth: "10px",
    cursorborder: "none",
    cursorborderradius: "50px",
    cursorheight: "480px"
  }
  );
  var mixer = mixitup(".gallery")

});
