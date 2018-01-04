(function () {
  'use strict';

  describe('Page component', function () {
    it('should be created',  () => {
      var p = new Page({
        view: '/spec/page.html'
      });
      expect(p).to.not.be.empty;

    });

    it('should render an existing component',  () => {
      var p = new Page({
        view: '/spec/page.html'
      });
      expect(p).to.not.be.empty;
      return p.render({}).then((content) => {
        expect(content).to.be.ok;
        expect(content.innerHTML).to.equal('<div class="test"></div>');
      });
    });

    it('should render an empty content if a component doesn\'t exist',  () => {
      var p = new Page({
        view: '/spec/notExistingPage.html'
      });
      expect(p).to.not.be.empty;
      return p.render({}).then((content) => {
        expect(content).to.be.ok;
        expect(content.innerHTML).to.equal('');
      });
    });
  });
})();
