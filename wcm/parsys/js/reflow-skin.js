// Additional skin Javascript
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window)

    // Start carousel
    $(function() {
      $('.carousel').carousel();
    });

    // activate syntax higlighting with highlight.js
    // Note: only run if `hljs` exists
    if (typeof hljs != 'undefined')
    {
      $('pre code').each(function(i, e) {hljs.highlightElement(e)});
    }

  })

}(window.jQuery)