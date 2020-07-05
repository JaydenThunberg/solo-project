//This will be a PUT request
//only admins should be able to access ('/edit') put in a protected route
//cancel but to got back to '/events' and save that sends PUT request to Saga and DB
import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditEvent extends Component{
    render(){
        return(
            <div>
                <h1>Edit Event</h1>
            </div>
        )//end return
    }//end render
}//end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect()(EditEvent);