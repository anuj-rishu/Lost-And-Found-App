import React, { useState, useEffect } from "react";
import ItemsList from "../components/ItemsList";
import { getLostItems } from "../services/api";
import { motion } from "framer-motion";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getLostItems();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching items:", err);
      setError("Failed to load items. Please try again later.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = Array.isArray(items) ? items.filter(item =>
    item.item_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location_found?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.item_description?.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            SRM Lost & Found
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Helping the SRM community reconnect with their valuable belongings. Simple, secure, and efficient.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search items, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 rounded-lg bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300
                  shadow-lg backdrop-blur-sm"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl px-8 py-4 shadow-lg">
              <div className="text-3xl font-bold text-teal-400">{Array.isArray(items) ? items.length : 0}</div>
              <div className="text-slate-300 font-medium">Items Found</div>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl px-8 py-4 shadow-lg">
              <div className="text-3xl font-bold text-teal-400">24/7</div>
              <div className="text-slate-300 font-medium">Support Available</div>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl px-8 py-4 shadow-lg">
              <div className="text-3xl font-bold text-teal-400">100%</div>
              <div className="text-slate-300 font-medium">Secure Process</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Items List Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Recently Found Items</h2>
            {!loading && !error && (
              <button
                onClick={fetchItems}
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors px-4 py-2 
                  border border-slate-700 rounded-lg hover:bg-slate-800/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            )}
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 shadow-xl">
            <ItemsList 
              items={filteredItems} 
              loading={loading} 
              error={error}
            />
          </div>
        </motion.div>

        {/* How it Works Section */}
        <motion.div 
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-10 border border-slate-700 mb-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:shadow-teal-500/10 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Browse Items</h3>
              <p className="text-slate-300">Search through our database of items that have been found across campus locations</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:shadow-teal-500/10 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Verify & Contact</h3>
              <p className="text-slate-300">Securely verify your ownership and contact the finder through our encrypted messaging system</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:shadow-teal-500/10 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Retrieve Your Item</h3>
              <p className="text-slate-300">Arrange a safe meeting at one of our designated campus retrieval points</p>
            </div>
          </div>
        </motion.div>

        {/* Trust & Security Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Your Security is Our Priority</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            We implement strict verification protocols to ensure lost items are returned to their rightful owners.
            All communications are encrypted and your personal information is protected.
          </p>
          <div className="inline-flex bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full border border-teal-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Trusted by the entire SRM community
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;