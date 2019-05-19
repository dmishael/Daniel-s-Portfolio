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
  font-size: 20px;
`;

const LI = styled.div`
  align-content: space-between;
`;

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar transparent pb-4">
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
            <LI>
              <Link to="/about">
                {" "}
                <Atag>About </Atag>
              </Link>
            </LI>
            <LI>
              <Link to="/portfolio">
                {" "}
                <Atag>Portfolio </Atag>
              </Link>
            </LI>
            <LI>
              <Atag href="https://github.com/dmishael"> Github </Atag>
            </LI>
            <LI>
              <Atag href="https://www.linkedin.com/in/daniel-mishael-8b093b53">
                {" "}
                LinkedIn{" "}
              </Atag>
            </LI>
            <LI>
              <Atag href="https://twitter.com/dmishael91"> Twitter </Atag>
            </LI>
          </Parent>
        </nav>
      </div>
    );
  }
}
export default Navbar;