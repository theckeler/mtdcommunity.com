import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Nav from "./elements/Nav";
import menuData from "./data/menu.json";
import menuFooterData from "./data/menu-footer.json";
import Footer from "./elements/Footer";
import MenuMain from "./elements/Menu/Main";

const Index = () => {
  return (
    <>
      <header
        className="container-fluid position-fixed position-xxl-relative top-0 w-100 bg-dark"
        style={{ zIndex: "1001" }}
      >
        <ul className="list-unstyled d-flex align-items-center flex-column w-100">
          <li className="col-12 col-xxl-7">
            <Nav {...{ menuData }} />
            <MenuMain
              {...{ menuData }}
              addClass="position-relative position-xxl-fixed min-vh-100 min-w-100 mh-0 mh-xxl-auto max-vh-100 min-vh-0 min-vh-xxl-auto bg-white top-0 start-0"
            />
          </li>
        </ul>
      </header>

      <div className="position-relative position-xxl-fixed min-vh-100 min-w-100 mh-0 mh-xxl-auto max-vh-100 min-vh-0 min-vh-xxl-auto bg-white top-0 end-0 d-none d-xxl-block">
        <div className="p-2">
          <ul className="list-unstyled d-flex flex-column vh-100">
            <li className="h-50">Chatter/Slack</li>
            <li className="h-50 border-top">Chatter/Slack</li>
          </ul>
        </div>
      </div>

      <main className="container-fluid py-4" role="main">
        <div
          className="position-sticky top-0 w-0"
          style={{ zIndex: "-1", height: "76px" }}
        />
        <ul className="list-unstyled d-flex align-items-center flex-column w-100">
          <li className="col-12 col-xxl-7">
            <Routes>
              <Route index path="/" element={<Home />} />
            </Routes>
          </li>
        </ul>
      </main>

      <footer className="bg-dark pb-5">
        <ul className="list-unstyled d-flex align-items-center flex-column w-100">
          <li className="col-12 col-xxl-7">
            <Footer {...{ menuData, menuFooterData }} />
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Index;
