import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 0;
  padding: 1rem;
  display: flex;

  h1 {
    font-size: 2.5rem;
    font-family: "Montserrat", sans-serif;
    margin: 0.33rem;
    padding: 0;
  }

  nav {
    margin-left: auto;
    padding: 1rem;
  }

  nav a {
    color: #3D59AB;
    font-size: 1.2rem;
    margin: 0 0.75rem;
    padding: 2px 1px 0;
    text-decoration none;
  }

  nav a:hover {
    border-bottom: 1px solid #3D59AB;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    nav a {
      margin: 0.25rem;
      font-size: 1rem;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <h1>Elijah Bocz</h1>
    <nav>
      <a href="/resume.pdf">Resume</a>
    </nav>
  </StyledHeader>
);

export default Header;
