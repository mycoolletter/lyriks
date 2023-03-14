import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamPApi = createApi({
        reducerPath:"shazamPApi",
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://shazam.p.rapidapi.com',
          prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key', '90d7cd0444msh9263920e12f7b73p17c804jsn1e94401acf6b');
            return headers;
          }
        }),
        endpoints: (builder)=> ({
          getTopCharts:builder.query({query: ()=>{return '/charts/track'}})
        })
    });
    export const {
      useGetTopChartsQuery, 
    } = shazamPApi;