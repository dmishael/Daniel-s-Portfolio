import React, { Component } from 'react';
// import axios from 'axios'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from "../components/Nav";

const Body = styled.body`
display: block;
float: left;
font-family: 'ubuntu','times new roman';
padding-top: 14%;
padding-bottom: 10%;
margin-left: 15%;
`
// const Title = styled.h2`
//     float: right;
//     padding-top: 6%;
//     margin-right: 47%;
//     font-family: 'sans simplifica','times new roman';
//     `

const IMG = styled.img`
    display: block;
    float: right;
    width: 27%;
    margin-left: 5%;
    border-radius: 20px;
    margin-right: 15%;
`


// const Button = styled.a`
// text-decoration: none;
// background: #ffec99;
// text-align: "center";
// display: "inline";
// color: black;
// font-size: 1em;
// margin: 3%;
// padding: 0.25em 1em;
// border: .8px solid black;
// border-radius: 20px;
// `

// BOOP, one day you'll see this comment
// from cameron

// const List = styled.div`
// text-decoration: none;
// font-weight: bold;
// color: "black";
// display: inline-block;
// `
// const StyledLink = styled(Link)`
// text-decoration: none;
// background: #ffec99;
// text-align: "center";
// color: black;
// font-size: 1em;
// margin: 3%;
// padding: 0.25em 1em;
// border: .8px solid black;
// border-radius: 20px;
// display: inline-block;
// `
// const Edit = styled.div`
// margin-left: 60%;
// `
// const Nav = styled.nav`
// font-family: Courier New;
// width: 100%;
// background-color: #45616C;
// text-align: right;
// `
// const NavLink = styled(Link)`
// text-decoration: none;
// background: #ffec99;
// border-radius: 20px;
// padding: 1%;
// margin: 20px;
// color: black;
// `

class Users extends Component {

    // state = {
    //     users: []
    // }

    // componentDidMount() {
    //     this.getAllUsers()
    // }

    // getAllUsers = () => {
    //     axios.get(`api/users`).then((res) => {
    //         this.setState({ users: res.data })

    //     })
    // }

    // deleteIdea = (event, userId) => {
    //     event.preventDefault()
    //     axios.delete(`/api/users/${userId}`).then((res) => {
    //         this.getAllUsers()
    //     })
    // }

    render() {

        return (

            <div>
                <Navbar/>
                {
                    <div>
                        {/* <Title>Who Am I?</Title> */}
                        <Body>

                            <IMG src="GA_Profile.jpg" alt="Profile Shot" />
                            <h4>Who Am I?</h4>
                            I am an intellectually curious full stack web developer with a passion for bringing diverse perspectives
                            together to solve systemic problems. With over 3 years of professional financial modeling experience I have
                            developed a deep understanding of the art and science of piecing algorithms together to tell a story. From capturing
                            live music through a camera lens to creating detailed and dynamic financial models for multi-million dollar businesses,
                            I have learned that the best solutions often come when fusing both the left and right sides of the brain.
                        </Body>
                    </div>
                }


            </div>
        )
    }
}


export default Users;