import React from "react";
// timer section

// import Timer from './timer/Timer'

// styled-components section

import {
  StyledButton,
  StyledButtonJSX
} from "./styledComponents/Button.styled";
import { Container } from "./styledComponents/Container.styled";
import { GlobalStyles } from "./styledComponents/GlobalStyles.styled";
import Navbar from './styledComponents/NavbarWithStyledComponents/Navbar';

function App() {
  return (
    <div>
      {/* style normal elements by using styled-component */}
      {/* <StyledButton
        onClick={() => {
          console.log("Hi from styled-button");
        }}
      >
        <span>click me</span>
      </StyledButton> */}

      {/* <Container bgColor="tomato"/> */}
      {/* <Container /> */}

      {/* style ReactJS components by styled-components  */}

      {/* add general styles that affect the whole App */}
      {/* <GlobalStyles />
      <StyledButtonJSX /> */}

{/* Navbar made by styled-components as a practice */}

<Navbar/>
    </div>
  );
}

export default App;

