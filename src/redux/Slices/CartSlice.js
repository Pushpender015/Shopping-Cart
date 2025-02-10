import { createSlice } from '@reduxjs/toolkit';

// step1: create slice
export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    // step3: define functionality (-- reducer --)
    reducers: {
        // add function (-- actions --)
        add: (state , action) => {
            state.push(action.payload);
        },
        // remove function (-- actions --)
        remove: (state , action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

// export actions
export const { add , remove } = CartSlice.actions;

// export reducer
export default CartSlice.reducer;