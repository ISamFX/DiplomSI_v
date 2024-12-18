import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { basketSlice } from "./redux/basket/basketSlice"
import { teamSlice } from "./redux/team/teamSlice"
import { sneakSlice } from "./redux/sneakers/sneakSlice"

export const store = configureStore({
  reducer: {
    sneak: sneakSlice.reducer,
    team: teamSlice.reducer,
    basket: basketSlice.reducer,
  },
})  


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
