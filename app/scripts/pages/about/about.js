(function ($) {
    var About = (function About() {
      function render(elem) {
        $.get('/scripts/pages/about/about.html').then(function (res) {
          if (res) {
            $(elem).html(res);
          }
        });      
      }
      return {
        render: render
      };
    })();
  
    window.About = About;
  })(jQuery);