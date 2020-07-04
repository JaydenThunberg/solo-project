import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class EventItem extends Component {
  deleteEvent = () => {
      console.log('clicked DELETE')
  }  

    render() {
        const name = this.props.item.event_name;
        const description = this.props.item.description;
        const startDate = this.props.item.start_date;
        const endDate = this.props.item.end_date;

        return (
            <div>
                <p>Event:</p>
                <ul>
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
                </ul>
            </div>

        )//end return
    }//end render
}//end class

export default connect()(EventItem);