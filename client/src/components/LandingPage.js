import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Body = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 3fr 1fr;
    background: url('Road_Trip.png');
    background-size: cover;
    background-repeat: no-repeat;
    grid-column: 2;
`

const H1 = styled.div`
    grid-row: 2;
    grid-column: 2;
    text-align: center;
    font-family: 'sans simplifica','times new roman';
    font-weight: 100;
    font-size: 65px;
    font-stretch: expanded;
    border-style: double;
    border-width: 3px;
    border-color: black;
`

const H3 = styled.div`
    grid-row: 3;
    grid-column: 2;
    margin: 0 auto;
    font-weight: 300;
    font-family: sans-serif;
`

const Parent = styled.div`
    display: flex;
    justify-content: center;
    align-content: space-between;
    grid-row: 9;
    grid-column: 2;
    text-decoration: none;
    list-style-type: none;
`

const Atag = styled.a`
    margin: 40px;
    text-decoration: none;
    justify-content: space-between;
    color: black;
    font-weight: 200;
    font-family: sans-serif;
    font-size: 20px;
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
                        <LI><Atag href="/about"> About </Atag></LI>
                        <LI><Atag href="/portfolio"> Portfolio </Atag></LI>
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