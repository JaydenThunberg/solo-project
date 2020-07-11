//This will be a PUT request
//only admins should be able to access ('/edit') put in a protected route
//cancel but to got back to '/events' and save that sends PUT request to Saga and DB
//ADD Sweet Alert are you sure you want to delete this?
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import '../EventItem/EventItem.css';
import '../App/App.css';

class EditEvent extends Component {
    deleteEvent = () => {
        console.log('clicked DELETE')
        //ADD Sweet Alert
        this.props.dispatch({ type: 'DELETE_EVENT', payload: this.props.item.id });
        this.props.dispatch({ type: 'GET_ADMIN_EVENTS' });
    }//end deleteEvent 

    editEvent = (id) => {
        console.log('handling detail for:', id);
        this.props.dispatch({ type: 'GET_DETAILS', payload: this.props.item });
        this.props.history.push(`/edit/${this.props.item.event_name}`)
    }


    render() {
        const name = this.props.item.event_name;
        const description = this.props.item.description;
        const startDate = this.props.item.start_date;
        const endDate = this.props.item.end_date;
        const link = <span><a href={this.props.item.link}>{this.props.item.event_name}</a></span>
        return (
            <div className="eventItems">
                <div className="items eventText">
                    <b>{name}</b>
                </div>
                <div className="items">
                    <span>Dates: </span>
                    <Moment format="MM/DD/YYYY">{startDate}</Moment>
                    <span> - </span>
                    <Moment format="MM/DD/YYYY">{endDate}</Moment>
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="items">
                    {link}
                </div>
                <br />
                <div className="buttons">
                <button className="button button1" onClick={this.deleteEvent}>Delete</button>
                <button className="button button1" onClick={() => this.editEvent(this.props.reduxState.details)}>Update Event</button>
                </div>
            </div>
        )//end return
    }//end render
}//end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(EditEvent);