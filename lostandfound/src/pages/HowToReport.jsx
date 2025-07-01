import React from "react";

const HowToReport = () => (
  <div className="container mx-auto max-w-2xl px-4 py-10">
    <h1 className="text-3xl font-bold text-white mb-6">How to Report a Lost Item</h1>
    
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg mb-8">
      <ol className="list-decimal list-inside text-slate-200 space-y-4">
        <li className="flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 font-bold text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
          <div>
            <span>Go to the Telegram bot: </span>
            <a
              href="https://t.me/srm_academia_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              @srm_academia_bot
            </a>
          </div>
        </li>
        <li className="flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 font-bold text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
          <div>
            Login with your <span className="font-semibold text-teal-300">Academia credentials</span>.
          </div>
        </li>
        <li className="flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 font-bold text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
          <div>
            After login, type <span className="bg-slate-800 px-2 py-1 rounded text-teal-300 font-mono border border-slate-700">/reportlost</span> to report your lost item.
          </div>
        </li>
        <li className="flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 font-bold text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
          <div>
            Follow the instructions provided by the bot to submit your lost item details.
          </div>
        </li>
      </ol>
    </div>
    
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-teal-400">More Features in the Telegram Bot:</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="text-slate-200">Live notifications for attendance and marks</span>
        </div>
        
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-slate-200">Check your attendance instantly</span>
        </div>
        
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-slate-200">AI-powered future attendance prediction</span>
        </div>
        
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-slate-200">Create custom date and time tasks</span>
        </div>
        
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-slate-200">Mark and check attendance easily</span>
        </div>
        
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-slate-200">And many more smart features!</span>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <a
          href="https://t.me/srm_academia_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Open SRM Academia Telegram Bot
        </a>
      </div>
    </div>
  </div>
);

export default HowToReport;