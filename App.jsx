import React from "react";
import Pages from "./pages/pages.jsx";
import Category from "./components/category.jsx";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/search.jsx";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        {/* // seperate the pages from the nav and search bar */}
        <Pages />
      </BrowserRouter>
    </>
  );
}

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
    margin-right: 0.2rem;
  }
  @media (min-width: 200px) and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  color: #313131;
  font-family: "Lobster Two", cursive;
  @media (min-width: 200px) and (max-width: 1200px) {
    font-size: 2rem;
  }
`;

export default App;
