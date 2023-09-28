import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action function (createUser)
//  name, callback ie. callback will be async and it holds data that is sent from dispatch of create user
// add parameter {rejectWithValue} for return error
// createAsyncThunk will return promise, to handle it inside create slice, * extrareducer will be written outside initial block
export const createUser = createAsyncThunk("create user", async (data, { rejectWithValue }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }

});

// create action:

export const showUser = createAsyncThunk(
    "showUser",
    async ( args, { rejectWithValue }) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        try {
            const result = await response.json();
            console.log("tst");
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }

    })

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        // create user is from above async thunk, to handle the asynchronous actions of createUser
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => { // when fullfilled data will come so loading will be false, and add the data that is comming to push to show in frontend
            state.loading = false;
            state.users.push(action.payload)
        },
        // if error comes do rejected
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        },
        // read or show action
        // create user is from above async thunk, to handle the asynchronous actions of createUser
        [showUser.pending]: (state) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => { // when fullfilled data will come so loading will be false, and add the data that is comming to push to show in frontend
            state.loading = false;
            state.users = action.payload;
        },
        // if error comes do rejected
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
});

export default userDetail.reducer;

// initialState: it will have all the details of users
// loading: It is required when data is not receiving it will hold the data

