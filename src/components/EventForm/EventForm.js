import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventForm extends Component {
    render() {
        return (
            <div>
                <h3>Add Event</h3>
                <input placeholder="event name"></input>
            </div>
        )//end return
    }//end render
}//end class

export default connect()(EventForm);