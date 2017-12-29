(function ($) {
    var Contact = (function Contact() {
      function render(elem) {
        $.get('/scripts/pages/contact/contact.html').then(function (res) {
          if (res) {
            $(elem).html(res);
          }
        });
      }
      return {
        render: render
      };
    })();
  
    window.Contact = Contact;
  })(jQuery);