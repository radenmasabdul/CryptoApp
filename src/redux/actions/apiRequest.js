import axios from "axios";

export const getSupportCurrency = async () => {
    const response = await axios.get("https://api.pintu.co.id/v2/wallet/supportedCurrencies");
    return response;
};

export const getPriceChange = async () => {
    const response = await axios.get("https://api.pintu.co.id/v2/trade/price-changes");
    return response;
};