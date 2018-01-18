(function ($) {
  'use strict';

  class Page {
    constructor(params){
      this.params = params;
    }

    render() {
      return $.get(this.params.view)
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
  }

  if (window) {
    window.Page = Page;
  }
})(jQuery);