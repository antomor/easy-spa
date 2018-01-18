(function (Router, Route, Page) {

  let routes = {
    'default': new Route([
      new Page({
        view: '/scripts/components/menu/menu.html'
      }),
      new Page({
        view: '/scripts/pages/home/home.html'
      })
    ]),
    '/home': new Route([
      new Page({
        view: '/scripts/components/menu/menu.html'
      }),
      new Page({
        view: '/scripts/pages/home/home.html'
      })
    ]),
    '/about': new Route([
      new Page({
        view: '/scripts/components/menu/menu.html'
      }),
      new Page({
        view: '/scripts/pages/about/about.html'
      }),
      new Page({
        view: '/scripts/pages/contact/contact.html'
      })
    ]),
    '/contact': new Route([
      new Page({
        view: '/scripts/components/menu/menu.html'
      }),
      new Page({
        view: '/scripts/pages/contact/contact.html'
      })
    ]),
    '/test': new Route([
      new Page({
        view: '/scripts/components/menu/menu.html'
      }),
      new Page({
        view: '/scripts/pages/test/test.html'
      })
    ]),
  };
  var router = new Router(routes, document.querySelector('router'));


})(Router, Route, Page);
