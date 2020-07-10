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
          <h2><span role="img" aria-label="yellow star">⭐️ </span>Favorite Events<span role="img" aria-label="yellow star"> ⭐️</span></h2>
          {/* this will eventually be directed to a class component that has a map with event favorite by this user, data below is dummy data */}
          <ul>
            <p><a href="https://www.vivalasvegas.net/">Viva Las Vegas</a></p>
            <p><a href="http://www.nashvilleboogie.com/">Nashville Boogie</a> </p>
            <p><a href="https://www.facebook.com/groups/missshannonssatsockhop/events">Miss Shannon's Sock Hop</a></p>
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
