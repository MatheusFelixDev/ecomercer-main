import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    addToCart(state, action) {
       const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].cartQuantity += 1;
          toast.info(`${action.payload.name} adicionado(a) novamente`,{
            position: "bottom-left"
          })
        } else {
          const tempProduct = {...action.payload, cartQuantity:1}
          state.cartItems.push(tempProduct);
          toast.success(`${action.payload.name} adicionado(a) ao carrinho`, {
            position: "bottom-left",
          });
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action){
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} removido(a) do carrinho`, {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action){
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -=1;

        toast.error(`um(a) ${action.payload.name} removido(a) do carrinho`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1){
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
  
        state.cartItems = nextCartItems;
        

        toast.error(`${action.payload.name} removido(a) do carrinho`, {
          position: "bottom-left",
        });

      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state, action){
      state.cartItems = [];
      toast.error(`Todos os produtos foram removidos do carrinho`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals(state, action){
      let {total, quantity} = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const {price, cartQuantity} = cartItem;
          const itemTotal =  price * cartQuantity;

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }

  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;