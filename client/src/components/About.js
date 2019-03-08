import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const UserList = styled.div`
// text-align: left-center;
// margin-left: 33%;
// margin-right: 33%;

// `
// const UserBorder = styled.ul`
// border-radius: 20px;
// border: 1.5px solid black;
// padding: 10px 10px 10px 10px;
// font-family: Courier New;
// `

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

    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(`api/users`).then((res) => {
            this.setState({ users: res.data })

        })
    }

    deleteIdea = (event, userId) => {
        event.preventDefault()
        axios.delete(`/api/users/${userId}`).then((res) => {
            this.getAllUsers()
        })
    }

    render() {

        return (

            <div>
                {
                <div>
                <h1>About Me</h1>
                <ul>I am an intellectually curious full stack web developer with a passion for bringing diverse perspectives 
                    together to solve systemic problems. With over 3 years of professional financial modeling experience I have 
                    developed a deep understanding of the art and science of piecing algorithms together to tell a story. From capturing 
                    live music through a camera lens to creating detailed and dynamic financial models for multi-million dollar businesses, 
                    I have learned that the best solutions often come when fusing both the left and right sides of the brain.</ul>
                    </div>
                }

                
            </div>
        )
    }
}


export default Users;