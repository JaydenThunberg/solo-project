//this will have a map of the redux state with stores
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Stores extends Component {
  // Renders the entire Stores on the DOM
  render() {
    return (
      <div className="stores">
        <p>Stores</p>
      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Stores);