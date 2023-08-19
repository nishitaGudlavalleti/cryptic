import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
/*2.get Headers from rapid Api*/
const cryptoNewsHeaders={
    
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '0f3937bdf1msh960df1143ce0765p196267jsn497fb19b8f83',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'

}
/*get base url*/
const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      })
  
      })
    } )

export const {
  useGetCryptoNewsQuery
} = cryptoNewsApi;