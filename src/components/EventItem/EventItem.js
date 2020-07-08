import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './EventItem.css';

class EventItem extends Component { 

    render() {
        const name = this.props.item.event_name;
        const description = this.props.item.description;
        const location = this.props.item.location;
        const startDate = this.props.item.start_date;
        const endDate = this.props.item.end_date;
        const link = <span><a href={this.props.item.link}>{this.props.item.event_name}</a></span>

        return (
            <div className="eventItems">
                    <div className="items">
                        <b>{name}</b>
                    </div>
                    <div className="items">
                        <span>Dates: </span>
                        <Moment format="MM/DD/YYYY">{startDate}</Moment>
                        <span> - </span>
                        <Moment format="MM/DD/YYYY">{endDate}</Moment>
                    </div>
                    <div className="items">
                        {location}
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    <div className="items">
                        {link}
                    </div>
                    <br/>
            </div>

        )//end return
    }//end render
}//end class

export default connect()(EventItem);