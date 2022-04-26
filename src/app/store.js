import { configureStore } from '@reduxjs/toolkit'
import { SpanApi } from '../services/SpanApi'


export default configureStore({
    reducer: {
        // reducer
        [SpanApi.reducerPath]: SpanApi.reducer,
    }, 
})