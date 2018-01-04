(function (Router, Route, Page) {

  let routes = {
    'default': Route([
      Page({
        view: '/scripts/components/menu/menu.html'
      }),
      Page({
        view: '/scripts/pages/home/home.html'
      })
    ]),
    '/home': Route([
      Page({
        view: '/scripts/components/menu/menu.html'
      }),
      Page({
        view: '/scripts/pages/home/home.html'
      })
    ]),
    '/about': Route([
      Page({
        view: '/scripts/components/menu/menu.html'
      }),
      Page({
        view: '/scripts/pages/about/about.html'
      }),
      Page({
        view: '/scripts/pages/contact/contact.html'
      })
    ]),
    '/contact': Route([
      Page({
        view: '/scripts/components/menu/menu.html'
      }),
      Page({
        view: '/scripts/pages/contact/contact.html'
      })
    ]),
    '/test': Route([
      Page({
        view: '/scripts/components/menu/menu.html'
      }),
      Page({
        view: '/scripts/pages/test/test.html'
      })
    ]),
  };
  var router = Router(routes, document.querySelector('router'));


})(Router, Route, Page);
