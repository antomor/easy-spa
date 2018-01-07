(function () {
  'use strict';

  describe('Route component', () => {
    //Creation test
    describe('should be created',  () => {
      it('with no Page', () =>{
        var r = new Route([
        ]);
        expect(r).to.not.be.empty;
      });

      it('with one Page', () =>{
        var r = new Route([
          new Page({
            view: '/spec/page.html'
          })
        ]);
        expect(r).to.not.be.empty;
      });

      it('with more than one Page', () =>{
        var r = new Route([
          new Page({
            view: '/spec/page.html'
          }),
          new Page({
            view: '/spec/menu.html'
          })
        ]);
        expect(r).to.not.be.empty;
      });
    });

    //render test
    describe('should render',  () => {      
      it('with no Page', () =>{
        let elem = document.createElement('div');
        elem.innerHTML = '';
        var r = new Route([
        ]);
        expect(r).to.not.be.empty;
        return r.render(elem).then(() => {
          expect(elem.innerHTML).to.equal('');
        });
      });

      it('with one Page', () =>{
        let elem = document.createElement('div');
        elem.innerHTML = '';
        var r = new Route([
          new Page({
            view: '/spec/page.html'
          })
        ]);
        expect(r).to.not.be.empty;
        return r.render(elem).then(() => {
          return $.get('spec/page.html').then(function (content) {
            expect(elem.children.length).to.equal(1);
            expect(elem.children[0].innerHTML).to.equal(content);  
          });
        });
      });

      it('with more than one Page', () => {
        let elem = document.createElement('div');
        elem.innerHTML = '';
        var r = new Route([
          new Page({
            view: '/spec/page.html'
          }),
          new Page({
            view: '/spec/menu.html'
          })
        ]);
        expect(r).to.not.be.empty;
        return r.render(elem).then(() => {
          return $.get('spec/page.html').then(function (page) {
            return $.get('spec/menu.html').then(function (menu) {              
              expect(elem.children.length).to.equal(2);
              expect(elem.children[0].innerHTML).to.equal(page);
              expect(elem.children[1].innerHTML).to.equal(menu);
            });
          });
        });
      });
    });

  });
})();
