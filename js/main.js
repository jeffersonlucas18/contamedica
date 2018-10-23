$(function () {
  "use strict";

  var o = $(this),
    e = $("nav ul li"),
    n = $("header .arrow"),
    t = $(".skill-line");

  function i() {
    var e = $("header").find(".caption"),
      o = $(".arrow"),
      n = $(window),
      t = n.width(),
      i = n.height(),
      a = n.scrollTop(),
      s = $(window).scrollTop(),
      l = s / 2.33,
      r = s / 5.3,
      d = .01 * s,
      c = d / 6,
      u = d / 2;
    return 767 < t && a < i ? (e.css({
      transform: "translateY(" + l + "px)",
      opacity: 1 - c
    }), o.css({
      transform: "translateY(" + r + "px)",
      opacity: 1 - u
    })) : (e.css({
      transform: "translateY(0)",
      opacity: 1
    }), o.css({
      transform: "translateY(0)",
      opacity: 1
    })), !1
  }
  if (e.each(function () {
      var e = $(this);
      0 < e.children("ul").length && e.addClass("parent"), 0 < e.children("ul.mega").length && e.addClass("mega-parent")
    }),
    $("nav").find(".parent > a").on("click", function (e) {
      if (e.preventDefault(), $(window).width() < 991) $(this).siblings("ul").slideToggle("500", "swing");
      else {
        if (!$("nav").hasClass("minimal")) return !1;
        $(this).siblings("ul").slideToggle("500", "swing")
      }
      return !1
    }),
    $(window).on("resize", function () {
      this.resizeTO && clearTimeout(this.resizeTO), this.resizeTO = setTimeout(function () {
        $(this).trigger("resizeEnd")
      }, 200)
    }),
    $(window).on("resizeEnd", function () {
      var e = $(window).width(),
        o = $("body");
      991 < e && o.removeClass("modal-open");
      var n = $(".masonry");
      0 < n.length && n.masonry("layout");
      var t = $(".blog");
      0 < t.length && t.masonry("layout")
    }),
    $("nav li.parent a").on("click", function () {
      $(this).parent().toggleClass("open")
    }),
    $(window).on("load", function () {
      $(".web-in").addClass("fade-in")
    }),
    $(".parallax").parallax(),
    $(window).on("load", function () {
      var e = $(".masonry");
      0 < e.length && e.masonry({
        itemSelector: ".grid-item",
        transitionDuration: "0",
        resize: !1,
        columnWidth: ".grid-sizer",
        percentPosition: !0
      })
    }),
    $(window).on("load", function () {
      var e = $(".blog");
      0 < e.length && e.masonry({
        itemSelector: ".blog-item",
        transitionDuration: "0",
        resize: !1,
        columnWidth: ".blog-sizer",
        percentPosition: !0
      })
    }),
    new Headroom(document.querySelector("nav"), {
      tolerance: {
        up: 15,
        down: 50
      },
      offset: 450,
      classes: {
        initial: "initial",
        pinned: "fixed",
        unpinned: "unfixed"
      }
    }).init(),
    n.on("click", function () {
      var e = $(this).parent().height();
      return $("html, body").animate({
        scrollTop: e
      }, 450), !1
    }),
    $("#c_logos .slide, .logo-slider").owlCarousel({
      loop: !0,
      margin: 10,
      nav: !1,
      autoplay: !0,
      autoplayTimeout: 2500,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 4
        },
        1e3: {
          items: 6
        }
      }
    }),
    $("#c_testimonials .slider").owlCarousel({
      loop: !0,
      margin: 10,
      dots: !1,
      nav: !0,
      items: 1,
      autoplay: !0,
      autoplayTimeout: 5e3
    }),
    $(".center-loop").owlCarousel({
      center: !0,
      animateOut: "fadeOut",
      dots: !0,
      items: 2,
      loop: !0,
      margin: 30,
      responsive: {
        600: {
          items: 4
        }
      }
    }),
    $(".center-loop-fade").owlCarousel({
      center: !0,
      animateOut: "fadeOut",
      dots: !0,
      items: 2,
      loop: !0,
      margin: 10,
      responsive: {
        800: {
          items: 4
        },
        1e3: {
          items: 5
        },
        1200: {
          items: 6
        }
      }
    }),
    $(".center-nonloop").owlCarousel({
      center: !0,
      animateOut: "fadeOut",
      dots: !0,
      items: 2,
      loop: !1,
      margin: 30,
      responsive: {
        600: {
          items: 4
        }
      }
    }),
    $(".center-nonloop-autowidth").owlCarousel({
      center: !0,
      autoWidth: !1,
      animateOut: "fadeOut",
      dots: !0,
      items: 2,
      loop: !1,
      margin: 30,
      responsive: {
        700: {
          items: 2
        },
        1500: {
          items: 3
        }
      }
    }),
    $(".slide-regular").owlCarousel({
      animateOut: "fadeOut",
      dots: !0,
      items: 2,
      loop: !1,
      margin: 30,
      responsive: {
        600: {
          items: 4
        }
      }
    }),
    $(".slide-nomargin").owlCarousel({
      animateOut: "fadeOut",
      dots: !0,
      items: 2,
      loop: !1,
      margin: 0,
      responsive: {
        600: {
          items: 4
        }
      }
    }),
    $(".single-pic").owlCarousel({
      animateOut: "fadeOut",
      dots: !0,
      items: 1,
      loop: !1
    }),
    $(".slide-half-centered").owlCarousel({
      center: !0,
      animateOut: "fadeOut",
      dots: !0,
      items: 2,
      loop: !1,
      margin: 30,
      responsive: {
        600: {
          items: 2
        }
      }
    }),
    $(".slide-half").owlCarousel({
      animateOut: "fadeOut",
      dots: !0,
      items: 2,
      loop: !1,
      margin: 30
    }),
    i(),
    $(window).on("scroll", function () {
      i()
    }),
    $(window).on("resize", function () {
      i()
    }),
    0 < $("#creative").length) {
    var a = new MLSlideshow(document.querySelector(".slideshow"));
    document.querySelector("#next-slide").addEventListener("click", function () {
      a.next()
    }),
    document.querySelector("#prev-slide").addEventListener("click", function () {
      a.prev()
    })
  }

  $(".mh").matchHeight();

  var s = $("#modal-bg"),
    l = $("#modal-bg #modal, .exit"),
    r = $("body");

  $("a.start-project").on("click", function () {
    return s.addClass("appear"), r.addClass("modal-open"), setTimeout(function () {
      l.addClass("pop")
    }, 300), !1
  }),
  $("#modal-bg .exit").on("click", function () {
    return s.removeClass("appear"), l.removeClass("pop"), r.removeClass("modal-open"), !1
  });

  var d = $("#search-modal"),
      c = $("#search-modal form, .exit");

  $("nav a.search").on("click", function () {
    return d.addClass("appear"), r.addClass("modal-open"), setTimeout(function () {
      c.addClass("pop")
    }, 300), !1
  }),

  $("#search-modal .exit").on("click", function () {
    return d.removeClass("appear"), c.removeClass("pop"), r.removeClass("modal-open"), !1
  }),

  $("#menu-icon").on("click", function () {
    $("body").toggleClass("menu-open").toggleClass("modal-open")
  }),

  t.each(function () {
    (o = $(this)).find("span").css({
      width: $(this).attr("data-percent")
    })
  });

  var u = $(".scrollup");

  function m() {
    700 < $(window).scrollTop() ? u.addClass("vis") : u.removeClass("vis")
  }
  m(),
  $(window).on("scroll", function () {
    m()
  }),
  u.on("click", function () {
    return $("html, body").animate({
      scrollTop: 0
    }, 450), !1
  }),
  $(".tabs").tabslet(),
  $(".accordion > li").on("click", function () {
    var e = (o = $(this)).hasClass("open");
    return o.addClass("open").children().slideDown().parent().siblings().removeClass("open").children().slideUp(),
    e && o.removeClass("open").children().slideUp(),
    !1
  }),
  addEventListener("scroll", function (e) {
    console.log(e.defaultPrevented),
    e.preventDefault(),
    console.log(e.defaultPrevented)
  },
  !! Modernizr.passiveeventlisteners && {
    passive: !0
  })
});