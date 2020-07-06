const eventDetails = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return action.payload;
        case 'EDIT_DETAILS':
            return action.payload; 
        default:
            return state;
    }
}

// events will be on the redux state at:
// state.details
export default eventDetails;