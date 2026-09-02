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
      return navigation.hasAttribute("open");
    }

    function setOpen(open, returnFocus) {
      navigation.toggleAttribute("open", open);
      toggle.setAttribute("aria-expanded", String(open));

      if (!open && returnFocus) {
        toggle.focus();
      }
    }

    toggle.setAttribute("aria-expanded", String(isOpen()));

    // Some in-app mobile WebViews do not reliably toggle a styled <summary>.
    // Handle it explicitly while retaining the native <details> fallback.
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      setOpen(!isOpen(), false);
    });

    mobileMenu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
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
