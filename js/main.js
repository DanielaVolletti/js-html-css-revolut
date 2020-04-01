/*
parto da buttare in pagina gli elementi grezzi (non mi interessa la grafica per ora);
ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi
*/

$(document).ready(function() {

  // faccio apparire e scomparire al click il dropdown di ciascun dropdown menù
  $('.dropdown a').click(
    function() {
      $(this).siblings('.mio-dropdown').toggle();
    }
  )

  // faccio apparire menu hamburger al click
  $('.icona-hamburger').click(
  function () {
      $(".hamburgher").addClass('fade-in');
    }
  )

  //chiudiamo il menu
  $('.fa-times').click(
    function () {
      $(".hamburgher").removeClass('fade-in');
    }
  )

  // faccio apparire dropdown menu hamburger
  $('.dropdown-due').click(
    function() {
      $(this).children('.mio-dropdown-due').slideToggle();
    }
  )

});
