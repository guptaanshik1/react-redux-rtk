import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { bugsApi } from "../services/bugsApi";

export const store = configureStore({
  reducer: {
    [bugsApi.reducerPath]: bugsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bugsApi.middleware),
});

setupListeners(store.dispatch)