import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column: 2;
`;

const H1 = styled.div`
    grid-row: 2;
    grid-column: 2;
    text-align: center;
    font-family: 'ubuntu','times new roman';
    font-weight: 100;
    font-size: 7em ;
    font-stretch: expanded;
    padding-top: 10%;
`

const H3 = styled.h4`
  margin-top: 4%;
  grid-row: 4;
  grid-column: 2;
  margin: 0 auto;
  font-weight: 100;
  font-family: ubuntu;
`;

const Parent = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-between;
    grid-row: 6;
    grid-column: 2;
    text-decoration: none;
    list-style-type: none;
`

const Atag = styled.a`
    margin: 1em;
    text-decoration: none;
    justify-content: space-between;
    color: black;
    font-weight: 200;
    font-family: ubuntu;
    font-size: 2.5em;
`

const LI = styled.div`
    align-content: space-between;
`

class LandingPage extends Component {
    render() {
        return (
            <div>
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

            </div>
        );
    }
}

export default LandingPage;