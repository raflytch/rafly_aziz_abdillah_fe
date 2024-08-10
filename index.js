$(document).ready(function () {
  var $carousel = $("#reviewCarousel");
  var $prevBtn = $("#prevBtn");
  var $nextBtn = $("#nextBtn");

  $prevBtn.on("click", function () {
    $carousel.animate({ scrollLeft: $carousel.scrollLeft() - 300 }, 500);
  });

  $nextBtn.on("click", function () {
    $carousel.animate({ scrollLeft: $carousel.scrollLeft() + 300 }, 500);
  });
});

$(document).ready(function () {
  var $navbar = $("nav");
  var $sectionOne = $("#section-one");
  var sectionOffset = $sectionOne.offset().top;

  $(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= sectionOffset) {
      $navbar.css("background-color", "#232340");
    } else {
      $navbar.css("background-color", "transparent");
    }
  });
});
