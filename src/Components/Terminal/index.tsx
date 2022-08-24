import React, { FC } from "react";
import styled from "styled-components";
import styles from "./index.module.scss";

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
};

export const Terminal: FC<Props> = ({ logo }) => {
  return (
    <>
      <Block>
        <img className={styles.terminal_logo} src={logo} alt="no-logo"></img>
      </Block>
    </>
  );
};
