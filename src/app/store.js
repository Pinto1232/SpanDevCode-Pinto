import { configureStore } from '@reduxjs/toolkit';
import { SpanApi } from '../services/SpanApi';
import {DigitalNomadApi} from '../services/DigitalNomadApi'
import {ArchitectureApi} from '../services/ArchitectureApi'
import {BusinessWorkApi} from '../services/BusinessWorkApi'
import {CurrentEventsApi} from '../services/CurrentEventsApi'
import {ExperimentalApi} from '../services/ExperimentalApi'
import {NatureApi} from '../services/NatureApi'
import { TexturesPatternsApi } from '../services/TexturesPatternsApi'
import { TreeDRendersApi } from '../services/TreeDRendersApi'
import { WallpapersApi } from '../services/WallpapersApi'



export default configureStore({
    reducer: {
        [SpanApi.reducerPath]: SpanApi.reducer,
        [DigitalNomadApi.reducerPath]: DigitalNomadApi.reducer,
        [ArchitectureApi.reducerPath]: ArchitectureApi.reducer,
        [BusinessWorkApi.reducerPath]: BusinessWorkApi.reducer,
        [CurrentEventsApi.reducerPath]: CurrentEventsApi.reducer,
        [ExperimentalApi.reducerPath]: ExperimentalApi.reducer,
        [NatureApi.reducerPath]: NatureApi.reducer,
        [TexturesPatternsApi.reducerPath]: TexturesPatternsApi.reducer,
        [TreeDRendersApi.reducerPath]: TreeDRendersApi.reducer,
        [WallpapersApi.reducerPath]: WallpapersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SpanApi.middleware),
});


