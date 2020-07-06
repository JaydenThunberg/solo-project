//this will have a PUT request
//a cancel button that sends back to '/edit'
import React, {Component} from 'react';
import {connect} from 'react-redux';

class EventDetails extends Component {
    render(){
        return(
            <h1>EventDetails</h1>
        )//end render
    }//end return
}//end class

export default connect()(EventDetails);
