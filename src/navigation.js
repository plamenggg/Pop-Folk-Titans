import { HOME, BULGARIA, SERBIA,GREECE, CONTAINER_SELECTOR } from "./constants.js";
import { toHomeView } from "./views.js";


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
  
      default:
        return null;
    }
  };

  const q = (selector) => document.querySelector(selector);

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