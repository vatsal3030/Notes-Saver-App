import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./Redux/pasteSlice";
export const Store = configureStore({
    reducer: {
        paste: pasteReducer,
    },
})