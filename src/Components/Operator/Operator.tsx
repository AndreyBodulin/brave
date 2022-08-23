import React, { useState } from "react";
import styled from 'styled-components'
import './operator.css'

const Block = styled.div`
    border: none;
    outline: none;
    background-color: white;
    width: 250px;
    height: 200px;
    border-radius: 20px;
`

function Operator({srcImg, nameOperator, onChange}:any) {
    const handleName = () => {
        onChange(nameOperator);
    }

    return(
        <Block onClick={handleName}>
            <img className="operator_img" src={srcImg} alt="No logo"></img>
        </Block>
    );
}
export default Operator;