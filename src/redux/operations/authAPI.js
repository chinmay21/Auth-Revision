import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../redux/apis";
import { apiConnector } from "../../redux/apiConnector";
import { setLoading, setSignupData } from "../slices/authSlice";

console.log("SIGNUP_API:", endpoints.SIGNUP_API);


export const signup = createAsyncThunk('auth/signup', async ({name, email, password, role}, thunkApi) => {
    try{

        thunkApi.dispatch(setLoading(true));

        const response = await apiConnector("POST", endpoints.SIGNUP_API, {name, email, password, role});

        thunkApi.dispatch(setSignupData(response.data));

        return response.data;
    }
    catch(error) {
        return thunkApi.rejectWithValue(error.response?.data?.message);
    } finally {
        thunkApi.dispatch(setLoading(false));
    }
});