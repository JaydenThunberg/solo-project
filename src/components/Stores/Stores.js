//this will have a map of the redux state with stores
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreItem from '../StoreItem/StoreItem';

class Stores extends Component {
  // Renders the entire Stores on the DOM
  componentDidMount() {
    console.log('component did mount stores')
    //dispatch call to get the stores
    this.props.dispatch({ type: 'GET_STORES' })
    console.log('props in stores are:', this.props)
  }//end componentDidMount

  render() {
    return (
      <div className="stores">
        <h1>Stores</h1>
        <table>
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Link</th>
            </tr>
          </thead>
          </table>
        {this.props.reduxState.stores.map((item) => {
          return (
            <StoreItem key={item.store_name} item={item} history={this.props.history} />
          )
        })}
      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Stores);