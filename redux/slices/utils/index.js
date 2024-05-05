import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import type { AppState } from "../../store"

const initState = {
  value: false
}

export const casherState = createSlice({
  name: "casher",
  initialState: initState,
  reducers: {
    toggle: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { toggle } = casherState.actions

export const isCasher = (state) => state.casherState

export const casherReducer = casherState.reducer

export const alertState = createSlice({
  name: "alert",
  initialState: {
    type: null,
    title: null,
    description: null,
    onClose: null
  },
  reducers: {
    onAlert: (state, action) => {
      state.type = action.payload?.type
      state.title = action.payload?.title
      state.description = action.payload?.description
      state.onClose = action.payload?.onClose
      state.onOk = action.payload?.onOk
    }
  }
})

export const { onAlert } = alertState.actions

export const alert = (state) => state.alertState

export const alertReducer = alertState.reducer