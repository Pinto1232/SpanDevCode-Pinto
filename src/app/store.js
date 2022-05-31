import { configureStore } from '@reduxjs/toolkit';
import { SpanApi } from '../services/SpanApi';
import {DigitalNomadApi} from '../services/DigitalNomadApi'



export default configureStore({
    reducer: {
        [SpanApi.reducerPath]: SpanApi.reducer,
        [DigitalNomadApi.reducerPath]: DigitalNomadApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SpanApi.middleware),
  
    /* middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(DigitalNomadApi.middleware) */
});


