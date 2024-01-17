import { configureStore } from "@reduxjs/toolkit";
import fetchCapitals from '../reducers/cities'

export const store = configureStore({
    reducer: {
        capitals: fetchCapitals
    }
})