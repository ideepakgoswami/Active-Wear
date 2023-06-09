import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import production from "../config"

const url = production.baseUrl

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${url}/api/data` }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products/AllProducts"
        }),
        getAthleisure: builder.query({
            query: () => "products/Athleisure"
        }),
        getLifestyle: builder.query({
            query: () => "products/Lifestyle"
        }),
        getEquipment: builder.query({
            query: () => "products/Equipment"
        }),
        getHomeCategories: builder.query({
            query: () => "/categories"
        })
    })
})

export const { useGetAllProductsQuery, useGetAthleisureQuery, useGetEquipmentQuery, useGetLifestyleQuery, useGetHomeCategoriesQuery } = productsApi