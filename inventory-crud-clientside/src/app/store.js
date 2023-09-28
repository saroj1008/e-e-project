import { configureStore } from "@reduxjs/toolkit";
import  userDetail from "../features/userDetailSlice";

export const store = configureStore({
  reducer: {
    app : userDetail
  },
});

// app: userDetails means whatever is inside useDetail slice it will be access here