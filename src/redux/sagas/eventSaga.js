import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* eventSaga() {
    yield takeEvery( 'GET_EVENTS', fetchEvents)
    yield takeEvery('NEW_EVENT', addEvent)
    yield takeEvery('DELETE_EVENT', deleteEvent)
    yield takeEvery('ADMIN_EVENT', adminEvent)
    yield takeEvery('GET_ADMIN_EVENTS', fetchAdminEvents)
    yield takeEvery ('UPDATE_DETAILS', updateEvent)
    yield takeEvery ('UPDATE_APPROVED', updateApproved)
}

function* updateApproved(action) {
    console.log('in update event with:', action)
    try{
        //send payload to DB
        yield axios.put(`/api/admin/approved/${action.payload.name}`, (action.payload))
        yield put({ type: 'GET_EVENTS'})
    } catch(error){
        console.log('error making update', error)
    } 
}

function* updateEvent(action) {
    console.log('in update event with:', action)
    try{
        //send payload to DB
        yield axios.put(`/api/admin/${action.payload.name}`, (action.payload))
        yield put({ type: 'GET_EVENTS'})
    } catch(error){
        console.log('error making update', error)
    } 
}

function* deleteEvent(action){
    try{
        yield axios.delete(`api/events/${action.payload}`)
        yield put({type: 'GET_EVENTS'})
    } catch(error) {
        alert('Sorry, there was an error deleting the event. Please contact an admin.')
        console.log('error in DELETE event:', error);
    }
}

function* addEvent(action){
    console.log(action.payload)
    try {
        //send payload to DB
        yield axios.post(`/api/events`, (action.payload))
        yield put({ type: 'GET_EVENTS'});
    } catch (error) {
        alert('Sorry, there was an error adding the event.')
        console.log('error in addEvent', error);
    }
}//end addEvent

function* adminEvent(action){
    console.log(action.payload)
    try {
        //send payload to DB
        yield axios.post(`/api/admin`, (action.payload))
        yield put({ type: 'GET_ADMIN_EVENTS'});
    } catch (error) {
        alert('Sorry, there was an error adding the event.')
        console.log('error in adminEvent', error);
    }
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

function* fetchAdminEvents() {
    try {
        const response = yield axios.get('/api/admin');
        console.log('in getEvents', response.data);
        yield put({ type: 'SET_ADMIN_EVENTS', payload: response.data}); 
    } catch (err) {
        alert('Sorry, there was an error getting the events.')
        console.log('error getting events', err);
    }
}//end fetchEvents

export default eventSaga;