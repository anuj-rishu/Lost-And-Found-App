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
        <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error || !item) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="bg-red-900/20 p-8 rounded-xl border border-red-900/50 text-center">
          <h2 className="text-xl font-bold text-red-400 mb-2">
            Item Not Found
          </h2>
          <p className="text-red-300 mb-6">
            {error || "The item you are looking for does not exist."}
          </p>
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-2 px-6 rounded-lg font-medium"
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
        className="mb-6 text-zinc-400 hover:text-purple-400 transition"
      >
        &larr; Back to all items
      </button>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailPage;