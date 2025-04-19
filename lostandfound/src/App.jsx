import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ItemDetailPage from "./pages/ItemDetailPage";
import HowToReport from "./pages/HowToReport";

function InstallPromptModal({ show, onInstall, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-700 max-w-xs w-full text-center">
        <h2 className="text-lg font-bold text-white mb-2">Install App</h2>
        <p className="text-zinc-300 mb-4 text-sm">
          For a better experience, install the SRM Lost &amp; Found app on your
          device.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onInstall}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-2 rounded font-semibold"
          >
            Install
          </button>
          <button
            onClick={onClose}
            className="bg-zinc-700 hover:bg-zinc-800 text-zinc-200 px-4 py-2 rounded font-semibold"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowInstall(false);
        setDeferredPrompt(null);
      }
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-blue-950 flex flex-col">
        <Header />
        <main className="py-6 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/item/:id" element={<ItemDetailPage />} />
            <Route path="/how-to-report" element={<HowToReport />} />
          </Routes>
        </main>
        <Footer />
        <InstallPromptModal
          show={showInstall}
          onInstall={handleInstall}
          onClose={() => setShowInstall(false)}
        />
      </div>
    </Router>
  );
}

export default App;
