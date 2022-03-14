import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={`ease-in-out duration-700 ${
        dark ? "dark_mode" : "light_mode"
      }`}
    >
      <button
        className={`fixed top-[50%] right-2  p-4 rounded-full z-10 ${
          dark ? "light_nav" : "dark_nav"
        }`}
        onClick={() => setDark(!dark)}
      ></button>
      <Component {...pageProps} dark={dark} />
    </div>
  );
}

export default MyApp;
