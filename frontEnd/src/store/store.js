import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageSlice.js';
import modeReducer from './modeSlice.js';
import leftBarReducer from './leftBarSlice.js';

const store = configureStore({
    reducer:{
        page : pageReducer,
        mode : modeReducer,
        leftBar:leftBarReducer,
    }
});

export default store;