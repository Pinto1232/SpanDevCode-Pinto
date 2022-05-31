import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const DigitalNomadApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: DigitalNomadApiHeader });


export const DigitalNomadApi = createApi({
    reducerPath: 'DigitalNomadApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getDigitalNomad: builder.query({
            query: () => createRequest('topics/digital-nomad/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetDigitalNomadQuery,
} = DigitalNomadApi;