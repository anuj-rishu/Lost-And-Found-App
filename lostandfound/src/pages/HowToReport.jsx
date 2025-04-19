import React from "react";

const HowToReport = () => (
  <div className="container mx-auto max-w-2xl px-4 py-10">
    <h1 className="text-3xl font-bold text-white mb-4">How to Report a Lost Item</h1>
    <ol className="list-decimal list-inside text-zinc-200 mb-6 space-y-2">
      <li>
        Go to the Telegram bot:{" "}
        <a
          href="https://t.me/srm_academia_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          @srm_academia_bot
        </a>
      </li>
      <li>
        Login with your <span className="font-semibold text-purple-300">Academia credentials</span>.
      </li>
      <li>
        After login, type <span className="bg-zinc-800 px-2 py-1 rounded text-purple-300 font-mono">/reportlost</span> to report your lost item.
      </li>
      <li>
        Follow the instructions provided by the bot to submit your lost item details.
      </li>
    </ol>
    <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-700 text-zinc-300">
      <h2 className="text-lg font-bold mb-2 text-purple-300">More Features in the Telegram Bot:</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Get live notifications for attendance and marks</li>
        <li>Check your attendance instantly</li>
        <li>AI-powered future attendance prediction</li>
        <li>Create custom date and time tasks</li>
        <li>Mark and check attendance easily</li>
        <li>And many more smart features!</li>
      </ul>
      <div className="mt-4">
        <a
          href="https://t.me/srm_academia_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow transition"
        >
          Open SRM Academia Telegram Bot
        </a>
      </div>
    </div>
  </div>
);

export default HowToReport;