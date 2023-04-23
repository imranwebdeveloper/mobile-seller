import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { mobileState } from "../../data/mobile";

interface InputPayload {
  name: string;
  value: string;
}
interface AddInputPayload {
  name: string;
  value: any;
}

const mobileSlice = createSlice({
  name: "mobile-details",
  initialState: mobileState,
  reducers: {
    handleInput: (state: any, action: PayloadAction<InputPayload>) => {
      state[action.payload.name] = action.payload.value;
    },
    addInput: (state: any, action: PayloadAction<AddInputPayload>) => {
      state[action.payload.name].push(action.payload.value);
    },
    removeInput: (state: any, action: PayloadAction<string>) => {
      state[action.payload].pop();
    },
  },
});

export const { handleInput, addInput, removeInput } = mobileSlice.actions;

export default mobileSlice.reducer;
