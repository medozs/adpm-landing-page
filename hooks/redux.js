import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux"
// import type { AppDispatch, AppState } from "@/store"

export const useDispatch = () => useReduxDispatch()

export const useSelector = useReduxSelector
