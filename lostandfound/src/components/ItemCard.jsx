import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-4 flex flex-col h-full shadow-lg hover:shadow-teal-900/20 transition-all duration-300">
    <div className="relative mb-4">
      <img
        src={item.image_url}
        alt={item.item_name}
        className="w-full h-48 object-cover rounded-lg mb-1 bg-slate-800 border border-slate-700 shadow-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />
      <div className="absolute top-2 right-2 bg-slate-800/80 backdrop-blur-sm text-xs font-medium text-teal-400 px-2 py-1 rounded-md border border-slate-700/50">
        {new Date(item.date_found || Date.now()).toLocaleDateString()}
      </div>
    </div>
    
    <div className="flex-1">
      <h3 className="text-white font-semibold text-lg mb-1 truncate">
        {item.item_name}
      </h3>
      
      <div className="flex items-center mb-2 text-slate-400 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="truncate">{item.location_found || "Location unknown"}</span>
      </div>
      
      <p className="text-slate-400 text-sm line-clamp-2 mb-3">
        {item.item_description || "No description provided"}
      </p>
    </div>
    
    <Link
      to={`/item/${item.id}`}
      className="mt-3 block text-center bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white rounded-lg py-2.5 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
    >
      View Details
    </Link>
  </div>
);

export default ItemCard;