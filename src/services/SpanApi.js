import  {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 


/* Create header */
const SpanHeader = { 
    'Content-Type': 'application/json',
}; 

/* Base url */
const baseUrl = 'https://api.jsonbin.io/b/6231abada703bb67492d2b8f'

const createRequest = (url) => ({url, headers: SpanHeader}) 

export const SpanApi = createApi({
    reducerPath: 'SpanApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    
    endpoints: (builder) => ({ 
        getDevOceanData: builder.query({
            query: () => createRequest(baseUrl)
        })
    })

})

export const {
    useGetSpanDataQuery
} = SpanApi;