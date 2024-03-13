!(function ($) {
  "use strict";

  $(document).ready(function () {
    //<--------sub menu
    $('.href-link').click(function () {
      var target_element = '#' + $(this).data('href');
      var target = $(target_element);
      var offset = 220;
      console.log(target_element);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - offset
        }, 300);
      }
    });
  });

  //to-top button start--------->
  var backBtn =$('.back-to-top');
  $(document).scroll(function () {
    var pos = $(window).scrollTop();
    var position = 800;
    var speed = 400;
  
    if (pos >= position) {
        backBtn.fadeIn(speed);
    } else {
        backBtn.fadeOut(speed);
    }
  });
  
  backBtn.click(function () {
    $("html, body").animate({
        scrollTop: 0
    },
            {
                duration: 1200
            });
  });
  //backtop button end--------->
})(jQuery);