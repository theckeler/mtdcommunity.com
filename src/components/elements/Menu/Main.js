import MenuLoop from "./Loop";
import Search from "../Search";

const Nav = ({ menuData, addClass }) => {
  return (
    <div
      className={`overflow-scroll remove-scrollbar ${addClass}`}
      id="main-menu"
    >
      <div className="container-xxl">
        <ul className="list-unstyled pb-5" aria-label="Main Menu">
          <MenuLoop
            menuData={menuData}
            footerNav={false}
            addClass="text-black"
          />

          <li className="nav-item text-align-left w-100 pb-5 px-3">
            <Search addClass="mt-3" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
