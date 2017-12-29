(function ($) {
  var Home = (function Home() {
    function render(elem) {
      $.get('/scripts/pages/home/home.html').then(function (res) {
        if (res)
          $(elem).html(res);
      });
    }
    return {
      render: render
    };
  })();

  window.Home = Home;
})(jQuery);
