import React, { useState } from "react";
import styled from "styled-components";
import mts from "./img/mts.png";
import tele2 from "./img/tele2.png";
import megafon from "./img/megafon.png";
import { Operator } from "./Components/operator";
import { Terminal } from "./Components/Terminal";

import styles from "./index.module.scss";

const Container = styled.div`
  background-color: #bdbdbd;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const App = () => {
  const [operator, setOperator] = useState("");

  const handleClick = (operator: string) => {
    setOperator(operator);
    console.log(operator);
  };

  const comeBack = (operator: string) => {
    setOperator(operator);
  };

  return (
    <>
      {operator === "" && (
        <Container className={styles.container}>
          <Operator srcImg={mts} nameOperator="mts" onClick={handleClick} />
          <Operator srcImg={tele2} nameOperator="tele2" onClick={handleClick} />
          <Operator
            srcImg={megafon}
            nameOperator="megafon"
            onClick={handleClick}
          />
        </Container>
      )}
      {operator === "mts" && (
        <Terminal name="mts" logo={mts} onClick={comeBack} />
      )}
      {operator === "tele2" && (
        <Terminal name="tele2" logo={tele2} onClick={comeBack} />
      )}
      {operator === "megafon" && (
        <Terminal name="megafon" logo={megafon} onClick={comeBack} />
      )}
    </>
  );
};

export default App;
