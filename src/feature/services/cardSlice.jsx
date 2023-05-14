import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardItems: [],
  totalAmount: 0,
  quantity: 0,
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("Error saving state to local storage:", err);
  }
};

export const cardSlice = createSlice({
  name: "card",
  initialState: loadState() || initialState,
  reducers: {
    addTocart: (state, action) => {
      const isexisted = state.cardItems.find(
        (item) => item.id === action.payload.id
      );
      if (isexisted) {
        return state;
      } else {
        state.cardItems = [
          ...state.cardItems,
          { ...action.payload, quantity: 1 },
        ];
        state.totalAmount += action.payload.price;
        state.quantity++;
        saveState(state);
      }
    },
    removeFromcart: (state, action) => {
      state.cardItems = state.cardItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalAmount -= action.payload.price * action.payload.quantity;
      state.quantity--;
      saveState(state);
    },
    incresequantity: (state, action) => {
      state.cardItems = state.cardItems.map((item) => {
        if (item.id === action.payload.id) {
          let toinc = item.quantity + 1;
          return { ...item, quantity: toinc };
        } else {
          return item;
        }
      });

      state.totalAmount += action.payload.price;
      state.quantity++;
      saveState(state);
    },
    decresequantity: (state, action) => {
      if (action.payload.quantity > 1) {
        state.cardItems = state.cardItems.map((item) => {
          if (item.id === action.payload.id) {
            let toinc = item.quantity - 1;
            return { ...item, quantity: toinc };
          } else {
            return item;
          }
        });

        state.totalAmount -= action.payload.price;
        state.quantity--;
        saveState(state);
      }
    },
  },
});

export const {
  addTocart,
  removeFromcart,
  incresequantity,
  decresequantity,
} = cardSlice.actions;
export default cardSlice.reducer;
