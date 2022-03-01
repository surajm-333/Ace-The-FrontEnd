import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'e01e91e7d8msh1a4c5f9cc30e96bp1a8d98jsneb73548a1580'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url , headers :cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCryptosDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptosHistroyDetails: builder.query({
        query: ({coinId ,timeperiod}) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      })
    }),
  })

  export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistroyDetailsQuery} = cryptoApi;
