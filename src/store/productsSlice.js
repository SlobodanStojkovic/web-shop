import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addCategory(state, action) {
      console.log("STATE", state);
      console.log("ACTION", action);
      const items = [];
      action.action.forEach(function (item) {
        console.log("ITEM", item);
        items.push({ ...item, amount: 1 });
      });
      state = items;
      return [...state];
    },
  },
});

export const { addCategory } = productsSlice.actions;
export default productsSlice.reducer;
