//this will have a map of the redux state with stores
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreItem from '../StoreItem/StoreItem';

//material-ui for temporary table
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

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
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Store Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxState.stores.map((item) => (
                <TableRow key={item.store_name}>
                  <TableCell component="th" scope="row">
                    {item.store_name}
                  </TableCell>
                  {/* <TableCell align="right">{name}</TableCell> */}
                  <TableCell align="left">{item.description}</TableCell>
                  <TableCell align="left">{item.location}</TableCell>
                  <TableCell align="left">{<span><a href={item.link}>{item.store_name}</a></span>}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Stores);