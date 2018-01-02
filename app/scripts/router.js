(function ($) {
  'use strict';

  function Page(params) {
    function render(elem) {
      $.get(params.view)
        .then(function (res) {
          if (res) {
            elem.innerHTML = res;
          }
        });
    }
    return {
      render: render
    }
  }

  function Route(pages) {
    let _pages = pages;

    function render(elem) {
      _pages.forEach(page => {
        page.render(elem);
      });
    }
    return {
      render: render
    }
  }

  function Router(params) {
    let routes = params;

    function onHashChange(evt) {
      if (evt) {
        let newUrl = evt.newURL;
        let hashIndex = newUrl.indexOf('#');
        if (hashIndex > 0) {
          let routeName = newUrl.substr(hashIndex + 1);
          let route = routes[routeName];
          if (route) {
            route.render(this.elem);
          }
        } else {
          routes['/home'].render(this.elem);
        }
      } else {
        routes['/home'].render(this.elem);
      }
    }

    var elem = document.querySelector('router');
    if (!elem) {
      throw new Exception('No rotuer found');
    }
    var ret = {
      elem: elem
    };
    let hashChanged = onHashChange.bind(ret);
    window.onhashchange = hashChanged;
    hashChanged();

    return ret;
  }
  
  if ( window ) {
    window.Router = Router;
    window.Route = Route;
    window.Page = Page;
  }
})(jQuery);
