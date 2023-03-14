import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { shazamPApi } from './services/shazamP';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamPApi.reducerPath]: shazamPApi.reducer,
    player: playerReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(shazamPApi.middleware),
});
