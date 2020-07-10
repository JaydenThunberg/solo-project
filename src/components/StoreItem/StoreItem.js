//this will be the individual store items
//they will display in a table

import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoreItem extends Component {
  // Renders the entire StoreItem on the DOM
  backToStores = () => {
    console.log('back to stores for admin')
  }
  render() {
    const name = this.props.item.store_name;
    const description = this.props.item.description;
    const location = this.props.item.location;
    const link = <span><a href={this.props.item.link}>{this.props.item.store_name}</a></span>
    return (
      <div className="storeItems">
        {console.log('item props', this.props.item)}
        <table>
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{description}</td>
              <td>{location}</td>
              <td>{link}</td>
            </tr>
          </tbody>
        </table>
        <div>
          {/* <button onClick={this.backToStores}>Back</button> */}
        </div>
      </div>
    );//end return
  }//end render
}// end class

export default connect()(StoreItem);