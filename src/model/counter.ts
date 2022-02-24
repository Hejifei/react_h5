import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const COUNTER_REDUCER_FEATURE_KEY = 'counter'

const initialState: ICounterApi.ICounterInitialState = {
  value: 0,
}

export const loadCounter = createAsyncThunk(
  `${COUNTER_REDUCER_FEATURE_KEY}/loadCounter`,
  (payload) => {
    return 
  }
)

const {
  reducer: counterReducer,
  actions,
} = createSlice({
  name: COUNTER_REDUCER_FEATURE_KEY,
  initialState,
  reducers: {
    incremented: (state: ICounterApi.ICounterInitialState) => {
      state.value += 1
    },
    decremented: (state: ICounterApi.ICounterInitialState) => {
      state.value -= 1
    }
  }
})

export const {
  incremented,
  decremented,
} = actions

export default counterReducer
