import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const SpanApiHeader = {
   /* No header at the moment */
}

const baseUrl = 'https://api.unsplash.com/';

const createRequest = (url) => ({ url, headers: SpanApiHeader }); 

export const SpanApi = createApi({
    reducerPath: 'SpanApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({ 
        getPhotos: builder.query({
            query: () => createRequest('topics/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg ')
        })
    })
});

export const {
    useGetPhotosQuery,
} = SpanApi;