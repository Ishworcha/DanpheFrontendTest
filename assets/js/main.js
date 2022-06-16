// onepage scrolling

var sections = $("section"),
  nav = $("header"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top - nav_height - 50,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("#desktop-nav ul li a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav
        .find('#desktop-nav ul li a[href="#' + $(this).attr("id") + '"]')
        .addClass("active");
    }
  });
});

nav.find("#desktop-nav ul li a").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height,
    },
    500
  );

  return false;
});

// Responsive navbar

(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle, .nav_bar ul li a").click(function () {
      $(".nav_bar ul").slideToggle();
    });

    $(".nav_bar ul li a").click(function () {
      $(".nav_bar ul").hide();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    $(".nav_bar ul li a").click(function () {
      $("#navbar-toggle").removeClass("active");
    });
  });
})(jQuery);

// task 5 Rectangle Animation

$(".small_rectangles").click(function (e) {
  e.preventDefault();
  $(this).addClass("active").siblings().removeClass("active");
});
