import React from "react";

const ItemDetail = ({ item }) => (
  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6 max-w-xl mx-auto shadow-xl">
    <div className="relative mb-6">
      <img
        src={item.image_url}
        alt={item.item_name}
        className="w-full h-64 object-cover rounded-xl mb-2 bg-slate-800 border border-slate-700 shadow-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
        }}
      />
      <div className="absolute top-3 right-3 bg-slate-800/80 backdrop-blur-sm text-sm font-medium text-teal-400 px-3 py-1.5 rounded-lg border border-slate-700/50">
        {new Date(item.date_found || Date.now()).toLocaleDateString()}
      </div>
    </div>
    
    <h1 className="text-2xl font-bold text-white mb-4">{item.item_name}</h1>
    
    <div className="flex items-center mb-4 text-slate-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>{item.location_found || "Location unknown"}</span>
    </div>
    
    <div className="bg-slate-800/50 rounded-xl p-4 mb-6 border border-slate-700/50">
      <h3 className="text-sm uppercase tracking-wider text-teal-400 font-semibold mb-2">Description</h3>
      <p className="text-slate-300">
        {item.item_description || "No description provided."}
      </p>
    </div>
    
    <div className="bg-slate-800/50 rounded-xl p-4 mb-6 border border-slate-700/50">
      <h3 className="text-sm uppercase tracking-wider text-teal-400 font-semibold mb-3">Finder Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-slate-400 mb-1">Found by</div>
          <div className="text-slate-200 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {item.finder_name || "Anonymous"}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-1">Contact</div>
          <div className="text-slate-200 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {item.finder_contact || "Not provided"}
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col gap-3 mt-6">
      <a
        href={`tel:${item.finder_contact}`}
        className="block text-center bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white rounded-lg py-3 font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Finder
      </a>
    </div>
  </div>
);

export default ItemDetail;