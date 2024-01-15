import React, { useState } from 'react';
import { Accordiondata } from './Accordiondata';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color : white;
`;

const TopSection = styled.div`
  background: #fff;
  text-align: center;
  padding: 20px;
  align-content : center;
  z-index : 1;
  margin-top : 5%;

  p{
    position: relative;
    font-family: sans-serif;
    text-transform: uppercase;
    font-size: 2em;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 1s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    margin-bottom : 30px;
  }

  button{
    font-size: 1rem;
    padding: 0.8em 2em;
    background-color: #000;
    border: 3px solid yellow;
    border-radius: 1em;
    color: #fff;
    font-weight: bolder;
    transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
    box-shadow: -5px 5px 0px 0px yellow;
  }

  button:hover {
    transform: translate(5px, -5px);
  }

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
`;

const AccordionSection = styled.div`
  flex-grow: 1;
  position: relative;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width: 100%;
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 17px;
    font-size: 24px;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #f39c12;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 20px;
    text-align: center;
    width: 80%;
  }
`;

const AccordionComponent = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <PageContainer>
        <TopSection>
          <p className='text'>Explore our services</p>
          <button className='button'>Click here</button>
        </TopSection>

        <AccordionSection>
          <Container>
            {Accordiondata.map((item, index) => (
              <React.Fragment key={index}>
                <Wrap onClick={() => toggle(index)}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>

                {clicked === index && (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                )}
              </React.Fragment>
            ))}
          </Container>
        </AccordionSection>
      </PageContainer>
    </IconContext.Provider>
  );
};

export default AccordionComponent;
