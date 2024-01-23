import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiService } from "../hooks/apiService";

const initialState = {
    capitals: [],
    selectedCities: JSON.parse(localStorage.getItem('cities')),
    status: 'idle',
    error: null
}

export const fetchCapitals = createAsyncThunk('capitals/fetchCapitals', async () => {
    const { query } = apiService()
    try {
        //process.env.VITE_API_CITY_URL
        const resp = await query(import.meta.env.VITE_API_CITY_URL)
        return resp.data.data
    } catch(error) {
        console.log('error', error)
    }
   
  })
  
  const capitalsSlice = createSlice({
    name: 'capitals',
    initialState,
    reducers: {
        selectedCity: (state, action) => {
            state.selectedCities.push(action.payload)
        }
    },
    extraReducers(builder) {
      builder
      .addCase(fetchCapitals.pending, (state, action) => {
        state.status = "loading"
    })
      .addCase(fetchCapitals.fulfilled, (state, action) => {
        state.status = "success"
        state.capitals = state.capitals.concat(action.payload);
      })
      .addCase(fetchCapitals.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
    })
    }
  })

  export const allCapitals = (state) => state.capitals
  export const selectedCapitals = (state) => state.capitals?.selectedCities
  export const { selectedCity } = capitalsSlice.actions;
  
  export default capitalsSlice.reducer