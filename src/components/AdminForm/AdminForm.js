import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Events/Events.css';

class AdminForm extends Component {
    state = {
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        location: '',
        mediaLink: '',
        approved: true
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
        this.props.dispatch({ type:'ADMIN_EVENT', payload: this.state})
        this.setState({
            name: '',
            startDate: '',
            endDate: '',
            description: '',
            location: '',
            mediaLink: '',
            approved: true
        })
    }//end send details

    render() {
        return (
            <div>
                <div className="eventForm">
                <div className="formItems formItem1">
                <h3>Add Event</h3>
                </div>
                    <div className="formItems formItem2">
                        <span>Event Name: </span><input placeholder="enter name" value={this.state.name} onChange={(event) => this.eventDetails(event, 'name')} />
                    </div>
                    <div className="formItems">
                    <span>Dates: </span>
                    <input placeholder="Start: MM/DD/YYYY" value={this.state.startDate} onChange={(event) => this.eventDetails(event, 'startDate')} />
                    <span>to</span>
                    <input placeholder="End: MM/DD/YYYY" value={this.state.endDate} onChange={(event) => this.eventDetails(event, 'endDate')} />
                    </div>
                    <div className="formItems">
                    <span>Description: </span><input placeholder="event description goes here" value={this.state.description} onChange={(event) => this.eventDetails(event, 'description')} />
                    </div>
                    <div className="formItems">
                    <span>Location: </span><input placeholder="City, State, Country" value={this.state.location} onChange={(event) => this.eventDetails(event, 'location')} />
                    </div>
                    <div className="formItems">
                    <span>Link: </span><input placeholder="website/ media" value={this.state.mediaLink} onChange={(event) => this.eventDetails(event, 'mediaLink')} />
                    </div>
                    <div className="alignDelete">
                        <button className="button button1" onClick={this.sendDetails}>Add Event</button>
                    </div>
                    <br />
                </div>
            </div>
        )//end return
    }//end render
}//end class

export default connect()(AdminForm);