//this will be a map of the reduxState
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventItem from '../EventItem/EventItem';

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
                {/* This will have a map of the redux state to get events and send them to EventItem */}
                <EventItem />
                {console.log(this.props.reduxState.events)}
            </div>
        );//end return
    }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Events);