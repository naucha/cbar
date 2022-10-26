import gameLauncher from "./modules/game-launcher.js";
import heartToggle from "./modules/heartToggle.js";
import screensSizer from "./modules/screens-sizer";

document.addEventListener("DOMContentLoaded", () => {
  heartToggle();
});
screensSizer();
gameLauncher();