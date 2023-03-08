import React from "react";

import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

import Brand from "../assets/brand-ambassador.png";
import Iso from "../assets/iso27001.png";
import License from "../assets/license-transparent.png";

const Footer = () => {
  return (
    <>
      <main className="relative">
        <section
          className="bg-blue-600 mx-10 rounded-t-3xl absolute inset-x-1"
          style={{ bottom: 570 }}
        >
          <div className="mx-10">
            <div className="grid grid-cols-2 ">
              <div className="grid grid-flow-row auto-rows-max py-10">
                <p className="font-bold text-3xl text-white">
                  Mulai Investasi Sekarang
                </p>
                <p className="font-normal text-base text-white pt-2">
                  Daftar dalam hitungan menit, langsung mulai investasi.
                </p>
                <div className="py-6">
                  <button className="btn btn-ghost capitalize text-blue-500 bg-white hover:bg-white w-1/2">
                    Download Sekarang
                  </button>
                </div>
              </div>
              <div className="flex justify-end mx-20">
                <img
                  src={Brand}
                  alt="brand"
                  className=" absolute bottom-0"
                  width={420}
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="footer p-11 bg-base-200 text-base-content mt-10">
          <div>
            <svg
              width="94"
              height="20"
              viewBox="0 0 94 20"
              className="sc-1cgb3j6-7 cWQvkx"
            >
              <defs>
                <filter
                  x="-.3%"
                  y="-.9%"
                  width="100.6%"
                  height="101.9%"
                  filterUnits="objectBoundingBox"
                  id="pintu_logo_mono__b"
                >
                  <feGaussianBlur
                    stdDeviation="3"
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                  ></feGaussianBlur>
                  <feOffset
                    dy="2"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                  ></feOffset>
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                    result="shadowInnerInner1"
                  ></feComposite>
                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.109620848 0"
                    in="shadowInnerInner1"
                  ></feColorMatrix>
                </filter>
                <path id="pintu_logo_mono__a" d="M0 0h1440v430H0z"></path>
              </defs>
              <g
                transform="translate(-167 -6745)"
                fill="none"
                fillRule="evenodd"
              >
                <rect
                  fill="none"
                  y="4368"
                  width="1440"
                  height="2743"
                  rx="20"
                ></rect>
                <g transform="translate(0 6681)">
                  <use fill="none" xlinkHref="#pintu_logo_mono__a"></use>
                  <use
                    fill="currentColor"
                    filter="url(#pintu_logo_mono__b)"
                    xlinkHref="#pintu_logo_mono__a"
                  ></use>
                </g>
                <g opacity="0.803" fill="currentColor" fillRule="nonzero">
                  <path d="M195 6745v20h-3v-20h3zM249.512 6745v14.495c0 .946.667 1.738 1.54 1.895l.166.022.163.007h4.233c.916 0 1.689-.683 1.842-1.586l.022-.172.006-.168V6745H261v14.49c-.003 2.849-2.122 5.209-4.864 5.484l-.259.02-.263.006h-4.233c-2.785-.006-5.086-2.175-5.355-4.974l-.02-.264-.006-.269V6745h3.512zM226 6748.586V6745l15 .005v3.58h-4.07c-.86.02-1.579.694-1.725 1.58l-.02.17-.008.174V6765h-3.354v-14.49c-.001-.932-.617-1.716-1.435-1.888l-.156-.025-.157-.011H226zM179.712 6745c2.74.003 5.002 2.177 5.263 4.98l.019.265.006.269v3.093c-.003 2.848-2.083 5.208-4.775 5.483l-.254.02-.259.006h-7.424c-.9.001-1.657.683-1.808 1.585l-.02.172-.008.168V6765H167v-14.497l.007-.269c.132-2.735 2.177-4.947 4.777-5.208l.253-.02.25-.006h7.425zm0 3.585h-7.424c-.486 0-.952.202-1.296.562-.259.27-.433.615-.504.98l-.026.183-.01.204v3.092c.001.947.655 1.739 1.513 1.896l.163.022.16.007h7.424c.9-.001 1.657-.683 1.808-1.585l.02-.171.008-.168v-3.098c-.001-1.064-.824-1.923-1.836-1.924zM213.969 6745c2.778.003 5.028 2.41 5.031 5.38V6765h-3.285v-14.62c-.001-1.034-.783-1.87-1.747-1.871h-5.936c-.964 0-1.746.837-1.747 1.87V6765H203v-14.621c.003-2.969 2.253-5.376 5.032-5.379z"></path>
                </g>
              </g>
            </svg>
            <div className="grid grid-flow-col auto-cols-max py-4 gap-4 cursor-pointer">
              <FaFacebook size={20} />
              <FaInstagramSquare size={20} />
              <FaTwitter size={20} />
              <FaTelegram size={20} />
              <FaYoutube size={20} />
            </div>
            <div>
              <p className="text-black text-base font-bold pt-16">
                Terdaftar dan Diawasi
              </p>
              <img src={License} alt="license" className="w-40 py-4" />
              <div className="grid grid-flow-col auto-cols-max gap-2">
                <img src={Iso} alt="iso" className="w-10" />
                <img src={Iso} alt="iso" className="w-10" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-black text-lg font-bold">
              Alamat Perusahaan
            </span>
            <p className="text-black text-base font-bold">Kantor Pusat</p>
            <p className="text-gray-600 font-normal text-sm">
              The City Tower Lantai 27 <br />
              Jalan M.H Thamrin No.81,
              <br /> Jakarta Pusat, DKI Jakarta 10310
              <br /> Indonesia
            </p>
            <p className="text-black text-base font-bold">
              Operasional & Customer Support
            </p>
            <p className="text-gray-600 font-normal text-sm">
              Rukan Permata Senayan Blok H1-H2
              <br />
              Jalan Tentara Pelajar, Jakarta
              <br />
              Selatan
              <br /> DKI Jakarta 12210 <br />
              Indonesia
            </p>
          </div>
          <div>
            <span className="text-black text-lg font-bold">Pintu</span>
            <a className="cursor-pointer">Produk</a>
            <a className="cursor-pointer py-2">Harga Crypto</a>
            <a className="cursor-pointer">Biaya Transaksi</a>
            <a className="cursor-pointer py-2">OTC</a>
            <a className="cursor-pointer">FAQ</a>
            <a className="cursor-pointer py-2">Blog</a>
          </div>
          <div>
            <span className="text-black text-lg font-bold">Perusahaan</span>
            <a className="cursor-pointer">Tentang</a>
            <a className="cursor-pointer py-2">Hubungi Kami</a>
            <a className="cursor-pointer">Karier</a>
            <a className="cursor-pointer py-2">Karier Engineering</a>
          </div>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <div className="grid grid-flow-row auto-rows-max">
            <p className="text-sm text-gray-600">
              © 2023 PT. Pintu Kemana Saja. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600">
              Perdagangan aset crypto merupakan aktivitas beresiko tinggi.
              Kinerja pada masa lalu tidak mencerminkan kinerja di masa depan.
              Kinerja historikal, expected return dan proyeksi probabilitas
              disediakan untuk tujuan informasi dan illustrasi. Semua keputusan
              perdagangan aset crypto merupakan keputusan independen oleh
              pengguna.
            </p>
            <div className="flex flex-wrap gap-4">
              <p className="text-xs font-thin text-gray-600 cursor-pointer link">
                Syarat dan Ketentuan
              </p>
              <p className="text-xs font-thin text-gray-600 cursor-pointer link">
                Kebijakan Privasi
              </p>
              <p className="text-xs font-thin text-gray-600 cursor-pointer link">
                Kebijakan Sistem Manajemen Keamanan Informasi dan Layanan Cloud
              </p>
            </div>
          </div>
        </footer>
        <footer className="px-10 py-4 bg-blue-600 sticky bottom-0 z-50">
          <div className="flex flex-wrap mx-10 py-2 gap-4 justify-between">
            <p className="text-white font-bold text-base py-4">
              Investasi crypto simple, aman, dan tanpa ribet. Mulai dari Rp
              11.000. Tertarik mulai berinvestasi?
            </p>
            <div className="grid grid-flow-col justify-end ">
              <button className="btn btn-ghost capitalize text-blue-500 bg-white hover:bg-white w-full">
                Unduh Pintu App
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Footer;
