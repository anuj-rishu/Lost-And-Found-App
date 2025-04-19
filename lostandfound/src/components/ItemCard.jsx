import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => (
  <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800 p-4 flex flex-col h-full shadow hover:shadow-purple-900/40 transition-all duration-200">
    <img
      src={item.image_url}
      alt={item.item_name}
      className="w-full h-40 object-cover rounded-xl mb-3 bg-zinc-800 border border-zinc-700"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
      }}
    />
    <div className="flex-1">
      <h3 className="text-white font-semibold text-lg mb-1 truncate">
        {item.item_name}
      </h3>
      <p className="text-zinc-400 text-sm mb-2 truncate">
        {item.location_found}
      </p>
      <p className="text-zinc-500 text-xs line-clamp-2">
        {item.item_description || "No description provided"}
      </p>
    </div>
    <Link
      to={`/item/${item.id}`}
      className="mt-4 block text-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg py-2 text-sm font-medium transition"
    >
      View Details
    </Link>
  </div>
);

export default ItemCard;