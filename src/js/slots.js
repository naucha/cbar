import carouselJackpot from "./modules/carouselJackpot.js";
import carouselGrid from "./modules/carouselGrid.js";
import collapseGrid from "./modules/collapseGridHalf.js";
import favHeart from "./modules/favHeart.js";
import searchGames from "./modules/search-games.js";

document.addEventListener('DOMContentLoaded', () => {
  carouselJackpot();
  collapseGrid();
  favHeart().init();
  document.querySelectorAll('.gridFull .splide').forEach(grid => {
    carouselGrid(grid);
  });
})

searchGames();
