import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

import Header from "./header";

const StyledFooter = styled.footer`
  margin: 1rem;
  text-align: center;

  a {
    margin: 0.5rem;
  }

  a:hover {
    opacity: 0.75;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <StyledFooter>
          <a href="https://github.com/elijahbocz">
            <Image
              src="/images/icons/github.png"
              quality={95}
              width={24}
              height={24}
              alt="Personal GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/elijahbocz">
            <Image
              src="/images/icons/linkedin.png"
              quality={95}
              width={24}
              height={24}
              alt="Personal LinkedIn"
            />
          </a>
        </StyledFooter>
      </div>
    </>
  );
};

export default Layout;
