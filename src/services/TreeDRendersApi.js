import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const TreeDRendersApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: TreeDRendersApiHeader });


export const TreeDRendersApi = createApi({
    reducerPath: 'TreeDRendersApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getTreeDRenders: builder.query({
            query: () => createRequest('topics/3d-renders/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetTreeDRendersQuery,
} = TreeDRendersApi;