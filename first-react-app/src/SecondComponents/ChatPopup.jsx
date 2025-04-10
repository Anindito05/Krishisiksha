import { useEffect } from "react";

const ChatPopup = () => {
  useEffect(() => {
    // Prevent loading more than once
    if (window.Tawk_API || document.getElementById("tawk-script")) return;

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.src = "https://embed.tawk.to/662e7764a0c6737bd12f415b/1hs0rn66o";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);
  }, []);

  return null; // Don't render anything visually
};

export default ChatPopup;
