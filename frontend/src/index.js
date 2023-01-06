import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configureStore,} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import productsReducer, { productsFetch } from './features/productsSlice';
import { productsApi} from "./features/productsApi";
import cartReducer, { getTotals } from "./features/cartSlice"
import authReducer, { loadUser } from './features/authSlice';

const store = configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        auth: authReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
store.dispatch(loadUser(null));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);