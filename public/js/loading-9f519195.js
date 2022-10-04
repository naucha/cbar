import { g as gsapWithCSS } from './userMenuMobile-31497930.js';

function loading() {
    document.addEventListener("readystatechange", (event) => {
        if (event.target.readyState === "complete") {
          gsapWithCSS
            .timeline()
            .to(".userMenu", { opacity: 1, duration: 0.2 })
            .to(".userContent", { opacity: 1, duration: 0.2 }, "<");
        }
      });
}

export { loading as l };
//# sourceMappingURL=loading-9f519195.js.map
