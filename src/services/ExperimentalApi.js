import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const ExperimentalApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: ExperimentalApiHeader });


export const ExperimentalApi = createApi({
    reducerPath: 'ExperimentalApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getExperimental: builder.query({
            query: () => createRequest('topics/experimental/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetExperimentalQuery,
} = ExperimentalApi;