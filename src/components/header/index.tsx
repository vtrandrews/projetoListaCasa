import React from "react";
import { BoxHeader, Container } from "./styles.modules"

export function Header() {
  return(
    <Container>
      <BoxHeader>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
        </ul>
      </BoxHeader>
    </Container>
  )
}

export default Header;