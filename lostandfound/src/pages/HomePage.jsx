import React, { useState, useEffect } from "react";
import { getLostItems } from "../services/api";
import ItemsList from "../components/ItemsList";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getLostItems();
        setItems(data);
        setFilteredItems(data);
      } catch {
        setError("Failed to load items.");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredItems(
        items.filter(
          (item) =>
            item.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.item_description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.location_found.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredItems(items);
    }
  }, [searchTerm, items]);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 max-w-7xl">
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by item name or location..."
            className="w-full py-3 px-5 pl-12 rounded-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {error && (
        <div className="mb-6 p-4 bg-red-900/30 text-red-400 rounded-xl border border-red-800 text-center">
          {error}
        </div>
      )}
      <ItemsList items={filteredItems} loading={loading} />
    </div>
  );
};

export default HomePage;