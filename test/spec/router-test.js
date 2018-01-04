(function () {
  'use strict';

  describe('Router component', function () {
    it('should be created',  () => {
      let routes = {
        'default': new Page({
          view: '/spec/page.html'
        })
      };
      let routerContainer = document.createElement('div');
      let router = new Router(routes, routerContainer);
      expect(router).to.not.be.empty;
    });
  });
})();
