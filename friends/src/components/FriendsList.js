import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

class FriendsList extends React.Component {

  state = {
    friends: []  //array of flat object with id, name, age, email
  };

  componentDidMount() {
    console.log("Friends componentDidMount");
    this.getData();
  }
// ????
  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res=> {
        this.setState({
          ...this.state,
          friends: res.data
        });
      })
      .catch(err=> {
        console.log(err);
      })
  };

  render() {
    const  { friends } = this.state;
    return (
        <div className="friends-container">
            {friends.map (friend => {
                return(
                <div key={friend.id} className="friend">
                    <p>Name: {friend.name}, {friend.age}</p>
                    <p>email: {friend.email}</p>
                </div>
            )})}
        </div>
    )};
}
export default FriendsList;
