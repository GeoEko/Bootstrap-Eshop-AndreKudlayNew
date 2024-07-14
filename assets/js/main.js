window.addEventListener('scroll', function () {
  document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 135);
});

const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById('cart-open').addEventListener('click', (e) => {
  e.preventDefault();
  offcanvasCart.toggle();
});
document.querySelectorAll('.closecart').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    offcanvasCart.hide();
    let href = item.dataset.href;
    document.getElementById(href).scrollIntoView();
  });
});
/*const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);
 
document.querySelectorAll('.closecart').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    offcanvasCart.hide();
    setTimeout(() => {
      const href = item.dataset.href;
      document.getElementById(href).scrollIntoView();
    }, 500);
 
    // let href = item.href.split('#').pop();
    /*let href = item.dataset.href;
    offcanvasCartEl.addEventListener('hidden.bs.offcanvas', () => {
      document.getElementById(href).scrollIntoView();
  })
  });
});*/

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


