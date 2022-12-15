// import MenuMainSearch from "../elements/Search";
// import Button from "../elements/Button";
// import IconTitleBlock from "../elements/Blocks/IconTitle";
// import ImgTitleBlock from "../elements/Blocks/ImgTitle";

import { ReactComponent as IconArrowUp } from "../images/arrow-up.svg";
import { ReactComponent as IconArrowDown } from "../images/arrow-down.svg";
import { ReactComponent as logoYardMan } from "../images/logo-yard-man.svg";
import { ReactComponent as logoRemington } from "../images/logo-remington.svg";
import { ReactComponent as logoWhiteOutdoor } from "../images/logo-white.svg";
import { ReactComponent as logoYardMachines } from "../images/logo-yard-machines.svg";
import { ReactComponent as logoCraftsman } from "../images/logo-craftsman.svg";
import { ReactComponent as logoTroyBilt } from "../images/logo-troy-bilt.svg";
import { ReactComponent as logoBolens } from "../images/logo-bolens.svg";
import { ReactComponent as logoRobomow } from "../images/logo-robomow.svg";

import tabsData from "../data/tabs.json";
import homeData from "./data/home.json";

const Home = () => {
  const LogoMap = {
    logoYardMan: logoYardMan,
    logoRemington: logoRemington,
    logoWhiteOutdoor: logoWhiteOutdoor,
    logoYardMachines: logoYardMachines,
    logoCraftsman: logoCraftsman,
    logoTroyBilt: logoTroyBilt,
    logoBolens: logoBolens,
    logoRobomow: logoRobomow,
  };

  const changeTab = (e) => {
    document.querySelectorAll(".tabs .tab").forEach(function (e) {
      e.classList.add("d-none");
    });

    document.querySelectorAll(".arrow-up").forEach(function (e) {
      e.classList.remove("d-block");
      e.classList.add("d-none");
    });
    document.querySelectorAll(".arrow-down").forEach(function (e) {
      e.classList.remove("d-none");
      e.classList.add("d-block");
    });
    document.querySelectorAll(".nav-tabs button").forEach(function (e) {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    e.target.querySelector(".arrow-up").classList.remove("d-none");
    e.target.querySelector(".arrow-up").classList.add("d-block");
    e.target.querySelector(".arrow-down").classList.remove("d-block");
    e.target.querySelector(".arrow-down").classList.add("d-none");

    document.querySelector(`#tab-${e.target.id}`).classList.remove("d-none");
  };

  const moreHelp = (e) => {
    document.querySelector(`#more-info`).classList.toggle("d-none");
  };

  return (
    <>
      <h1 className="visually-hidden">MTD Parts</h1>

      <section style={{ minHeight: "50vh" }}></section>
    </>
  );
};

export default Home;
