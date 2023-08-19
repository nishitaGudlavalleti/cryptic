
//connecting with store
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '0f3937bdf1msh960df1143ce0765p196267jsn497fb19b8f83',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com'}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    })

    })
  } )

    


export const {
  useGetCryptosQuery
} = cryptoApi;