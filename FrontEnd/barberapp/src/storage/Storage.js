import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'
import dateReducer from '../reducers/dateReducer'

export const store = configureStore({
    reducer: {
        Auth:authReducer,
        Date:dateReducer
    },
})