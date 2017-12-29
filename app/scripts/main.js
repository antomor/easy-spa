(function ($) {

  var Pager = (function Pager() {
    function loadPage($elem) {
        var pageName = $elem.data('page-id');
        var container = $elem.data('page-elem');
        var page = window[pageName];
        if (page) {
          page.render(container);
        }
    }

    function init() {
      $('.page-handler').click(function () {
        var $this = $(this);
        loadPage($this);
      });

      var first = $('.page-handler')[0];
      loadPage($(first));
    }

    return {
      init: init
    }
  })();

  Pager.init();


})(jQuery);
