import {configureStore} from '@reduxjs/toolkit'
import rootreducer from './rootreducer'
import createSageMiddleware from 'redux-saga'
import sagaData from './saga'
const sagaMiddleware=createSageMiddleware();

const store=configureStore({
    reducer:rootreducer,
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(sagaData)
export default store;