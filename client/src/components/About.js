import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from "../components/Nav";

const Body = styled.body`
  display: block;
  float: left;
  font-family: "Indie Flower", "times new roman";
  margin-top: 10%;
  padding-bottom: 10%;
  margin-left: 15%;
  margin-right: 10%;
`;


const IMG = styled.img`
  display: block;
  float: right;
  width: 20%;
  margin-left: 12%;
  margin-top: 4%;
  border-radius: 20px;
  margin-right: 10%;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 1.12rem;
`;


class Users extends Component {


    render() {

        return (
          <div>
            {
              <div>
                <Navbar />
                {/* <Title>Who Am I?</Title> */}

                <Body>
                  <IMG src="GA_Profile.jpg" alt="Profile Shot" />
                  <h4>Who Am I?</h4>
                  <P>
                    I am an intellectually curious full stack web
                    developer with a passion for bringing diverse
                    perspectives together to solve systemic problems.
                    With over 3 years of professional financial modeling
                    experience I have developed a deep understanding of
                    the art and science of piecing algorithms together
                    to tell a story. From capturing live music through a
                    camera lens to creating detailed and dynamic
                    financial models for multi-million dollar
                    businesses, I have learned that the best solutions
                    often come when fusing both the left and right sides
                    of the brain.
                  </P>
                </Body>
              </div>
            }
          </div>
        );
    }
}


export default Users;