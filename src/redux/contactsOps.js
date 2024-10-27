import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://671dfca61dfc42991980e6f7.mockapi.io";

export const fetchContacts = createAsyncThunk('fetchData', async (_,thunkApi) => {
    try {
        const { data } = await axios.get('/Contacts');
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`/Contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk('addContact', async (body, thunkApi) => {
    try {
        const { data } = await axios.post(`/Contacts`, body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})
