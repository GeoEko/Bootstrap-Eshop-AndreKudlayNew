window.addEventListener('scroll', function () {
  document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 135)
});
$(document).ready(function () {
  $(".owl-carousel-full").owlCarousel({
    loop: true,
    margin: 20,
    // nav: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      },
      1400: {
        items: 5
      },
      1900: {
        items: 6
      }
    }
  });
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('#top').fadeIn();
      } else {
        $('#top').fadeOut();
      }

    })
    $('#top').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 300);
      return false;

    })

  })
});