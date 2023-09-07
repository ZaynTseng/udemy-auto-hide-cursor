// 在这里编写你想要在Udemy网站上自动运行的JavaScript代码
javascript: (function () {
  var isFullscreen = false;
  var isMouseHidden = false;
  var mouseTimeout;

  function hideMouse() {
    if (isFullscreen) {
      document.documentElement.style.cursor = "none";
      isMouseHidden = true;
    }
  }

  function showMouse() {
    document.documentElement.style.cursor = "auto";
    isMouseHidden = false;
    clearTimeout(mouseTimeout);
  }

  function startMouseTimeout() {
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(function () {
      hideMouse();
    }, 2000);
  }

  document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement) {
      isFullscreen = true;
      setTimeout(function () {
        hideMouse();
      }, 2000);
    } else {
      isFullscreen = false;
      showMouse();
    }
  });

  document.addEventListener("mousemove", function () {
    if (isMouseHidden) {
      showMouse();
      startMouseTimeout();
    } else {
      clearTimeout(mouseTimeout);
      startMouseTimeout();
    }
  });

  hideMouse();
})();

console.log("Udemy网站上的自动化脚本已运行！");
