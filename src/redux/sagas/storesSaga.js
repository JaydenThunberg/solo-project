import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* storesSaga() {
    yield takeEvery( 'GET_STORES', fetchStores)
}

function* fetchStores() {
    try {
        const response = yield axios.get('/api/stores');
        console.log('in getStores', response.data);
        yield put({ type: 'SET_STORES', payload: response.data}); 
    } catch (error) {
        alert('Sorry, there was an error getting the Stores.')
        console.log('error getting stores', error);
    }
}//end fetchStores

export default storesSaga;