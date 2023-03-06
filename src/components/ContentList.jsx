import React from "react";

import {
  BsStars,
  BsBank2,
  BsCalculatorFill,
  BsArrowLeftRight,
  BsLayersFill,
} from "react-icons/bs";

import { FaGamepad, FaCoins, FaMoneyBillWave } from "react-icons/fa";

import { GoLaw } from "react-icons/go";

const ContentList = () => {
  return (
    <div className="overflow-x-scroll lg:overflow-hidden">
      <div className="container">
        <div className="grid grid-flow-col md:grid-cols-2 lg:grid-cols-10 gap-2 lg:mx-10">
          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <BsStars size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">Terbaru</p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <BsBank2 size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">DeFi</p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <FaGamepad size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">NFT/Gaming</p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <BsCalculatorFill size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">CEX</p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <BsArrowLeftRight size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">DEX</p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <BsLayersFill size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">Layer-1</p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <FaCoins size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">
                  Infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <FaMoneyBillWave size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">Lending</p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <BsLayersFill size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">Layer-2</p>
              </div>
            </div>
          </div>

          <div className="justify-center rounded-md py-2 bg-white cursor-pointer hover:bg-blue-200">
            <div className="grid grid-flow-row auto-rows-max ">
              <div className="grid grid-flow-col auto-cols-max items-center">
                <GoLaw size={25} className="mx-2 fill-blue-600" />
                <p className="font-bold text-xs text-blue-600">
                  Ekosistem Stablecoin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentList;
