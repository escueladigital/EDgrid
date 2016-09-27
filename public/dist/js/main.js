'use strict';

(function () {
  // btn copiar codigo
  $(document).ready(function () {
    $('pre.copytoclipboard').each(function () {
      var $este = $(this);
      var $button = $('<button><i class="icon ion-clipboard"></i>Copiar</button>');
      $este.wrap('<div/>').removeClass('copytoclipboard');
      var $wrapper = $este.parent();
      $wrapper.addClass('copytoclipboard-wrapper').css({ position: 'relative' });
      $button.css({ position: 'absolute', top: 10, right: 10 }).appendTo($wrapper).addClass('copytoclipboard copiarCodigo ');
      /* */
      var copyCode = new Clipboard('button.copytoclipboard', {
        target: function target(trigger) {
          return trigger.previousElementSibling;
        }
      });
      copyCode.on('success', function (event) {
        event.clearSelection();
        event.trigger.textContent = 'Copiando';
        window.setTimeout(function () {
          event.trigger.textContent = 'Copiar';
        }, 2000);
      });
      copyCode.on('error', function (event) {
        event.trigger.textContent = 'Presione "Ctrl + C" para copiar';
        window.setTimeout(function () {
          event.trigger.textContent = 'Copy';
        }, 2000);
      });
    });
  });
  $(document).ready(function () {
    // empezar
    $('.section1__btn-iniciar').on('click', function (event) {
      $('#comenzar').animatescroll();
    });
    // navegador
    $('.indice-documentacion__lista').onePageNav();

    var altura = $('.indice-documentacion').offset().top;
    var alturaVentana = $(window).scrollTop();
    $(window).on('scroll', function () {
      console.log(altura);
      console.log(alturaVentana);
      if ($(window).scrollTop() > altura) {
        $('.indice-documentacion').addClass('menu-fixed');
      } else {
        $('.indice-documentacion').removeClass('menu-fixed');
      }
    });
  });
})();

console.log('prueb');