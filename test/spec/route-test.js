(function () {
  'use strict';

  describe('Route component', function () {
    it('should be created',  () => {
      var r = new Route([
        new Page({
          view: '/spec/page.html'
        })
      ]);
      expect(r).to.not.be.empty;
    });
  });
})();
