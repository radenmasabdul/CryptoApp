import React from "react";

import { FaBitcoin } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const Content = () => {
  return (
    <>
      <h1 className="mx-12 text-lg font-bold hidden md:flex">
        🔥 Top Movers (24 Jam)
      </h1>
      <div class="overflow-x-scroll lg:overflow-x-hidden">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 py-2 md:grid-cols-2 lg:grid-cols-6 gap-6">
            <div class="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-gray-100 hidden md:flex">
              <div class="grid grid-flow-row auto-rows-max ">
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaBitcoin size={40} className="mx-2" />
                  <p className="font-bold text-base">Bitcoins</p>
                </div>
                <div className="font-bold text-base mx-2 py-2">
                  Rp. 350.000.000
                </div>
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaCaretUp size={40} className="mx-2" />
                  <p className="font-bold text-base">7,24%</p>
                </div>
              </div>
            </div>

            <div class="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-gray-100 hidden md:flex">
              <div class="grid grid-flow-row auto-rows-max ">
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaBitcoin size={40} className="mx-2" />
                  <p className="font-bold text-base">Bitcoins</p>
                </div>
                <div className="font-bold text-base mx-2 py-2">
                  Rp. 350.000.000
                </div>
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaCaretUp size={40} className="mx-2" />
                  <p className="font-bold text-base">7,24%</p>
                </div>
              </div>
            </div>

            <div class="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-gray-100 hidden md:flex">
              <div class="grid grid-flow-row auto-rows-max ">
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaBitcoin size={40} className="mx-2" />
                  <p className="font-bold text-base">Bitcoins</p>
                </div>
                <div className="font-bold text-base mx-2 py-2">
                  Rp. 350.000.000
                </div>
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaCaretUp size={40} className="mx-2" />
                  <p className="font-bold text-base">7,24%</p>
                </div>
              </div>
            </div>

            <div class="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-gray-100 hidden md:flex">
              <div class="grid grid-flow-row auto-rows-max ">
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaBitcoin size={40} className="mx-2" />
                  <p className="font-bold text-base">Bitcoins</p>
                </div>
                <div className="font-bold text-base mx-2 py-2">
                  Rp. 350.000.000
                </div>
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaCaretUp size={40} className="mx-2" />
                  <p className="font-bold text-base">7,24%</p>
                </div>
              </div>
            </div>

            <div class="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-gray-100 hidden md:flex">
              <div class="grid grid-flow-row auto-rows-max ">
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaBitcoin size={40} className="mx-2" />
                  <p className="font-bold text-base">Bitcoins</p>
                </div>
                <div className="font-bold text-base mx-2 py-2">
                  Rp. 350.000.000
                </div>
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaCaretUp size={40} className="mx-2" />
                  <p className="font-bold text-base">7,24%</p>
                </div>
              </div>
            </div>

            <div class="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-gray-100 hidden md:flex">
              <div class="grid grid-flow-row auto-rows-max ">
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaBitcoin size={40} className="mx-2" />
                  <p className="font-bold text-base">Bitcoins</p>
                </div>
                <div className="font-bold text-base mx-2 py-2">
                  Rp. 350.000.000
                </div>
                <div className="grid grid-flow-col auto-cols-max items-center">
                  <FaCaretUp size={40} className="mx-2" />
                  <p className="font-bold text-base">7,24%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;