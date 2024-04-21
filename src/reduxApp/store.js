import { configureStore } from '@reduxjs/toolkit';
import { campervanReducer } from './root/rootSlice.js';
import persistStore from 'redux-persist/es/persistStore.js';
// import storage from 'redux-persist/lib/storage/index.js';
// import persistReducer from 'redux-persist/es/persistReducer.js';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants.js';

// const PersistConfig = {
//   key: 'root',
//   storage,
// };

export const store = configureStore({
  reducer: {
    root: campervanReducer,
    // root: persistReducer(PersistConfig, campervanReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
