import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

import Header from "./header";

const StyledFooter = styled.footer`
  margin: 1rem;

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
              src="/images/github.png"
              quality={95}
              width={55}
              height={35}
              alt="Personal GitHub"
            />
          </a>
        </StyledFooter>
      </div>
    </>
  );
};

export default Layout;
