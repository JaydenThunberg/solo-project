//this will have a PUT request
//a cancel button that sends back to '/edit'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import './EventDetails.css';

class EventDetails extends Component {
    state = {
        id: this.props.reduxState.details.id,
        name: this.props.reduxState.details.event_name,
        startDate: this.props.reduxState.details.start_date,
        endDate: this.props.reduxState.details.end_date,
        description: this.props.reduxState.details.description,
        location: this.props.reduxState.details.location,
        mediaLink: this.props.reduxState.details.link
    }
    componentDidMount() {
        console.log('props for detail are:', this.props.reduxState.details)
        console.log('beginning state is:', this.state)
    }

    updatedDetails = () => {
        console.log('current state:', this.state)
    }

    editEventDetails = (event, type) => {
        console.log('edit details are:', event.target.value);
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }//end editEventDetails

    sendUpdatedEvent = () => {
        console.log('in send updated event', this.state)
        //this will have dispatch to PUT request
        this.props.dispatch({ type:'UPDATE_DETAILS', payload: this.state})
    }

    backToEvents = () => {
        this.props.history.push('/events')
    }

    render() {
        return ( 
            // {console.log('start date is', formatDate)}
            <div className="eventDetailsForm">
                <div className="detailDiv">
                <h1>Event Details for {this.state.name}</h1>
                </div>
                <div className="detailDiv">
                <p>The only details that will change are those that are edited. Feel free to change as much as you like or simply just the name or description.</p>
                </div>
                <div className="detailsInput">
                    <div className="detailDiv">
                    <span>Event Name: </span><input  placeholder={this.state.name} onChange={(event) => this.editEventDetails(event, 'name')}></input>
                    </div>
                    <div className="detailDiv">
                    <span>Start Date: </span><input placeholder={this.props.reduxState.details.start_date} onChange={(event) => this.editEventDetails(event, 'startDate')}></input>
                    </div>
                    <div className="detailDiv">
                    <span>End Date: </span><input  placeholder={this.props.reduxState.details.end_date} onChange={(event) => this.editEventDetails(event, 'endDate')}></input>
                    <br/>
                    </div>
                    <div className="detailDiv">
                    <span>Description: </span><input placeholder={this.props.reduxState.details.description} onChange={(event) => this.editEventDetails(event, 'description')}></input>
                    </div>
                    <div className="detailDiv">
                    <span>Location: </span><input placeholder={this.props.reduxState.details.location} onChange={(event) => this.editEventDetails(event, 'location')}></input>
                    </div>
                    <div className="detailDiv">
                    <span>Link to Media: </span><input placeholder={this.props.reduxState.details.link} onChange={(event) => this.editEventDetails(event, 'mediaLink')}></input>
                    </div>
                    <br/>
                    <div className="detailDiv">
                    <button className="button button1" onClick={this.sendUpdatedEvent}>SAVE</button>
                    <button className="button button1" onClick={this.backToEvents}>CANCEL</button>
                    </div>
                </div>
            </div>
        )//end render
    }//end return
}//end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(EventDetails);