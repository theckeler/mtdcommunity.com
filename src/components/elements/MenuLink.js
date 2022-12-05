import { ReactComponent as IconArrowDown } from "../images/arrow-down.svg";

const MenuLink = ({ link, ariaCurrent, hasSub }) => {
  console.log("link:", link);

  const disableClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <a
        href={link.url}
        {...ariaCurrent}
        {...hasSub}
        onClick={disableClick}
        className={`nav-link d-block w-100 py-3 d-block d-flex ${
          hasSub && "dropdown"
        }`}
      >
        {link.title}
        {hasSub && (
          <>
            <IconArrowDown className="max-w-25 ms-auto" />
          </>
        )}
      </a>
      {hasSub && (
        <ul className="d-flex flex-column list-unstyled bg-white p-2">
          {link.sub.map((subLink, i) => {
            return (
              <li
                className="nav-item text-align-left w-100 mb-2"
                role="menuitem"
                key={i}
              >
                <a
                  href={link.url}
                  {...ariaCurrent}
                  {...hasSub}
                  onClick={disableClick}
                  className="nav-link d-block w-100 py-1 d-block d-flex fs-7"
                >
                  {subLink.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MenuLink;
