const storesReducer = (state = [], action) => {
    console.log('action and state:', action, state)
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