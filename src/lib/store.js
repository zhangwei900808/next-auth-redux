// "use client";
import logger from "redux-logger";

import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {homeSlice} from "@/lib/slices/homeSlice";
import {systemSlice} from "@/lib/slices/systemSlice";

const rootReducer = combineReducers({
    [homeSlice.name]: homeSlice.reducer,
    [systemSlice.name]: systemSlice.reducer
})

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: false,
        // middleware: new MiddlewareArray().concat(logger),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false, // 禁用序列化检查
        }).concat(logger)
    })
}