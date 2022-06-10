import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const FashionApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: FashionApiHeader });


export const FashionApi = createApi({
    reducerPath: 'FashionApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getFashion: builder.query({
            query: () => createRequest('topics/fashion/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetFashionQuery,
} = FashionApi;