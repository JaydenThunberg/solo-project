import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* eventSaga() {
    yield takeEvery( 'GET_EVENTS', fetchEvents)
}

function* fetchEvents() {
    try {
        const response = yield axios.get('/api/events');
        console.log('in getEvents', response.data);
        yield put({ type: 'SET_EVENTS', payload: response.data}); 
    } catch (err) {
        console.log('error getting events', err);
        alert('Sorry, there was an error getting the events.')
    }
}

export default eventSaga;