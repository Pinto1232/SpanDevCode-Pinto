import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const BusinessWorkApiHeader = {
    /* No header at the moment required */
}

const baseUrl = 'https://api.unsplash.com/';


const createRequest = (url) => ({ url, headers: BusinessWorkApiHeader });


export const BusinessWorkApi = createApi({
    reducerPath: 'BusinessWorkApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({
        getBusinessWork: builder.query({
            query: () => createRequest('topics/business-work/photos/?client_id=1yyEN8iqlLMqHhdKEXQhziAhl-lKwbNw6wti9niIlhg')
        })
    })
});

export const {
    useGetBusinessWorkQuery,
} = BusinessWorkApi;