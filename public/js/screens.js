import { p as popUpSaldo, m as marginHeader, d as depositSteps, a as depositAmmount, b as depositCopy, c as menuHeaderMobile, u as userMenuMobile } from './userMenuMobile-cb8e89e0.js';

function heartToggle() {
  const heartBtn = document.querySelector(".heart");

  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("active");
  });
}

window.addEventListener("load", () => {
  heartToggle();
  popUpSaldo();
  marginHeader();
  depositSteps();
  depositAmmount();
  depositCopy();
  menuHeaderMobile();
  userMenuMobile();
});
//# sourceMappingURL=screens.js.map