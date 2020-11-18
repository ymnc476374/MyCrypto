import { Reducer } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { DataStore } from '@types';

export const REDUX_PERSIST_ACTION_TYPES = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const APP_PERSIST_CONFIG = {
  key: 'Storage',
  keyPrefix: 'MYC_',
  storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2
  // serialize    -> (s) => marshallState(s)
  // deserialize  -> (s) => deMarshallState(s.legacay)
};

export const createPersistReducer = (reducer: Reducer<DataStore>) =>
  persistReducer<DataStore>(APP_PERSIST_CONFIG, reducer);
