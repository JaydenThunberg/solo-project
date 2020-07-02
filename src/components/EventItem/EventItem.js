import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventItem extends Component {
    render() {
        const name = this.props.item;
        const description = this.props.item.description;
        return (
            <div>
                <p>EventItems</p>
                {console.log('in EventItem props are:', this.props.item)}
                {description}
            </div>

        )//end return
    }//end render
}//end class

export default connect()(EventItem);