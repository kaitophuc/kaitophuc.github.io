(function () {
  "use strict";

  function initializeMobileNavigation() {
    var navigation = document.querySelector(".site-navigation");

    if (!navigation) {
      return;
    }

    var toggle = navigation.querySelector(".site-nav-toggle");
    var mobileMenu = navigation.querySelector(".site-nav--mobile");

    if (!toggle || !mobileMenu) {
      return;
    }

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    function setOpen(open, returnFocus) {
      mobileMenu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));

      if (!open && returnFocus) {
        toggle.focus();
      }
    }

    // Always begin closed, including when a WebView restores page state.
    setOpen(false, false);

    toggle.addEventListener("click", function () {
      setOpen(!isOpen(), false);
    });

    mobileMenu.addEventListener("click", function (event) {
      var target = event.target;

      if (target instanceof Element && target.closest("a")) {
        setOpen(false, false);
      }
    });

    document.addEventListener("click", function (event) {
      if (isOpen() && !navigation.contains(event.target)) {
        setOpen(false, false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false, true);
      }
    });

    var desktopViewport = window.matchMedia("(min-width: 761px)");
    var closeAtDesktopWidth = function (event) {
      if (event.matches) {
        setOpen(false, false);
      }
    };

    if (desktopViewport.addEventListener) {
      desktopViewport.addEventListener("change", closeAtDesktopWidth);
    } else {
      desktopViewport.addListener(closeAtDesktopWidth);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeMobileNavigation);
  } else {
    initializeMobileNavigation();
  }
}());
