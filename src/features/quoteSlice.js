import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        quotes: [],
        loading: false,
        polling: false,
    },
    reducers: {
        startPolling(state) {
            return { ...state, polling: true };
        },
        quoteSuccess: (state, action) => {
            return { ...state, loading: false, quotes: action.quotes.data };
        },
        stopPolling(state) {
            return { ...state, polling: false }
        }
    },
})

export const { startPolling, quoteSuccess, stopPolling } = quoteSlice.actions
export default quoteSlice.reducer;