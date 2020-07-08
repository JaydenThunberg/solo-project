import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.name }
    </h1>
    <div>
      <h2>Favorite Events</h2>
      {/* this will eventually be directed to a class component that has a map with event favorite by this user, data below is dummy data */}
      <ul>
        <li>Viva Las Vegas</li>
        <li>Nashville Boogie</li>
        <li>Miss Shannon's Sock Hop</li>
      </ul>
    </div>
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
