import { configureStore } from "@reduxjs/toolkit"
import counterReducer, {COUNTER_REDUCER_FEATURE_KEY} from '../model/counter'

export default configureStore({
  reducer: {
    [COUNTER_REDUCER_FEATURE_KEY]: counterReducer
  },
  devTools: process.env.NODE_ENV !== "production",
})
