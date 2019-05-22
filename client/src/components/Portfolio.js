import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from "../components/Nav";


const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'sans simplifica','times new roman';
`
const Span = styled.div`
    grid-column: 2; 
`

const H3 = styled.h6`
    font-weight: bold;
    font-family: 'sans simplifica','times new roman';
`
const CardContent = styled.div`
    background-color: white;
    font-family: 'sans simplifica','times new roman';
`
const Header = styled.h1`
  font-weight: light;
  font-family: "ubuntu", "times new roman";
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
`





class Portfolio extends Component {
    render() {
        return (
          <div>
            <Navbar/>
            <Header>Professional Work</Header>
            <Body>
              <Span class="divider">
                <div class="row">
                  <div class="card">
                    <div class="card-image">
                      <img src="../BettaScreenshot.png" />
                      <span class="card-title">Betta Innovations</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">
                          <a href="http://Bettainnovations-website.s3-website-us-east-1.amazonaws.com">
                            site
                          </a>
                        </i>
                      </a>
                    </div>
                    <div class="card-content">
                      <CardContent>
                        <H3>Technologies Used:</H3>
                        <ol>
                          HTML, CSS, JavaScript, VueJS, Google Maps and
                          Hubspot APIs, and Adobe XD.
                        </ol>
                        <H3>Inspiration:</H3>
                        <ol>
                          Inspired by an phenomenal UX / UI team, and in
                          tandem with my co-developer, we created Betta
                          Innovations first website!
                        </ol>
                      </CardContent>
                    </div>
                  </div>
                </div>

                <Header>Personal Projects</Header>
                <div class="row">
                  <div class="card">
                    <div class="card-image">
                      <img src="../ComPost-Screenshot.JPEG" />
                      <span class="card-title">ComPost</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">
                          <a href="https://vast-castle-70484.herokuapp.com/">
                            site
                          </a>
                        </i>
                      </a>
                    </div>
                    <div class="card-content">
                      <CardContent>
                        <H3>Technologies Used:</H3>
                        <ol>
                          MERN (MongoDB, Express.JS, React, Node.JS)
                        </ol>
                        <H3>Inspiration:</H3>
                        <ol>
                          Being a passionate environmentalist I wanted a
                          more cost effective and community oriented
                          solution to bridge the gap between those
                          interested in composting and their local urban
                          gardens.
                        </ol>
                      </CardContent>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="card">
                    <div class="card-image">
                      <img src="../RuffHouse-IMG.jpg" />
                      <span class="card-title">RuffHouse</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">
                          <a href="https://lit-woodland-81366.herokuapp.com/">
                            site
                          </a>
                        </i>
                      </a>
                    </div>
                    <div class="card-content">
                      <CardContent>
                        <H3>Technologies Used:</H3>
                        <ol>
                          MEHN (MongoDB, Express.JS, Handlebars,
                          Node.JS)
                        </ol>
                        <H3>Inspiration:</H3>
                        <ol>
                          As the owner of a rescue dog, I've learned
                          first hand that owning a dog can be expensive.
                          In an effort to reduce the total cost of dog
                          ownership, I developed RuffHouse to create
                          geographicaly organized dog owner communities
                          which facilitate a system in which dog owners
                          can take turns boarding eachothers dogs while
                          their fellow neigbor is on vacation or just
                          needs a break!
                        </ol>
                      </CardContent>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="card">
                    <div class="card-image">
                      <img src="../DeadMan-IMG.jpg" />
                      <span class="card-title">DeadMan</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">
                          <a href="https://vigilant-bohr-e6da08.netlify.com/">
                            site
                          </a>
                        </i>
                      </a>
                    </div>
                    <div class="card-content">
                      <CardContent>
                        <H3>Technologies Used:</H3>
                        <ol>HTML, CSS and JQuery</ol>
                        <H3>Inspiration:</H3>
                        <ol>
                          As a Deadhead I thought it would be fun to
                          incorporate the Grateful Dead theme into my
                          Hangman game. Given the overlap between
                          Hangman and the band's constant allusions to
                          death, I think Jerry Garcia would be proud.
                        </ol>
                      </CardContent>
                    </div>
                  </div>
                </div>
              </Span>
            </Body>
          </div>
        );
    }
}

export default Portfolio;