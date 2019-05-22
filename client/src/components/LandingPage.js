import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Wrapper = styled.div`
    padding-left: 1px;
    padding-right: 1px;
`
const Body = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr 1fr 1fr 2fr 1fr 1fr 1fr;
  grid-template-column: 1fr;
  height: 100vh;
  
`;

const H1 = styled.div`
    grid-row: 2;
    text-align: center;
    align-content: center;
    font-family: 'ubuntu','times new roman';
    font-weight: 100;
    font-size: 6.5rem;
    padding-top: 3%;
`

const H3 = styled.div`
  grid-row: 3;
  padding-top: 5%;
  margin: 0 auto;
  font-weight: 300;
  font-size: 2.5rem;
  font-family: ubuntu;
`;

const Parent = styled.div`
  grid-row: 6;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  text-decoration: none;
  list-style-type: none;
`;

const Atag = styled.a`
    margin: 2rem;
    text-decoration: none;
    justify-content: space-between;
    color: black;
    font-weight: 200;
    font-family: ubuntu;
    font-size: 1.5rem;
`

const LI = styled.div`
    align-content: space-between;
`

class LandingPage extends Component {
    render() {
        return (
            <Wrapper>
                <Body>
                    <H1> Daniel Mishael </H1>
                    <H3> Git to know me. </H3>
                    <Parent>
                        <LI><Link to="/about"> <Atag>About </Atag></Link></LI>
                        <LI><Link to="/portfolio"> <Atag>Portfolio </Atag></Link></LI>
                        <LI><Atag href="https://github.com/dmishael"> Github </Atag></LI>
                        <LI><Atag href="https://www.linkedin.com/in/daniel-mishael-8b093b53"> LinkedIn </Atag></LI>
                        <LI><Atag href="https://twitter.com/dmishael91"> Twitter </Atag></LI>
                    </Parent>

                </Body>

            </Wrapper>
        );
    }
}

export default LandingPage;