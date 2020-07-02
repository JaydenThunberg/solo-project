import React, {Component} from 'react';
import {connect} from 'react-redux';

class EventItem extends Component{
    render(){
        return(

            <h1>EventItems</h1>
        )//end return
    }//end render
}//end class

export default connect()(EventItem);