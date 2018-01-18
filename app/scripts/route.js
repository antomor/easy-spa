(function ($) {
  'use strict';

  class Route {
    constructor(pages) {
      this.pages = pages;
    }

    render(elem) {
      elem.innerHTML = '';
      var promises = this.pages.map(p => {
        return p.render(elem).then(rendered => {
          elem.append(rendered);
        });
      });
      return Promise.all(
        promises
      );
    }
  }
  if (window) {
    window.Route = Route;
  }
})(jQuery);