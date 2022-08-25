import React, { FC } from "react";
import styled from "styled-components";
import styles from "./index.module.scss";

import cn from "classnames";

const Container = styled.div<{ br?: string }>`
  background-color: white;
  border: 5px solid ${(props) => props.br};
  border-radius: 15px;
  width: 1000px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 150px;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  logo?: string;
  classNames?: string;
  name?: string;
  onClick?: (operator: string) => void;
};

let br: string;
let operator: string;

export const Terminal: FC<Props> = ({ logo, classNames, name, onClick }) => {
  if (name === "mts") br = "red";
  else if (name === "tele2") br = "black";
  else if (name === "megafon") br = "#00BA55";

  const comeBack = () => {
    onClick((operator = ""));
  };

  return (
    <>
      <Container br={br}>
        <Block>
          <img
            className={cn(styles.terminal_logo, classNames, {
              [styles.mts_logo]: name === "mts",
              [styles.tele2_logo]: name === "tele2",
              [styles.megafon_logo]: name === "megafon",
            })}
            src={logo}
            alt="no-logo"
          ></img>
        </Block>
        <button
          className={cn(styles.btn_terminal, {
            [styles.btn_mts]: name === "mts",
            [styles.btn_tele2]: name === "tele2",
            [styles.btn_megafon]: name === "megafon",
          })}
          onClick={comeBack}
        >
          Back
        </button>
      </Container>
    </>
  );
};
