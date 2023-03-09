import { createSlice } from "@reduxjs/toolkit";
import { getSupportCurrency, getPriceChange } from "../actions/apiRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSupportCurrency = createAsyncThunk(
    "wallet/supportedCurrencies/fetchSupportCurrency",
    async () => {
        const response = await getSupportCurrency();
        return response.data;
    }
);

export const fetchPriceChange = createAsyncThunk(
    "trade/price-changes/fetchPriceChange",
    async () => {
        const response = await getPriceChange();
        return response.data;
    }
);

const cryptoSlice = createSlice({
    name: "crypto",
    initialState: { dataCurrency: [], dataPrices: [], status: "idle" },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSupportCurrency.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSupportCurrency.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.dataCurrency = action.payload;
            })
            .addCase(fetchSupportCurrency.rejected, (state, action) => {
                state.status = "failed";
                console.log(action.error);
            })
            .addCase(fetchPriceChange.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPriceChange.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.dataPrices = action.payload;
            })
            .addCase(fetchPriceChange.rejected, (state, action) => {
                state.status = "failed";
                console.log(action.error);
            })
    }
});

export const { setCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;