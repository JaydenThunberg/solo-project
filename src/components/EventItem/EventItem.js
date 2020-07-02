import React, {Component} from 'react';
import {connect} from 'react-redux';

class EventItem extends Component{
    render(){
        return(
            <span>EventItems</span>
        )//end return
    }//end render
}//end class

export default connect()(EventItem);