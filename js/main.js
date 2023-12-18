var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});


$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});

var swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
});


$(".qa dt").on("click", function () {
  $(this).parent().toggleClass("open");
  $(this).next().slideToggle();
});




$('.animate__animated').waypoint(function(direction) {
  // 要素が画面中央に来るとここが実行される
  if (direction === 'down') {
    $(this.element)
      .removeClass('animate__fadeOutUp')
      .addClass('animate__fadeInUp');
  }
},

{
  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.681236, lng: 139.767125},  // Coordinates for Tokyo Station
    zoom: 15
  });
}
