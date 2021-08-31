$(document).ready(function () {
  // baner slider
  $('#hero-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    autoplayTimeout: 6000,
    // autoplayHoverPause: true,
    navText: [
      "<div class='nav-btn prev-slide'><i class='fad fa-angle-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fad fa-angle-right'></i></div></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // product slider 1
  $('#product-slider1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 250,
    navText: [
      "<div class='nav-btn prev-slide'><i class='fad fa-angle-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fad fa-angle-right'></i></div></div>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // product slider 2
  $('#product-slider2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 250,
    navText: [
      "<div class='nav-btn prev-slide'><i class='fad fa-angle-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fad fa-angle-right'></i></div></div>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // product slider 3
  $('#product-slider3').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 250,
    navText: [
      "<div class='nav-btn prev-slide'><i class='fad fa-angle-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fad fa-angle-right'></i></div></div>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // product slider 4
  $('#product-slider4').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 250,
    navText: [
      "<div class='nav-btn prev-slide'><i class='fad fa-angle-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fad fa-angle-right'></i></div></div>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // product slider 5
  $('#product-slider5').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 250,
    navText: [
      "<div class='nav-btn prev-slide'><i class='fad fa-angle-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fad fa-angle-right'></i></div></div>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

//prevent default
document.querySelector('.prevetD').addEventListener('click', (e) => {
  e.preventDefault();
});

// Sticky Navber

const nav = document.querySelector('#main-header');

const intialTopNav = nav.offsetTop + 30; //40

const fixNav = () => {
  // console.log(intialTopNav, window.scrollY);
  if (window.scrollY >= intialTopNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
};

window.addEventListener('scroll', fixNav);

// moving list and add categories to navber

const addingNav = document.querySelector('#moving-categories');

const movingUl = document.querySelector('#nav-toplist');

const moveUlCenter = () => {
  if (window.scrollY >= intialTopNav + 100) {
    // nav.style.paddingBottom = '5px';
    document.body.classList.add('moving-nav');
  } else {
    // nav.style.paddingBottom = '10px';
    document.body.classList.remove('moving-nav');
  }
};

window.addEventListener('scroll', moveUlCenter);

// Mobile menu

const openBtn = document.querySelector('.mobile-toggle-btn');
const mobileNav = document.querySelector('.movile-nav');
const closeBtn = document.querySelector('.closebtn');

openBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('openbnt')
})

closeBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('openbnt')
})


// scrollTop

const scrollTopBtn = document.querySelector('.backtotop');
const scrollFunction = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
}

window.onscroll = function () { scrollFunction() };

//Got top
scrollTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})