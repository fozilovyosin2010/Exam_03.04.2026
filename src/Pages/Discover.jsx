import React, { useState } from "react";

const NFTCard = ({ img, name, price }) => (
  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
    <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-gray-100">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
    </div>
    <div className="flex justify-between items-center px-1">
      <div>
        <p className="font-bold text-sm text-zinc-900">{name}</p>
        <p className="text-[10px] text-gray-400 font-medium">@DiveSea</p>
      </div>
      <p className="text-xs font-bold text-zinc-800">{price} ETH</p>
    </div>
    <button className="w-full mt-3 py-2 bg-black text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
      Place Bid
    </button>
  </div>
);

const Discover = () => {
  // Placeholder data mimicking the Figma grid
  const nfts = Array(8).fill({
    name: "Sun-Glass",
    price: "1.75",
    img: "https://picsum.photos",
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 2. Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        {/* 3. RESPONSIVE GRID 
            - 1 column on Mobile
            - 2 columns on Tablet (md)
            - 4 columns on Desktop (lg)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nfts.map((nft, i) => (
            <NFTCard key={i} {...nft} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Discover;
