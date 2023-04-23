import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { mobileApiSlice } from "../api/mobileApiSlice";
import { Variant } from "../../type/Variant";

interface ModalVariant {
  mobile: any;
  variants: Variant[];
}

interface UpdateOfficialPriceAction {
  price: string;
  index: number;
  variant: "official" | "unofficial";
}
let initialState = {
  mobile: null,
  variants: [],
} as ModalVariant;

const mobileUpdateSlice = createSlice({
  name: "mobile-update",
  initialState,
  reducers: {
    updateOfficialPrice: (
      state: ModalVariant,
      action: PayloadAction<UpdateOfficialPriceAction>
    ) => {
      const { price, index, variant } = action.payload;
      if (state.variants && state.variants[index]) {
        state.variants[index][variant] = Number(price);
      }
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      mobileApiSlice.endpoints.getAllMobileById.matchFulfilled,
      (state, { payload }) => {
        state.mobile = payload;
        state.variants = payload.variant;
      }
    );
    builder.addMatcher(
      mobileApiSlice.endpoints.updateMobileContent.matchFulfilled,
      (state, { payload }) => {
        state.mobile = payload.data;
      }
    );
  },
});

export const { updateOfficialPrice } = mobileUpdateSlice.actions;

export default mobileUpdateSlice.reducer;
