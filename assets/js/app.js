$(document).ready(function(){

  "use strict";

  /******************************/

  /* PRELOADER JS */

  /******************************/
  
  $(window).on("load", function () {
      $('.ps_spinner').fadeOut();
      $('.ps_preloader').delay(450).fadeOut('slow');
  });

  /******************************/

  /* NAV COLLAPSE JS */

  /******************************/
  
  menuToggle();
  subMenuToggle();
  

});

function menuToggle(){
  $('.io-sidebar_content').on('click', function(e){
    e.stopPropagation();
  });

  $('.io-sidebar_trigger, #off-sidebar').on("click", function () {
    $('html').toggleClass('nav_opened');
  });
}

function subMenuToggle(){

  $('li.menu-item').on("click", function () {
    $(this).children('.sub-menu').slideToggle(250);
  });

}