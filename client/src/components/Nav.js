import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Parent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  text-decoration: none;
  list-style-type: none;
`;

// const Home = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   text-decoration: none;
//   list-style-type: none;
// `;

const Atag = styled.a`
  margin: 40px;
  text-decoration: none;
  justify-content: space-between;
  color: black;
  font-weight: 200;
  font-family: sans-serif;
  font-size: 2em;
`;

const LI = styled.div`
  align-content: space-between;
`;

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar transparent">
          {/* <Home>
                <LI>
                  <Link to="/about">
                    {" "}
                    <Atag>About </Atag>
                  </Link>
                </LI>
              </Home> */}
          <Parent>
            <LI>
              <Link to="/">
                {" "}
                <Atag>Home </Atag>
              </Link>
            </LI>
          </Parent>
        </nav>
      </div>
    );
  }
}
export default Navbar;