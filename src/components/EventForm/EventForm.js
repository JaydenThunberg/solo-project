import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventForm extends Component {
    state = {
        name: '',
        startDate: '',
        endDate: '',
        location: '',
        mediaLink: ''
    }
    eventDetails = (event, type) => {
        console.log('eventDetails:', event.target.value);
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }//end eventDetails

    sendDetails = () => {
        console.log('state:', this.state)
        // this.props.dispatch({ type:'NEW_EVENT', payload: this.state})
        this.setState({
            name: '',
            startDate: '',
            endDate: '',
            location: '',
            mediaLink: ''
        })
    }//end send details

    render() {
        return (
            <div>
                <h3>Add Event</h3>
                <div className="eventForm">
                    <span>Event Name: </span><input placeholder="enter name" value={this.state.name} onChange={(event) => this.eventDetails(event, 'name')} />
                    <br />
                    <span>Dates: </span>
                    <input placeholder="Start: MM/DD/YYYY" value={this.state.startDate} onChange={(event) => this.eventDetails(event, 'startDate')} />
                    <span>to</span>
                    <input placeholder="End: MM/DD/YYYY" value={this.state.endDate} onChange={(event) => this.eventDetails(event, 'endDate')} />
                    <br />
                    <span>Location: </span><input placeholder="City, State, Country" value={this.state.location} onChange={(event) => this.eventDetails(event, 'location')} />
                    <span>Link: </span><input placeholder="website/ media" value={this.state.mediaLink} onChange={(event) => this.eventDetails(event, 'mediaLink')} />
                    <br />
                    <button onClick={this.sendDetails}>Request to Add</button>
                    <br />
                </div>
                <p>An admin will need to review your request.</p>
            </div>
        )//end return
    }//end render
}//end class

export default connect()(EventForm);