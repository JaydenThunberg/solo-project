//This will be a PUT request
//only admins should be able to access ('/edit') put in a protected route
//cancel but to got back to '/events' and save that sends PUT request to Saga and DB
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';

class EditEvent extends Component{
    deleteEvent = () => {
        console.log('clicked DELETE')
        this.props.dispatch({ type: 'DELETE_EVENT', payload: this.props.item.id});
        this.props.dispatch({ type: 'GET_EVENT' });
    }//end deleteEvent 


    render(){
        {console.log('this.props is:', this.props)}
        // const name = this.props.item.event_name;
        // const description = this.props.item.description;
        // const startDate = this.props.item.start_date;
        // const endDate = this.props.item.end_date;
        return(
            <div>
                <h1>Edit Event</h1>
                <p>Event:</p>
                {/* <ul>
                    <li>
                        <b>{name}</b>
                    </li>
                    <li>
                        <span>Dates: </span>
                        <Moment format="MM/DD/YYYY">{startDate}</Moment>
                        <span> - </span>
                        <Moment format="MM/DD/YYYY">{endDate}</Moment>
                    </li>
                    <li>
                        {description}
                    </li>
                    <button onClick={this.deleteEvent}>Delete</button>
                </ul> */}
            </div>
        )//end return
    }//end render
}//end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(EditEvent);