import React from "react";

const UpContent = () => {
  return (
    <div className="grid grid-flow-row sm:grid-flow-col gap-2 lg:mx-12 py-2 sm:py-6">
      <div className="sm:col-span-1 flex justify-start my-2 mx-2">
        <h1 className="font-bold text-2xl">
          Harga Crypto dalam Rupiah Hari Ini
        </h1>
      </div>
      <div className="flex justify-start my-2 mx-2 sm:mx-0">
        <form className="form-control w-full">
          <div className="input-group">
            <button className="btn btn-active btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpContent;
