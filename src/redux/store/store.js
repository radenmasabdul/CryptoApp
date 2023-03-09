import { configureStore } from "@reduxjs/toolkit";
import reducerCrypto from "../reducer/reducer";

const store = configureStore({
    reducer: {
        crypto: reducerCrypto
    }
});

export default store;