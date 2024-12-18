import { RootState } from "../../store";

export const sneakSelector = (state: RootState) => {
  return state.sneak;
};