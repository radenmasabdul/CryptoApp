import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSupportCurrency,
  fetchPriceChange,
} from "../redux/reducer/reducer";

import { FaBitcoin, FaCaretUp } from "react-icons/fa";

const Content = () => {
  const dispatch = useDispatch();
  const dataCurrency = useSelector(
    (state) => state.crypto.dataCurrency?.payload
  );
  const dataPrices = useSelector((state) => state.crypto.dataPrices?.payload);

  useEffect(() => {
    dispatch(fetchSupportCurrency());
    dispatch(fetchPriceChange());
  }, [dispatch]);

  return (
    <>
      <h1 className="mx-12 text-lg font-bold hidden md:flex">
        🔥 Top Movers (24 Jam)
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 py-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {dataCurrency &&
            dataCurrency.map((currencyData, index) => {
              const priceData =
                dataPrices &&
                dataPrices.find((data) => data.id === currencyData.id);

              if (priceData) {
                return (
                  <div
                    className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-gray-100 hidden md:flex"
                    key={index}
                  >
                    <div className="grid grid-flow-row auto-rows-max ">
                      <div className="grid grid-flow-col auto-cols-max items-center">
                        <div className="mx-2 w-10">
                          <img src={currencyData.logo} alt="logo" />
                        </div>
                        <p className="font-bold text-base">
                          {currencyData.name}
                        </p>
                      </div>

                      <div className="font-bold text-base mx-2 py-2">
                        Rp. {priceData.latestPrice}
                      </div>

                      <div className="grid grid-flow-col auto-cols-max items-center">
                        <FaCaretUp size={40} className="mx-2" />
                        <p className="font-bold text-base">7,24%</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Content;
