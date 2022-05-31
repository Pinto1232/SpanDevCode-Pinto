import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const CurrentEventsApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: CurrentEventsApiHeader });


export const CurrentEventsApi = createApi({
    reducerPath: 'CurrentEventsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getCurrentEvents: builder.query({
            query: () => createRequest('topics/current-events/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetCurrentEventsQuery,
} = CurrentEventsApi;