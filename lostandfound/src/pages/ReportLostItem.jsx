import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reportLostItem } from "../services/api";

const ReportLostItem = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    item_name: "",
    item_description: "",
    location_found: "",
    finder_name: "",
    finder_contact: "",
    found_date: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== "") {
          submitData.append(key, formData[key]);
        }
      });

      await reportLostItem(submitData);
      setSuccess(true);
      
      // Reset form
      setFormData({
        item_name: "",
        item_description: "",
        location_found: "",
        finder_name: "",
        finder_contact: "",
        found_date: "",
        image: null,
      });
      
      // Reset file input
      const fileInput = document.getElementById('image');
      if (fileInput) fileInput.value = '';
      
    } catch (err) {
      setError(err.response?.data?.error || "Failed to report item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-10">
        <div className="bg-emerald-900/20 p-8 rounded-xl border border-emerald-900/50 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Item Reported Successfully!
          </h2>
          <p className="text-emerald-300 mb-6">
            Your found item has been added to the database. Others can now see it and contact you if it belongs to them.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              View All Items
            </button>
            <button
              onClick={() => {
                setSuccess(false);
                setError("");
              }}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Report Another Item
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-10">
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center text-slate-400 hover:text-teal-400 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </button>
      
      <h1 className="text-3xl font-bold text-white mb-6">Report a Found Item</h1>
      
      {error && (
        <div className="mb-6 p-4 bg-red-900/30 text-red-400 rounded-xl border border-red-800">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6 space-y-6">
        <div>
          <label className="block text-white font-medium mb-2">
            Item Name *
          </label>
          <input
            type="text"
            name="item_name"
            value={formData.item_name}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="e.g., iPhone 13, Black Wallet, etc."
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Description
          </label>
          <textarea
            name="item_description"
            value={formData.item_description}
            onChange={handleInputChange}
            rows="3"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Additional details about the item..."
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Location Found *
          </label>
          <input
            type="text"
            name="location_found"
            value={formData.location_found}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="e.g., Library, Cafeteria, Main Building, etc."
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Your Name *
          </label>
          <input
            type="text"
            name="finder_name"
            value={formData.finder_name}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Contact Number *
          </label>
          <input
            type="tel"
            name="finder_contact"
            value={formData.finder_contact}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Date Found *
          </label>
          <input
            type="date"
            name="found_date"
            value={formData.found_date}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Item Photo *
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-700"
          />
          <p className="text-slate-400 text-sm mt-1">
            Upload a clear photo of the item (JPG, PNG, etc.)
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 disabled:from-slate-600 disabled:to-slate-700 text-white py-3 px-6 rounded-lg font-medium transition flex items-center justify-center"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Reporting Item...
            </>
          ) : (
            "Report Found Item"
          )}
        </button>
      </form>
    </div>
  );
};

export default ReportLostItem;