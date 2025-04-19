import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gradient-to-r from-purple-900 to-blue-900 shadow-lg border-b border-zinc-800 sticky top-0 z-30">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3 group">
        <span className="bg-gradient-to-br from-purple-600 to-blue-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg border-4 border-purple-700 group-hover:scale-105 transition-transform duration-200">
          SRM
        </span>
        <span className="text-white text-2xl font-extrabold tracking-tight drop-shadow group-hover:text-purple-300 transition-colors duration-200">
          Lost &amp; Found
        </span>
      </Link>
      <nav className="flex gap-4">
        <Link
          to="/how-to-report"
          className="text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 px-3 py-1.5 rounded-md font-semibold shadow transition text-sm sm:px-4 sm:py-2 sm:rounded-lg sm:text-base"
        >
          Report Lost Item
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;