//this will have a PUT request
//a cancel button that sends back to '/edit'
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    }//end editMovie


    render() {
        return (
            <div>
                <h1>EventDetails</h1>
                <div>
                    <span>Event Name: </span><input placeholder={this.props.reduxState.details.event_name} onChange={(event) => this.editEventDetails(event, 'name')}></input>
                    <button>Update Details</button>
                </div>
            </div>
        )//end render
    }//end return
}//end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(EventDetails);