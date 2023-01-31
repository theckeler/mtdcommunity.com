const RightNav = ({ addClass, addStyle }) => {
  return (
    <div className="position-relative position-xxl-fixed min-vh-100 min-w-100 mh-0 mh-xxl-auto max-vh-100 min-vh-0 min-vh-xxl-auto bg-white top-0 end-0 d-none d-xxl-block">
      <div className="p-2">
        <ul className="list-unstyled d-flex flex-column vh-100">
          <li className="h-50">Chatter/Slack</li>
          <li className="h-50 border-top">Blog/News</li>
        </ul>
      </div>
    </div>
  );
};

export default RightNav;
