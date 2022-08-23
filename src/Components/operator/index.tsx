import React, { FC } from "react";
import styled from "styled-components";
import styles from "./index.module.scss";

type Props = {
  srcImg: string;
  nameOperator: string;
  onClick: (operator: string) => void;
};

const Block = styled.div`
  border: none;
  outline: none;
  background-color: white;
  width: 250px;
  height: 200px;
  border-radius: 20px;
`;

export const Operator: FC<Props> = ({ srcImg, nameOperator, onClick }) => {
  const handleClick = () => {
    onClick(nameOperator);
  };

  return (
    <Block onClick={handleClick}>
      <img className={styles.operator_img} src={srcImg} alt="no-logo"></img>
    </Block>
  );
};
