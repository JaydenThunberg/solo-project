import axios from 'axios';
import { put, takeEvery, take } from 'redux-saga/effects';

function* eventSaga() {
    yield takeEvery( 'GET_EVENTS', fetchEvents)
    yield takeEvery('NEW_EVENT', addEvent)
}

function* addEvent(action){
    console.log(action.payload)
    // try {
    //     //send payload to DB
    //     yield axios.put(`/api/events/${action.payload.name}`, (action.payload))
    //     // yield put({ type: 'SET_EVENTS'});
    // } catch (err) {
    //     alert('Sorry, there was an error adding the event.')
    //     console.log('error in editMovie', err);
    // }
}//end addEvent


function* fetchEvents() {
    try {
        const response = yield axios.get('/api/events');
        console.log('in getEvents', response.data);
        yield put({ type: 'SET_EVENTS', payload: response.data}); 
    } catch (err) {
        alert('Sorry, there was an error getting the events.')
        console.log('error getting events', err);
    }
}//end fetchEvents

export default eventSaga;