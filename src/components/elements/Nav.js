import MenuMainExtras from "./Menu/Extras";

import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as IconEatHam } from "../images/hamburger.svg";
import { ReactComponent as IconEatHamClose } from "../images/hamburger-close.svg";

const Nav = ({ menuData }) => {
  const openMenu = (e) => {
    e.preventDefault();
    const mainMenu = document.querySelector("#main-menu");
    mainMenu.classList.toggle("active");
    mainMenu.classList.toggle("mh-0");
    mainMenu.classList.toggle("min-vh-0");
    document
      .querySelector(".btn-hamburger")
      .setAttribute(
        "aria-expanded",
        `${!(
          document
            .querySelector(".btn-hamburger")
            .getAttribute("aria-expanded") === "true"
        )}`
      );
    document.querySelectorAll("#main-menu-button span").forEach(function (e) {
      e.classList.toggle("d-none");
    });
    document.querySelector("body").classList.toggle("overflow-hidden");
    // document.querySelector("#main-nav-extras").classList.toggle("d-none");
    document
      .querySelectorAll("header .has-submenu .subnav")
      .forEach(function (e) {
        e.classList.add("mh-0");
      });
  };

  return (
    <nav
      className="bg-dark box-shadow py-1"
      aria-label="Main Nav"
      role="navigation"
      id="nav-main"
    >
      <div className="container-fluid">
        <ul className="d-flex list-unstyled align-items-center py-2 px-1 mb-0">
          <li
            className="main-menu-button max-w-48 d-block d-xxl-none"
            id="main-menu-button"
          >
            <button
              aria-haspopup="true"
              aria-controls="main-menu"
              type="button"
              aria-label="Open Menu"
              tabIndex="0"
              onClick={openMenu}
              data-toggle="collapse"
              data-target="#main-menu"
              className="btn btn-hamburger hamburger"
              aria-expanded="false"
            >
              <span className="button-ham pe-none">
                <IconEatHam />
              </span>
              <span className="button-x pe-none d-none">
                <IconEatHamClose />
              </span>
              <span className="visually-hidden">Toggle Navigation</span>
            </button>
          </li>
          <li className="ms-2 px-1">
            <a href="/" aria-label="Link to Home">
              <Logo className="w-100" style={{}} />
            </a>
          </li>
          <li className="ms-auto w-100" id="main-nav-extras">
            <MenuMainExtras responsive={true} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
