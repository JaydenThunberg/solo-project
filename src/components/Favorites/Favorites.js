//this will be a map of the individual users favorites
import React, { Component } from 'react';
import {connect} from 'react';

class Favorites extends Component {
  // Renders the entire Favorites on the DOM
  render() {
    return (
      <div className="Favorites">
        <p>Favorites</p>
      </div>
    );//end return
  }//end render
}// end class
 
const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Favorites);