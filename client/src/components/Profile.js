import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Profile extends Component {

    state = {
        user: {}
    }
    
    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`/api/users/${id}`).then((res)=>{
            console.log(res)
            this.setState({user: res.data})
        
        })
}

    render() {
        return (
            <div>
                <h1>Profile: {this.state.user.name}</h1>
                <h1>Address: {this.state.user.address}</h1>
                {console.log(this.state.user.posts)}
                {/* <h1>{this.state.user.posts.reduce((a,b) => {
                    return( a + b)
                })}</h1>
                     */}
               
                <div>
                <Link to = {`/Posts/${this.props.match.params.id}`}>Let's Compost</Link>
                </div>
            </div>

        );
    }
}
// amountComposted: Number,
// routesHauled: Number,
// availableCredit: Number,
// name: String,
// address: String,
// posts: [
export default Profile;