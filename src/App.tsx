import React, { useState } from "react";
import styled from "styled-components";
import mts from "./img/mts.png";
import tele2 from "./img/tele2.png";
import megafon from "./img/megafon.png";
import { Operator } from "./Components/operator";
import { Terminal } from "./Components/Terminal";

const Container = styled.div`
  background-color: #bdbdbd;
  border-radius: 15px;
  width: 1000px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  const [operator, setOperator] = useState("");

  const handleClick = (operator: string) => {
    setOperator(operator);
    console.log(operator);
  };

  return (
    <>
      {operator === "" && (
        <Container>
          <Operator srcImg={mts} nameOperator="mts" onClick={handleClick} />
          <Operator srcImg={tele2} nameOperator="tele2" onClick={handleClick} />
          <Operator
            srcImg={megafon}
            nameOperator="megafon"
            onClick={handleClick}
          />
        </Container>
      )}
      {operator === "mts" && <Terminal logo={mts} />}
      {operator === "tele2" && <Terminal logo={tele2} />}
      {operator === "megafon" && <Terminal logo={megafon} />}
    </>
  );
}

export default App;
