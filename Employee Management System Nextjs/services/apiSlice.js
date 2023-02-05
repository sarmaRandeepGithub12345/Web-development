import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/api/'}),
    endpoints: (builder) =>({
        getAllUsers : builder.query({
            query:()=>{
                return{
                    url:`users`,
                    method:'GET'
                }
            }
        })
    })
})

export const {useGetAllUsersQuery} =apiSlice