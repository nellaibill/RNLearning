import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: [],
        isLoggedIn: false,
    },
    reducers: {
        setUserLoggedInData: (state, action) => {
            state.userData = action.payload
            state.isLoggedIn = true;
        },
        setUserLogout(state) {
            state.userData = [];
            state.isLoggedIn = false;
        }
    }
});

export const { setUserLoggedInData,setUserLogout } = userSlice.actions;
export default userSlice.reducer;