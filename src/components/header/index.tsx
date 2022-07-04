import React from "react";
import { BoxHeader, Container } from "./styles.modules"

export function Header() {
  return(
    <Container>
      <BoxHeader>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/lista-de-presentes">Lista de Presente</a></li>
        </ul>
      </BoxHeader>
    </Container>
  )
}

export default Header;