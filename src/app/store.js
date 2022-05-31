import { configureStore } from '@reduxjs/toolkit';
import { SpanApi } from '../services/SpanApi';



export default configureStore({ 
    reducer: {
        [SpanApi.reducerPath]: SpanApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(SpanApi.middleware)
})


