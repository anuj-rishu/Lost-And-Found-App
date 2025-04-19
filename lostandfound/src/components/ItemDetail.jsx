import React from "react";

const ItemDetail = ({ item }) => (
  <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800 p-6 max-w-xl mx-auto shadow-lg">
    <img
      src={item.image_url}
      alt={item.item_name}
      className="w-full h-56 object-cover rounded-xl mb-4 bg-zinc-800 border border-zinc-700"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
      }}
    />
    <h1 className="text-2xl font-bold text-white mb-2">{item.item_name}</h1>
    <p className="text-zinc-400 mb-2">{item.location_found}</p>
    <p className="text-zinc-500 mb-4">
      {item.item_description || "No description provided."}
    </p>
    <div className="text-sm text-zinc-400 mb-2">
      <span className="font-medium text-white">Found by:</span>{" "}
      {item.finder_name}
    </div>
    <div className="text-sm text-zinc-400 mb-4">
      <span className="font-medium text-white">Contact:</span>{" "}
      {item.finder_contact}
    </div>
    <div className="flex flex-col gap-3 mt-4">
      <a
        href={`tel:${item.finder_contact}`}
        className="block text-center bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg py-2 font-medium transition"
        style={{ marginTop: 0 }}
      >
        📞 Call Finder
      </a>
    </div>
  </div>
);

export default ItemDetail;
