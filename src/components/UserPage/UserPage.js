import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// import FavoriteItem from '../FavoriteItem/FavoriteItem';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  render() {
    //create a dispatch to get favorites
    return (
      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.name}
        </h1>
        <div>
          {console.log('props are:', this.props)}
          <h2>Favorite Events</h2>
          {/* this will eventually be directed to a class component that has a map with event favorite by this user, data below is dummy data */}
          <ul>
            <p>Viva Las Vegas</p>
            <p>Nashville Boogie</p>
            <p>Miss Shannon's Sock Hop</p>
          </ul>
        </div>
        <LogOutButton className="log-in" />
      </div>
    )
  }

};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  events: state.events
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
