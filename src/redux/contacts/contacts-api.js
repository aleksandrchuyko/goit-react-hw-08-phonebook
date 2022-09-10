import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { BASE_URL } from 'constants';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints(build) {
    return {
      getAllContacts: build.query({
        query: () => ({ url: 'contacts', method: 'get' }),
        providesTags: ['Contacts'],
      }),
      addContact: build.mutation({
        query: ({ name, number }) => ({
          url: 'contacts',
          method: 'post',
          data: {
            name: name,
            number: number,
          },
        }),
        invalidatesTags: ['Contacts'],
      }),
      removeContact: build.mutation({
        query: contactId => ({
          url: `contacts/${contactId}`,
          method: 'delete',
        }),
        invalidatesTags: ['Contacts'],
      }),
    };
  },
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
