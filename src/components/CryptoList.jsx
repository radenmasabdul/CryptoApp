import React from "react";

import { FaBitcoin, FaCaretUp, FaCaretDown } from "react-icons/fa";

const CryptoList = () => {
  return (
    <div className="overflow-x-auto lg:mx-12 py-6">
      <table className="table w-full table-normal">
        {/* head*/}
        <thead className="text-center">
          <tr>
            <th></th>
            <th>Crypto</th>
            <th></th>
            <th>Harga</th>
            <th>24 JAM</th>
            <th>1 MGG</th>
            <th>1 BLN</th>
            <th>1 THN</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* row 1 */}
          <tr>
            <th>
              <FaBitcoin size={20} className="fill-amber-500" />
            </th>
            <td className="font-bold">Bitcoin</td>
            <td className="font-bold">BTC</td>
            <td className="font-bold">Rp. 350.000.000</td>
            <td>
              <span className="flex flex-wrap justify-center items-center">
                <FaCaretUp size={20} className="fill-green-600" />
                <p className="font-bold text-green-600">0,03%</p>
              </span>
            </td>
            <td>
              <span className="flex flex-wrap justify-center items-center">
                <FaCaretDown size={20} className="fill-red-600" />
                <p className="font-bold text-red-600">3,46%</p>
              </span>
            </td>
            <td>
              <span className="flex flex-wrap justify-center items-center">
                <FaCaretDown size={20} className="fill-red-600" />
                <p className="font-bold text-red-600">2,86%</p>
              </span>
            </td>
            <td>
              <span className="flex flex-wrap justify-center items-center">
                <FaCaretDown size={20} className="fill-red-600" />
                <p className="font-bold text-red-600">40,01%</p>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
