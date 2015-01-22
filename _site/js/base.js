(function() {
  $(document).ready(function() {
    return $(".js-menu-trigger,.js-menu-screen").on("click touchstart", function(e) {
      $(".js-menu,.js-menu-screen").toggleClass("is-visible");
      return e.preventDefault();
    });
  });

  jQuery(function() {
    return jQuery.mark = {
      jump: function(options) {
        var defaults;
        defaults = {
          selector: "a.scroll-on-page-link"
        };
        if (typeof options === "string") {
          defaults.selector = options;
        }
        options = jQuery.extend(defaults, options);
        return jQuery(options.selector).click(function(e) {
          var jumpobj, offset, target, thespeed;
          jumpobj = jQuery(this);
          target = jumpobj.attr("href");
          thespeed = 400;
          offset = jQuery(target).offset().top - 86;
          jQuery("html,body").animate({
            scrollTop: offset
          }, thespeed, "swing");
          return e.preventDefault();
        });
      }
    };
  });

  jQuery(function() {
    return jQuery.mark.jump();
  });

}).call(this);
