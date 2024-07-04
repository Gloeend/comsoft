import {api} from "@app/store/api/api.ts";

const NotificationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotification: builder.mutation<any, any>({
      query: (dto) => ({
        url: '/notifications',
        body: dto,
        method: 'GET',
      }),
    }),
    getApproval: builder.mutation<any, any>({
      query: (dto) => ({
        url: '/approval',
        body: dto,
        method: 'GET',
      }),
    }),
  }),
});


export default NotificationApi;