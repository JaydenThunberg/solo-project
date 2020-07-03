import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class EventItem extends Component {


    render() {
        // formatDate = (dateString) => {
        //     let date = new Date(dateString);
        //     return date.toLocaleDateString();
        // }; // end formatDate

        const name = this.props.item.event_name;
        const description = this.props.item.description;
        const startDate = this.props.item.start_date;
        const endDate = this.props.item.end_date;
        // const startDate = formatDate(this.props.item.start_date);
        return (
            <div>
                <p>Event:</p>
                {console.log('in EventItem props are:', this.props.item)}
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
                    <button>Delete</button>
                </ul>
            </div>

        )//end return
    }//end render
}//end class

export default connect()(EventItem);