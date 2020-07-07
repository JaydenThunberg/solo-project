const storesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STORES':
            return action.payload;
        default:
            return state;
    }
}

// events will be on the redux state at:
// state.events
export default storesReducer;