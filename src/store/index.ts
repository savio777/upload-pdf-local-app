import {configureStore} from '@reduxjs/toolkit';

import Files from './modules/Files';

const store = configureStore({reducer: {files: Files}});

export type RootState = ReturnType<typeof store.getState>;

export default store;

// caso precise de actions async
/*
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
*/
