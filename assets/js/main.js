/* WANG Group 站点交互脚本 */
(function () {
  "use strict";

  // 移动端导航切换
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // 点击导航链接后收起菜单
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 论文年份筛选
  var filterBtns = document.querySelectorAll("[data-filter]");
  var pubItems = document.querySelectorAll("[data-year]");
  var yearGroups = document.querySelectorAll(".pub-year");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter");

      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      if (filter === "all") {
        pubItems.forEach(function (item) { item.style.display = ""; });
        yearGroups.forEach(function (g) { g.style.display = ""; });
        return;
      }

      var hasVisible = false;
      yearGroups.forEach(function (g) {
        if (g.getAttribute("data-year") !== filter) {
          g.style.display = "none";
          return;
        }
        g.style.display = "";
        hasVisible = true;
      });

      pubItems.forEach(function (item) {
        item.style.display = item.getAttribute("data-year") === filter ? "" : "none";
      });

      // 若当前年份没有可见条目，隐藏年份标题
      var visibleCount = Array.prototype.filter.call(pubItems, function (i) {
        return i.getAttribute("data-year") === filter && i.style.display !== "none";
      }).length;
      if (visibleCount === 0) {
        yearGroups.forEach(function (g) {
          if (g.getAttribute("data-year") === filter) g.style.display = "none";
        });
      }
    });
  });

  // 页头滚动阴影
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = "0 6px 24px rgba(15,37,87,.10)";
      } else {
        header.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 淡入动画（可选增强）
  if ("IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll(".reveal");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }
})();
