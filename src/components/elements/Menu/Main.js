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
          <li className="nav-item text-align-left w-100 d-none flex-column d-xxl-flex">
            <button className="border-0 bg-primary text-white text-uppercase p-3 my-1">
              Go Shop
            </button>
            <button className="border-0 bg-primary text-white text-uppercase p-3 mb-1">
              Bulk Ordering
            </button>
            <button className="border-0 bg-primary text-white text-uppercase p-3 mb-1">
              Multi Ordering
            </button>
          </li>
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
