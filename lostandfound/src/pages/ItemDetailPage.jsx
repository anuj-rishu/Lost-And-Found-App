import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItemById } from "../services/api";
import ItemDetail from "../components/ItemDetail";

const ItemDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getItemById(id);
        setItem(data);
      } catch {
        setError("Failed to load item details.");
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (error || !item) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center shadow-lg">
          <h2 className="text-xl font-bold text-red-400 mb-2">
            Item Not Found
          </h2>
          <p className="text-slate-300 mb-6">
            {error || "The item you are looking for does not exist."}
          </p>
          <button
            className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white py-2 px-6 rounded-lg font-medium transition-all duration-300 shadow-md"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center text-slate-400 hover:text-teal-400 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all items
      </button>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailPage;