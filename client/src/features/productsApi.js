import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://65.1.109.82:5000/api/data" }),
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