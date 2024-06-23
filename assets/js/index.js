$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});



const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav?.offsetHeight + 150) {
    nav.classList.add("navbar-active");
   nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}

var owl = $("#owl");
  owl.owlCarousel({
    items: 1,
    navigation: true,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fas fa-chevron-left owlNav-left'></i>",
      "<i class='fas fa-chevron-right owlNav-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      100: {
        items: 1,
        nav: true,
      },
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
        nav: false,
      },
      1600: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });


  $(document).ready(function () {
    $('#accordion').on('show.bs.collapse', function (e) {
      var $cardArrow = $(e.target).prev('.accordion-title').find('.card-arrow');
      $cardArrow.find('i').removeClass('fa-plus').addClass('fa-minus');
      $cardArrow.css('transform', 'rotate(0deg)');
    }).on('hide.bs.collapse', function (e) {
      var $cardArrow = $(e.target).prev('.accordion-title').find('.card-arrow');
      $cardArrow.find('i').removeClass('fa-minus').addClass('fa-plus');
      $cardArrow.css('transform', 'rotate(0deg)');
    });
  });

  function addTitleToLinks() {
    var links = document.querySelectorAll('a');
  
    links.forEach(function(link) {
        if (!link.hasAttribute('title')) {
            var linkText = link.textContent;
            link.setAttribute('title', linkText);
        }
    });
  }
  
  addTitleToLinks();
  
  


  $(document).ready(function () {
    $('.tabs_ul li:first-child').addClass('active');
    $('.tab-content .tab-pane:first-child').addClass('in active');

    $('.tabs_ul a').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
    
        $('.tabs_ul .active').removeClass('active');
        $this.parent().addClass('active');
    
        $('.tab-content .tab-pane').removeClass('in active');
        var target = $this.attr('href');
        $(target).addClass('in active');
    });
});
  
  
  

  
  $(document).ready(function(){
    $(".carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      arrow: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  