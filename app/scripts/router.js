(function ($) {
  'use strict';

  class Router {
    constructor(routes, container) {
      this.routes = routes;
      this.elem = container;

      window.onhashchange = this.onHashChange.bind(this);
      this.onHashChange();
    }

    onHashChange(evt) {
      var hash = window.location.hash.substr(1);
      if (hash !== '') {
        let route = this.routes[hash];
        if (route) {
          route.render(this.elem);
        }
      } else {
        this.routes['default'].render(this.elem);
      }
    }
  }
  
  if (window) {
    window.Router = Router;
  }
})(jQuery);
