// import React, { Component } from 'react';
// import axios from 'axios'


// class AddBookingForm extends Component {

//     state = {
//         booking: {
//             userName: ''
//         }
//     }

//     handleChange = (event) => {
//         const newBooking = { ...this.state.booking }
//         console.log("posts here", this.state.booking)
//         newBooking[event.target.name] = event.target.value
//         this.setState({ booking: newBooking })

//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         const booking = this.state.booking
//         const postId = this.props.match.params.id
//         axios.post(`/api/posts/${postId}`, booking)
//             .then(() => this.props.history.goBack())

//     }




//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="User Name - Gallons Committed"
//                             name="userName"
//                             value={this.state.booking.userName}
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default AddBookingForm;