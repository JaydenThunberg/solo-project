//this will be the individual store items
//they will display in a table

import React, { Component } from 'react';
import {connect} from 'react-redux';

class StoreItem extends Component {
  // Renders the entire StoreItem on the DOM
  render() {
    return (
      <div className="storeItems">
        <p>StoreItem</p>
      </div>
    );//end return
  }//end render
}// end class

export default connect()(StoreItem);