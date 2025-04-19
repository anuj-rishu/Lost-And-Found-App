import React from "react";
import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";

const Footer = () => (
  <footer className="bg-black py-5 text-center border-t border-zinc-800">
    <div className="mt-2 text-xs text-zinc-500 font-semibold mb-2">
      Designed &amp; developed by Anuj Rishu Tiwari
    </div>
    <div className="flex justify-center gap-6 mt-2">
      <a
        href="https://www.linkedin.com/in/anuj_rishu/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-purple-400 hover:text-blue-400 transition"
        title="LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/anuj_rishu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-purple-400 hover:text-blue-400 transition"
        title="GitHub"
      >
        <GitHubIcon />
      </a>
    </div>
  </footer>
);

export default Footer;