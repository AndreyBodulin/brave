import React, { FC } from "react";
import styled from "styled-components";
import styles from "./index.module.scss";

import cn from "classnames";

const Block = styled.div`
  background-color: white;
  border: 5px solid red;
  border-radius: 15px;
  width: 1000px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  logo?: string;
  classNames?: string;
  name?: string;
};

export const Terminal: FC<Props> = ({ logo, classNames, name }) => {
  return (
    <>
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
    </>
  );
};
