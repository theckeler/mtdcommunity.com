//import Search from "../../elements/Search";

import { ReactComponent as IconCart } from "../../images/cart.svg";
import { ReactComponent as IconAccount } from "../../images/account.svg";

const Extras = ({ responsive }) => {
  return (
    <ul className="d-flex list-unstyled justify-content-end">
      {/* <li className="col-6 position-relative me-1">
        <Search addClass={responsive && "d-none d-lg-flex"} darkTheme={true} />
      </li> */}
      <li className="col-6 max-w-48 position-relative me-1">
        <a href="#top" className="border-0 bg-white p-1 d-block rounded">
          <div
            className="max-w-25 max-h-25 bg-green p-1 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fs-8 position-absolute"
            style={{ top: "5px", right: "10px" }}
          >
            99
          </div>
          <IconCart />
        </a>
      </li>
      <li className="col-6 max-w-48">
        <a href="#top" className="border-0 bg-white p-1 d-block rounded">
          <IconAccount />
        </a>
      </li>
    </ul>
  );
};

export default Extras;
