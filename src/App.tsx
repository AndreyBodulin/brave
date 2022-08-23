import React, { useState } from 'react';
import styled from 'styled-components'
import Operator from './Components/Operator/Operator';
import mts from './img/mts.png'
import tele2 from './img/tele2.png'
import megafon from './img/megafon.png'

const Container = styled.div`
  background-color: #BDBDBD;
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
  `

function App() {
  const [operator, setOperator] = useState('');
  
  const handleName = (operator:string) => {
    setOperator(operator);
    console.log(operator);
  }

  return (
    <>
    {operator === '' && <Container>
        <Operator srcImg={mts} nameOperator='mts' onChange={handleName} />
        <Operator srcImg={tele2} nameOperator='tele2' onChange={handleName} />
        <Operator srcImg={megafon} nameOperator='megafon' onChange={handleName} />
    </Container>}
    </>  
  );
}

export default App;
