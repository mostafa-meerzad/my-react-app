import React from "react";
import { useCatFact } from "./useCatFact";
import styled, { createGlobalStyle } from "styled-components";

const Error = styled.p`
  font-size: 2rem;
`;
const Loading = styled.p`
  font-size: 2rem;
`;
const Wrapper = styled.div`
  width: 50vw;
  min-height: 50vh;
  display: grid;
  background-color: white;
  place-content: center;
  place-items: center;
  padding: 1rem;
  border: 1px solid whitesmoke;
  border-radius: 1rem;
  text-align: center;
  font-family: sans-serif;
  line-height: 1.4rem;
`;
const Refresh = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
`;

export const GlobalStyles = createGlobalStyle`
  
body{
  background-color: #242424;
  display: grid;
  place-content: center;
  place-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
`;
function CatFactApp() {
  const { catFact, isLoading, error, refresh } = useCatFact();

  if (error) {
    return <Error>something went wrong</Error>;
  } else if (isLoading) {
    return <Loading>loading...</Loading>;
  }

  return (
    <Wrapper>
      <h1>Cat Fun Fact</h1>

      <p>{catFact.fact}</p>

      <Refresh onClick={refresh}>refresh</Refresh>
    </Wrapper>
  );
}

export default CatFactApp;
