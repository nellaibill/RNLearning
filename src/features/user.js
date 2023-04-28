import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: [],
    },
    reducers: {
        login: (state, action) => {
            state.userData = action.payload
        }
    }
});

export const { login } = userSlice.actions;
export default userSlice.reducer;