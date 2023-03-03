import React, { useState } from "react";

import {
  FaChartLine,
  FaInstagramSquare,
  FaDiscord,
  FaBook,
} from "react-icons/fa";
import {
  BsSafe2Fill,
  BsTelegram,
  BsTwitter,
  BsYoutube,
  BsFacebook,
  BsImage,
  BsBriefcaseFill,
} from "react-icons/bs";
import {
  IoPricetags,
  IoChatbubbleOutline,
  IoNewspaperSharp,
  IoCodeSharp,
} from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";
import Flag from "../assets/flag.png";
import Logo from "../assets/pintu_logo.png";

const Navbar = () => {
  const [isFiturExpanded, setIsFiturExpanded] = useState(false);
  const [isEdukasiExpanded, setIsEdukasiExpanded] = useState(false);
  const [isIkutiKamiExpanded, setisIkutiKamiExpanded] = useState(false);
  const [isBlogNewsExpanded, setisBlogNewsExpanded] = useState(false);
  const [isKarierExpanded, setisKarierExpanded] = useState(false);

  return (
    <div className="navbar bg-base-100">
      {/* start */}
      <div className="navbar-start">
        <svg
          className="lg:mx-12"
          width="75"
          height="16"
          viewBox="0 0 75 16"
          fill="#0B0A0A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.9728 0H33.4497C31.2197 0 29.4104 1.8093 29.4104 4.03929V15.3366H31.7877V4.03929C31.7877 3.11359 32.524 2.37729 33.4497 2.37729H37.9728C38.8985 2.37729 39.6348 3.11359 39.6348 4.03929V15.3366H42.0121V4.03929C42.0121 1.8093 40.2029 0 37.9728 0Z"
            fill="url(#___SVG_ID__8__0___)"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.03929 0.37854H9.74047C11.9705 0.37854 13.7798 2.18783 13.7798 4.41783V6.79512C13.7798 9.02511 11.9705 10.8344 9.74047 10.8344H4.03929C3.11359 10.8344 2.37729 11.5707 2.37729 12.4963V15.3365H0V4.41783C0 2.18783 1.8093 0.37854 4.03929 0.37854ZM9.74047 8.45712C10.6662 8.45712 11.4025 7.72082 11.4025 6.79512V4.41783C11.4025 3.49213 10.6662 2.75583 9.74047 2.75583H4.03929C3.11359 2.75583 2.37729 3.49213 2.37729 4.41783V6.79512C2.37729 7.72082 3.11359 8.45712 4.03929 8.45712H9.74047ZM19.7754 0.37854H22.1527V15.3365H19.7754V0.37854ZM72.6222 11.2972V0.37854H74.9992V11.2972C74.9992 13.5272 73.1902 15.3365 70.9599 15.3365H67.6359C65.4059 15.3365 63.5967 13.5272 63.5967 11.2972V0.37854H65.9739V11.2972C65.9739 12.2229 66.7103 12.9592 67.6359 12.9592H70.9599C71.8856 12.9592 72.6222 12.2229 72.6222 11.2972ZM47.3984 0.37854V2.75583H50.0492C50.9538 2.77693 51.6691 3.51323 51.6691 4.41783V15.3365H54.0464V4.41783C54.0464 3.51323 54.7617 2.77693 55.6663 2.75583H58.3171V0.37854H47.3984Z"
            fill="#0B0A0A"
          ></path>
          <defs>
            <linearGradient
              id="___SVG_ID__8__0___"
              x1="30.9591"
              y1="5.32458"
              x2="43.1934"
              y2="12.3659"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A68F4"></stop>
              <stop offset="1" stopColor="#3DFFB9"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* fitur */}
          <li tabIndex={0}>
            <a>
              Fitur
              <span className="badge bg-red-500 border-none text-white rounded-md">
                Baru
              </span>
            </a>
            <ul className="menu bg-base-100 w-[24rem] p-2 rounded-box">
              <div className="card w-auto bg-base-100 shadow-xl px-2 py-2">
                <li>
                  <span>
                    <FaChartLine size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Harga Cryptocurrency
                      <p className="font-thin text-xs py-1">
                        Pantau harga Bitcoin dan aset Crypto lainnya
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsSafe2Fill size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Earn
                      <span className="badge bg-red-400 border-none text-white rounded-md mx-1">
                        Baru
                      </span>
                      <p className="font-thin text-xs py-1">
                        Simpan aset Crypto, dapatkan bunga tiap jam
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <IoPricetags size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Biaya Transaksi
                      <p className="font-thin text-xs py-1">
                        Lihat biaya trading, tarik Rupiah, dan kirim aset crypto
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BiSupport size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      OTC
                      <p className="font-thin text-xs py-1">
                        Layanan personal dengan harga khusus untuk transaksi{" "}
                        <br />
                        dengan jumlah besar
                      </p>
                    </a>
                  </span>
                </li>
              </div>
            </ul>
          </li>

          {/* ptu */}
          <li className="mx-4">
            <a>PTU</a>
          </li>

          {/* edukasi */}
          <li tabIndex={0}>
            <a>Edukasi</a>
            <ul className="menu bg-base-100 w-[24rem] p-2 rounded-box">
              <div className="card w-auto bg-base-100 shadow-xl px-2 py-2">
                <li>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Icons/GUI/Pintulogo</title>
                      <defs>
                        <linearGradient
                          x1="14.626%"
                          y1="0%"
                          x2="85.374%"
                          y2="100%"
                          id="prefix____a"
                        >
                          <stop stopColor="#11998E" offset="0%"></stop>
                          <stop stopColor="#1BD851" offset="71.466%"></stop>
                          <stop stopColor="#C5DE1C" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M11.88 0c2.628.003 4.757 2.17 4.76 4.841V18h-3.108V4.842c-.001-.93-.741-1.683-1.653-1.684H6.261c-.912 0-1.652.754-1.652 1.683V18H1.5V4.841C1.503 2.17 3.632.003 6.261 0z"
                        transform="translate(-1 .97)"
                        fill="url(#prefix____a)"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <a className="font-bold text-lg">
                      Tentang
                      <p className="font-thin text-xs py-1">
                        Jelajahi dunia crypto bersama Pintu
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <FcIdea size={20} />
                    <a className="font-bold text-lg">
                      Pintu Academy
                      <p className="font-thin text-xs py-1">
                        Kumpulan artikel untuk bantu kamu memahami crypto <br />
                        dengan lebih gampang
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <IoChatbubbleOutline size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      FAQ
                      <p className="font-thin text-xs py-1">
                        Informasi seputar crypto dan cara menggunakan <br />
                        aplikasi Pintu
                      </p>
                    </a>
                  </span>
                </li>
              </div>
            </ul>
          </li>

          {/* ikuti kami */}
          <li tabIndex={0} className="mx-4">
            <a>Ikuti Kami</a>
            <ul className="menu bg-base-100 w-[24rem] p-2 rounded-box">
              <div className="card w-auto bg-base-100 shadow-xl px-2 py-2">
                <li>
                  <span>
                    <BsTelegram size={20} />
                    <a className="font-bold text-lg">
                      Telegram
                      <p className="font-thin text-xs py-1">@pintuindonesia</p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsTwitter size={20} />
                    <a className="font-bold text-lg">
                      Twitter
                      <p className="font-thin text-xs py-1">@pintuID</p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <FaInstagramSquare size={20} />
                    <a className="font-bold text-lg">
                      Instagram
                      <p className="font-thin text-xs py-1">@pintu_id</p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsYoutube size={20} />
                    <a className="font-bold text-lg">
                      Youtube
                      <p className="font-thin text-xs py-1">
                        Pintu - Aplikasi jual beli cryptocurrency
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsFacebook size={20} />
                    <a className="font-bold text-lg">
                      Facebook
                      <p className="font-thin text-xs py-1">pintucrypto</p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <FaDiscord size={20} />
                    <a className="font-bold text-lg">
                      Discord
                      <p className="font-thin text-xs py-1">pintuindonesia</p>
                    </a>
                  </span>
                </li>
              </div>
            </ul>
          </li>

          {/* blog & news */}
          <li tabIndex={0}>
            <a>Blog & News</a>
            <ul className="menu bg-base-100 w-[24rem] p-2 rounded-box">
              <div className="card w-auto bg-base-100 shadow-xl px-2 py-2">
                <li>
                  <span>
                    <FaBook size={20} />
                    <a className="font-bold text-lg">
                      Pintu Blog
                      <p className="font-thin text-xs py-1">
                        Kumpulan artikel crypto, keuangan, dan informasi <br />
                        terbaru terkait pintu
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <IoNewspaperSharp size={20} />
                    <a className="font-bold text-lg">
                      Pintu News
                      <p className="font-thin text-xs py-1">
                        Temukan berita update terkini tentang Crypto, <br />
                        blockchain, hingga NFT!
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsImage size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Pintu Press Kit
                      <p className="font-thin text-xs py-1">
                        Temukan logo resmi, foto, dan kumpulan press release{" "}
                        <br />
                        Pintu untuk materi promosi disini
                      </p>
                    </a>
                  </span>
                </li>
              </div>
            </ul>
          </li>

          {/* karier */}
          <li tabIndex={0} className="mx-4">
            <a>Karier</a>
            <ul className="menu bg-base-100 w-[24rem] p-2 rounded-box">
              <div className="card w-auto bg-base-100 shadow-xl px-2 py-2">
                <li>
                  <span>
                    <BsBriefcaseFill size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Karier
                      <span className="badge bg-blue-700 border-none text-white rounded-md mx-1">
                        We're Hiring!
                      </span>
                      <p className="font-thin text-xs py-1">
                        Temukan pekerjaan impianmu disini
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <IoCodeSharp size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Karier Engineering
                      <span className="badge bg-blue-700 border-none text-white rounded-md mx-1">
                        We're Hiring!
                      </span>
                      <p className="font-thin text-xs py-1">
                        Bergabung dengan tim engineering kami menciptakan <br />
                        platform blockchain yang canggih
                      </p>
                    </a>
                  </span>
                </li>
              </div>
            </ul>
          </li>
        </ul>

        {/* ganti bahasa */}
        <button>
          <img src={Flag} alt="flag" className="w-10" />
        </button>
      </div>

      {/* end */}
      <div className="navbar-end lg:flex">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* mobile dropdown end */}

          <ul
            tabIndex={0}
            className="menu w-screen dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
          >
            {/* fitur */}
            <li tabIndex={0}>
              <button
                className="justify-between"
                onClick={() => setIsFiturExpanded(!isFiturExpanded)}
              >
                <span className="flex items-center">
                  Fitur
                  <span className="badge bg-red-500 border-none text-white rounded-md ml-2">
                    Baru
                  </span>
                </span>
                <svg
                  className="ml-2"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                >
                  <path
                    d="M1 1l7.633 8L17 1"
                    stroke="#0A57FF"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            {isFiturExpanded && (
              <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                <li>
                  <span>
                    <FaChartLine size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Harga Cryptocurrency
                      <p className="font-thin text-xs py-1">
                        Pantau harga Bitcoin dan aset Crypto lainnya
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsSafe2Fill size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Earn
                      <span className="badge bg-red-400 border-none text-white rounded-md mx-1">
                        Baru
                      </span>
                      <p className="font-thin text-xs py-1">
                        Simpan aset Crypto, dapatkan bunga tiap jam
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <IoPricetags size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Biaya Transaksi
                      <p className="font-thin text-xs py-1">
                        Lihat biaya trading, tarik Rupiah, dan kirim aset crypto
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BiSupport size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      OTC
                      <p className="font-thin text-xs py-1">
                        Layanan personal dengan harga khusus untuk transaksi
                        dengan jumlah besar
                      </p>
                    </a>
                  </span>
                </li>
              </ul>
            )}

            <li tabIndex={0}>
              <a>PTU</a>
            </li>

            {/* edukasi */}
            <li tabIndex={0}>
              <button
                className="justify-between"
                onClick={() => setIsEdukasiExpanded(!isEdukasiExpanded)}
              >
                <span className="flex items-center">Edukasi</span>
                <svg
                  className="ml-2"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                >
                  <path
                    d="M1 1l7.633 8L17 1"
                    stroke="#0A57FF"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            {isEdukasiExpanded && (
              <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                <li>
                  <span>
                    <img src={Logo} alt="logo" className="w-6" />
                    <a className="font-bold text-lg">
                      Tentang
                      <p className="font-thin text-xs py-1">
                        Jelajahi dunia crypto bersama Pintu
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <FcIdea size={20} />
                    <a className="font-bold text-lg">
                      Pintu Academy
                      <p className="font-thin text-xs py-1">
                        Kumpulan artikel untuk bantu kamu memahami crypto dengan
                        lebih gampang
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <IoChatbubbleOutline size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      FAQ
                      <p className="font-thin text-xs py-1">
                        Informasi seputar crypto dan cara menggunakan aplikasi
                        Pintu
                      </p>
                    </a>
                  </span>
                </li>
              </ul>
            )}

            {/* ikuti kami */}
            <li tabIndex={0}>
              <button
                className="justify-between"
                onClick={() => setisIkutiKamiExpanded(!isIkutiKamiExpanded)}
              >
                <span className="flex items-center">Ikuti Kami</span>
                <svg
                  className="ml-2"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                >
                  <path
                    d="M1 1l7.633 8L17 1"
                    stroke="#0A57FF"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            {isIkutiKamiExpanded && (
              <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                <li>
                  <span>
                    <BsTelegram size={20} />
                    <a className="font-bold text-lg">
                      Telegram
                      <p className="font-thin text-xs py-1">@pintuindonesia</p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsTwitter size={20} />
                    <a className="font-bold text-lg">
                      Twitter
                      <p className="font-thin text-xs py-1">@pintuID</p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <FaInstagramSquare size={20} />
                    <a className="font-bold text-lg">
                      Instagram
                      <p className="font-thin text-xs py-1">@pintu_id</p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsYoutube size={20} />
                    <a className="font-bold text-lg">
                      Youtube
                      <p className="font-thin text-xs py-1">
                        Pintu - Aplikasi jual beli cryptocurrency
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsFacebook size={20} />
                    <a className="font-bold text-lg">
                      Facebook
                      <p className="font-thin text-xs py-1">pintucrypto</p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <FaDiscord size={20} />
                    <a className="font-bold text-lg">
                      Discord
                      <p className="font-thin text-xs py-1">pintuindonesia</p>
                    </a>
                  </span>
                </li>
              </ul>
            )}

            {/* blog & news */}
            <li tabIndex={0}>
              <button
                className="justify-between"
                onClick={() => setisBlogNewsExpanded(!isBlogNewsExpanded)}
              >
                <span className="flex items-center">Blog & News</span>
                <svg
                  className="ml-2"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                >
                  <path
                    d="M1 1l7.633 8L17 1"
                    stroke="#0A57FF"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            {isBlogNewsExpanded && (
              <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                <li>
                  <span>
                    <FaBook size={20} />
                    <a className="font-bold text-lg">
                      Pintu Blog
                      <p className="font-thin text-xs py-1">
                        Kumpulan artikel crypto, keuangan, dan informasi terbaru
                        terkait pintu
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <IoNewspaperSharp size={20} />
                    <a className="font-bold text-lg">
                      Pintu News
                      <p className="font-thin text-xs py-1">
                        Temukan berita update terkini tentang Crypto,
                        blockchain, hingga NFT!
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <BsImage size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Pintu Press Kit
                      <p className="font-thin text-xs py-1">
                        Temukan logo resmi, foto, dan kumpulan press release{" "}
                        <br />
                        Pintu untuk materi promosi disini
                      </p>
                    </a>
                  </span>
                </li>
              </ul>
            )}

            {/* Karier */}
            <li tabIndex={0}>
              <button
                className="justify-between"
                onClick={() => setisKarierExpanded(!isKarierExpanded)}
              >
                <span className="flex items-center">Karier</span>
                <svg
                  className="ml-2"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                >
                  <path
                    d="M1 1l7.633 8L17 1"
                    stroke="#0A57FF"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            {isKarierExpanded && (
              <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                <li>
                  <span>
                    <BsBriefcaseFill size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Karier
                      <span className="badge bg-blue-700 border-none text-white rounded-md mx-1">
                        We're Hiring!
                      </span>
                      <p className="font-thin text-xs py-1">
                        Temukan pekerjaan impianmu disini
                      </p>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <IoCodeSharp size={20} className="fill-black" />
                    <a className="font-bold text-lg">
                      Karier Engineering
                      <span className="badge bg-blue-700 border-none text-white rounded-md mx-1">
                        We're Hiring!
                      </span>
                      <p className="font-thin text-xs py-1">
                        Bergabung dengan tim engineering kami menciptakan <br />
                        platform blockchain yang canggih
                      </p>
                    </a>
                  </span>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
