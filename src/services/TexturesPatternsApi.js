import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const TexturesPatternsApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: TexturesPatternsApiHeader });


export const TexturesPatternsApi = createApi({
    reducerPath: 'TexturesPatternsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getTexturePatterns: builder.query({
            query: () => createRequest('topics/textures-patterns/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetTexturePatternsQuery,
} = TexturesPatternsApi;