import { HOME, BULGARIA, SERBIA, GREECE, ROMANIA, CONTAINER_SELECTOR } from "./constants.js";
import { toHomeView } from "./to-Home-view.js";
import { toBulgariaView } from "./to-Bulgaria-view.js";
import { toSerbiaView } from "./to-Serbia-view.js";
import { toGreeceView } from "./to-Greece-view.js";
import { toRomaniaView } from "./to-Romania-view.js";


export const loadPage = (page = '') => {
    switch (page) {
      case HOME:
        setActiveNav(HOME);
        return renderHome();
  
      case BULGARIA:
        setActiveNav(BULGARIA);
        return renderBulgaria();
  
      case SERBIA:
        setActiveNav(SERBIA);
        return renderSerbia();
  
      case GREECE:
        setActiveNav(GREECE);
        return renderGreece();

      case ROMANIA:
        setActiveNav(ROMANIA);
        return renderRomania();
  
      default:
        return null;
    }
  };

  const q = (selector) => document.querySelector(selector);
  const qs = (selector) => document.querySelectorAll(selector);

  const setActiveNav = (page) => {
    const navs = qs('a.nav-link');
  
    Array
      .from(navs)
      .forEach(element => element
        .getAttribute('data-page') === page
        ? element.classList.add('active')
        : element.classList.remove('active')
        );
  };

  const renderHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
  };
  
  const renderBulgaria = () => {
    q(CONTAINER_SELECTOR).innerHTML = toBulgariaView();
  };
  
  const renderSerbia = () => {
    q(CONTAINER_SELECTOR).innerHTML = toSerbiaView();
  };
  
  const renderGreece = () => {
    q(CONTAINER_SELECTOR).innerHTML = toGreeceView();
  };

  const renderRomania = () => {
    q(CONTAINER_SELECTOR).innerHTML = toRomaniaView();
  };

  export const renderSearchItems = (searchTerm) => {
    const searchedArtist = loadSearchGifs(searchTerm);
    q(CONTAINER_SELECTOR).innerHTML = toSearchView(searchedArtist, searchTerm);
  };