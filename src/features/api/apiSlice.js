import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
      //see the last one in the first
      transformResponse: res => res.sort((a, b) => b.id - a.id),
      //the result get cached and we're not invalidating the preveous cached so it's not updating to show the new changes whether that's a delete an update or even a new what we need to do is assign a tag to the cache and let it know which mutations invalidate the cache then it automatically refetch that data for us
      providesTags: ['Todos']

    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo
      }),
      //now we need to invalidate the cached when we use thes builder mutation below 
      invalidatesTags: ['Todos']
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH',
        body: todo
      }),
      invalidatesTags: ['Todos']

    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['Todos']
    }),
  })
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} = apiSlice