$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");

      $('html').toggleClass("menu-active");
    });

      $('.insight-slider').flickity({
        // options
        cellAlign: 'left',
        freeScroll: true,
        contain: false,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        adaptiveHeight: true,
        wrapAround: true,
        watchCSS: true
      });


      $('.events-slider').flickity({
        // options
        cellAlign: 'left',
        freeScroll: true,
        contain: false,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        adaptiveHeight: true,
        wrapAround: true,
        watchCSS: true
      });

  });