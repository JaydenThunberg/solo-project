import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditEvent from '../EditEvent/EditEvent';
import EventForm from '../EventForm/EventForm';

class Events extends Component {
    // Renders the entire Events on the DOM

    componentDidMount() {
        console.log('component did mount')
        //dispatch call to get the events
        this.props.dispatch({ type: 'GET_EVENTS' })
    }//end componentDidMount
    render() {
        return (
            <div className="Events">
                <h1>Events</h1>
                {/* This is a map of the redux state to get events and send them to EditEvent */}
                {/* {console.log(this.props.reduxState.events)} */}
                {this.props.reduxState.events.map((item) => {
                    return (
                        <EditEvent key={item.event_name} item={item} />
                    )
                })}
                <EventForm/>
            </div>
        );//end return
    }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Events);