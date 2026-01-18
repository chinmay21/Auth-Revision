import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../redux/apis";
import { apiConnector } from "../../redux/apiConnector";
import { setLoading, setSignupData, setToken, setUser } from "../slices/authSlice";


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

export const login = createAsyncThunk('auth/login', async ({email, password}, thunkApi) => {
    try{
        thunkApi.dispatch(setLoading(true));

        const response = await apiConnector("POST", endpoints.LOGIN_API, {email, password});

        const { token, user } = response.data;

        thunkApi.dispatch(setToken(token))
        thunkApi.dispatch(setUser(user));

        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));

        return response.data;
    }
    catch(error) {
        return thunkApi.rejectWithValue(error.response?.data?.message);
    }
    finally {
        thunkApi.dispatch(setLoading(false));
    }
});