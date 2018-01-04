(function ($) {
  'use strict';

  function Page(params) {
    function render(elem) {
      return $.get(params.view)
        .then(function (res) {
            let ret = document.createElement('div');
            if (res) {
              ret.innerHTML = res;
            }
            return Promise.resolve(ret);
          },
          function (error) {
            let ret = document.createElement('div');
            return Promise.resolve(ret);
          });
    }
    return {
      render: render
    }
  }

  function Route(pages) {
    let _pages = pages;

    function render(elem) {
      elem.innerHTML = '';
      _pages.forEach(page => {
        page.render(elem).then(rendered => {
          elem.append(rendered);
        });
      });
    }
    return {
      render: render
    }
  }

  function Router(params, container) {
    let routes = params;

    function onHashChange(evt) {
      var hash = window.location.hash.substr(1);
      if (hash !== '') {
        let route = routes[hash];
        if (route) {
          route.render(this.elem);
        }
      } else {
        routes['default'].render(this.elem);
      }
    }

    if (!container) {
      throw new Exception('No router found');
    }
    var ret = {
      elem: container
    };
    let hashChanged = onHashChange.bind(ret);
    window.onhashchange = hashChanged;
    hashChanged();

    return ret;
  }

  if (window) {
    window.Router = Router;
    window.Route = Route;
    window.Page = Page;
  }
})(jQuery);
