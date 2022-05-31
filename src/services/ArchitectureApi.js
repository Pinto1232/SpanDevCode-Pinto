import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const ArchitectureApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: ArchitectureApiHeader });


export const ArchitectureApi = createApi({
    reducerPath: 'ArchitectureApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getAchitecture: builder.query({
            query: () => createRequest('topics/architecture/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetAchitectureQuery,
} = ArchitectureApi;