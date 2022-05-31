import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const NatureApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: NatureApiHeader });


export const NatureApi = createApi({
    reducerPath: 'NatureApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getNature: builder.query({
            query: () => createRequest('topics/nature/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetNatureQuery,
} = NatureApi;