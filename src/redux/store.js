import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './contacts/contacts-api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      contactsApi.middleware,
    ];
  },
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
