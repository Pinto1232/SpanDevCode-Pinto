import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const WallpapersApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: WallpapersApiHeader });


export const WallpapersApi = createApi({
    reducerPath: 'WallpapersApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getWallpapers: builder.query({
            query: () => createRequest('topics/wallpapers/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetWallpapersQuery,
} = WallpapersApi;