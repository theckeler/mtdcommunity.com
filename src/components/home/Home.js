// import MenuMainSearch from "../elements/Search";
// import Button from "../elements/Button";
// import IconTitleBlock from "../elements/Blocks/IconTitle";
// import ImgTitleBlock from "../elements/Blocks/ImgTitle";

// import { ReactComponent as IconArrowUp } from "../images/arrow-up.svg";
// import { ReactComponent as IconArrowDown } from "../images/arrow-down.svg";

// import tabsData from "../data/tabs.json";
// import homeData from "./data/home.json";

const Home = () => {
  // const changeTab = (e) => {
  //   document.querySelectorAll(".tabs .tab").forEach(function (e) {
  //     e.classList.add("d-none");
  //   });

  //   document.querySelectorAll(".arrow-up").forEach(function (e) {
  //     e.classList.remove("d-block");
  //     e.classList.add("d-none");
  //   });
  //   document.querySelectorAll(".arrow-down").forEach(function (e) {
  //     e.classList.remove("d-none");
  //     e.classList.add("d-block");
  //   });
  //   document.querySelectorAll(".nav-tabs button").forEach(function (e) {
  //     e.classList.remove("active");
  //   });
  //   e.target.classList.add("active");
  //   e.target.querySelector(".arrow-up").classList.remove("d-none");
  //   e.target.querySelector(".arrow-up").classList.add("d-block");
  //   e.target.querySelector(".arrow-down").classList.remove("d-block");
  //   e.target.querySelector(".arrow-down").classList.add("d-none");

  //   document.querySelector(`#tab-${e.target.id}`).classList.remove("d-none");
  // };

  return (
    <>
      <h1 className="visually-hidden">MTD Parts</h1>

      <section class="border" style={{}}>
        <p className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel accumsan magna, ac dignissim lacus. Donec facilisis tincidunt quam
          non dapibus. Fusce a efficitur nulla. Phasellus imperdiet consectetur
          nibh, a pharetra dui placerat placerat. Nunc consequat at dolor ut
          lacinia. Nunc eget magna quis neque euismod rutrum. Vivamus iaculis
          ullamcorper metus, vitae mollis arcu porttitor vel. Sed congue enim et
          ex commodo, pretium mattis turpis cursus. Maecenas ac tortor vitae
          nisl vehicula sodales. Aliquam rutrum consectetur nunc in fringilla.
          Suspendisse at ex molestie quam volutpat pretium in ut sapien. In a
          gravida urna.
        </p>
      </section>
    </>
  );
};

export default Home;
