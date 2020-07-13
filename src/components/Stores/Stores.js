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

  //temporary table
// createData = (name, calories, fat, carbs, protein) => {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
render() {
  // const name = row.store_name;
  // const description = row.description;
  // const location = row.location;
  // const link = <span><a href={row.link}>{row.store_name}</a></span>
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
      {/* <h1>Stores</h1>
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
        })} */}
    </div>
  );//end return
}//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Stores);