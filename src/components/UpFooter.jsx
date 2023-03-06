import React from "react";

import { BsArrowRight } from "react-icons/bs";

const UpFooter = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
          <div className="flex justify-center bg-white border-2 rounded-md">
            <div className="grid grid-flow-row auto-rows-max mx-10 py-6">
              <h1 className="font-bold text-xl">Tentang Cryptocurrency</h1>
              <p className="py-4 font-bold text-base">
                Cryptocurrency adalah aset mata uang digital yang diamankan
                menggunakan metode cryptography diatas open database yang
                disebut blockchain. Terdapat 2 jenis crypto, yaitu coin dan
                token. Coin adalah cryptocurrency yang berdiri diatas
                blockchain-nya sendiri dengan contoh bitcoin dan ethereum,
                sedangkan token adalah cryptocurrency yang “menumpang” diatas
                blockchain dari native aset lain.
              </p>
              <div>
                <button className="btn btn-ghost btn-outline bg-white rounded-full hover:bg-white hover:text-black">
                  <span className="flex flex-wrap items-center">
                    <p className="text-sm text-black mx-2 capitalize">
                      Pelajari Lebih Lanjut
                    </p>
                    <BsArrowRight size={20} className="text-black" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto py-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            1
          </div>
          <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            2
          </div>
          <div class="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            3
          </div>
        </div>
      </div>
    </>
  );
};

export default UpFooter;
