import React, { FC } from "react";
import styled from "styled-components";
import styles from "./index.module.scss";

import cn from "classnames";

const Container = styled.div<{ br?: string }>`
  background-color: white;
  border: 5px solid ${(props) => props.br};
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 500px;
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
      <Container className={styles.container} br={br}>
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
          <div>
            <p>Номер телефона:</p>
            <input
              className={styles.terminal_number}
              placeholder="+7(___)___-__-__"
            ></input>
          </div>
          <div>
            <p>Сумма платежа:</p>
            <input className={styles.terminal_number} placeholder=""></input>
          </div>
          <button className={styles.btn_pay}>Оплатить</button>
        </Block>
        <button
          className={cn(styles.btn_back, {
            [styles.btn_mts]: name === "mts",
            [styles.btn_tele2]: name === "tele2",
            [styles.btn_megafon]: name === "megafon",
          })}
          onClick={comeBack}
        >
          Назад
        </button>
      </Container>
    </>
  );
};
