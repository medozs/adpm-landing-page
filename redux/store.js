import { configureStore } from "@reduxjs/toolkit"
import { setAutoFreeze } from "immer"
import rootReducer from "./slices/root-reducer"

setAutoFreeze(false)

export function makeStore() {
  return configureStore({
    reducer: rootReducer
  })
}

const store = makeStore()

export default store
