import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";
import styles from "./CSS/Navbar.css";
import ElinLight from "./Images/1.jpg";
import ElinDark from "./Images/2.jpg";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();

  return (
    <>
      <nav className={`${styles.links} ${styles.transparent}`}>
        <Link
          to="/OmMig"
          className={darkMode ? styles.darkLink : styles.lightLink}
        >
          Om mig
        </Link>
        <Link
          to="/Portfolio"
          className={darkMode ? styles.darkLink : styles.lightLink}
        >
          Portfolie
        </Link>

        <div>
          <input
            type="checkbox"
            id="darkmode-toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label for="darkmode-toggle">
            <svg
              version="1.0"
              className="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              enable-background="new 0 0 64 64"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M32,14.002c-9.941,0-18,8.059-18,18s8.059,18,18,18 s18-8.059,18-18S41.941,14.002,32,14.002z M32,48.002c-8.837,0-16-7.164-16-16s7.163-16,16-16s16,7.164,16,16 S40.837,48.002,32,48.002z"></path>{" "}
                  <path d="M32,20.002c-0.553,0-1,0.447-1,1s0.447,1,1,1 c5.522,0,10,4.477,10,10c0,0.553,0.447,1,1,1s1-0.447,1-1C44,25.375,38.627,20.002,32,20.002z"></path>{" "}
                  <path d="M63,31H53c-0.553,0-1,0.447-1,1s0.447,1,1,1h10 c0.553,0,1-0.447,1-1S63.553,31,63,31z"></path>{" "}
                  <path d="M11.457,36.47l-3.863,1.035c-0.534,0.144-0.851,0.692-0.707,1.226 c0.143,0.533,0.69,0.85,1.225,0.706l3.863-1.035c0.533-0.143,0.85-0.69,0.707-1.225C12.539,36.644,11.99,36.327,11.457,36.47z"></path>{" "}
                  <path d="M49.32,22c0.277,0.479,0.888,0.643,1.367,0.366l8.66-5 c0.479-0.276,0.643-0.888,0.365-1.366c-0.275-0.479-0.887-0.642-1.365-0.365l-8.66,5C49.208,20.912,49.045,21.521,49.32,22z"></path>{" "}
                  <path d="M17.858,46.143c-0.39-0.391-1.023-0.389-1.414,0l-2.828,2.828 c-0.391,0.391-0.39,1.025,0.001,1.415c0.39,0.391,1.022,0.39,1.413-0.001l2.828-2.828C18.249,47.168,18.249,46.534,17.858,46.143z"></path>{" "}
                  <path d="M42,14.68c0.479,0.276,1.09,0.113,1.367-0.366l5-8.66 C48.644,5.175,48.48,4.563,48,4.287c-0.478-0.276-1.088-0.112-1.365,0.366l-4.999,8.661C41.358,13.793,41.522,14.403,42,14.68z"></path>{" "}
                  <path d="M26.824,51.318c-0.532-0.143-1.08,0.176-1.225,0.707l-1.035,3.863 c-0.143,0.535,0.176,1.083,0.709,1.226c0.533,0.144,1.08-0.173,1.223-0.708l1.035-3.863C27.676,52.012,27.359,51.463,26.824,51.318 z"></path>{" "}
                  <path d="M32,12c0.554,0,1.001-0.446,1.002-1V1c0-0.553-0.447-1-1.002-1 c-0.551,0-0.998,0.447-0.999,1l0.001,10C31.002,11.553,31.449,12,32,12z"></path>{" "}
                  <path d="M38.402,52.025c-0.141-0.532-0.689-0.85-1.225-0.707 c-0.533,0.143-0.848,0.692-0.707,1.225l1.035,3.863c0.144,0.535,0.693,0.85,1.227,0.707s0.849-0.689,0.705-1.225L38.402,52.025z"></path>{" "}
                  <path d="M20.637,14.312c0.275,0.479,0.887,0.643,1.363,0.367 c0.48-0.277,0.645-0.887,0.368-1.367l-5-8.66C17.092,4.174,16.48,4.01,16,4.287c-0.477,0.275-0.641,0.887-0.365,1.365 L20.637,14.312z"></path>{" "}
                  <path d="M47.558,46.142c-0.388-0.39-1.022-0.39-1.414,0 c-0.391,0.39-0.388,1.024,0,1.414l2.828,2.828c0.392,0.392,1.025,0.389,1.415-0.001c0.391-0.39,0.391-1.021-0.001-1.413 L47.558,46.142z"></path>{" "}
                  <path d="M4.654,17.365l8.662,4.999c0.477,0.276,1.088,0.113,1.363-0.364 c0.277-0.479,0.115-1.09-0.364-1.367l-8.661-5C5.176,15.356,4.564,15.52,4.287,16C4.013,16.477,4.176,17.089,4.654,17.365z"></path>{" "}
                  <path d="M52.027,38.4l3.863,1.035c0.535,0.145,1.082-0.176,1.225-0.709 c0.144-0.532-0.172-1.079-0.707-1.223l-3.863-1.035c-0.531-0.145-1.081,0.173-1.225,0.707C51.176,37.709,51.496,38.256,52.027,38.4 z"></path>{" "}
                  <path d="M12,32c0.001-0.554-0.445-1-0.998-1.002L1,31 c-0.552,0-1,0.445-1,1c0.001,0.551,0.448,1,1.001,1l10.001-0.002C11.553,32.998,12.001,32.552,12,32z"></path>{" "}
                  <path d="M52.545,27.529l3.863-1.035c0.535-0.143,0.85-0.693,0.706-1.227 c-0.142-0.531-0.688-0.848-1.224-0.705l-3.863,1.035c-0.533,0.141-0.85,0.691-0.707,1.225 C51.461,27.356,52.012,27.67,52.545,27.529z"></path>{" "}
                  <path d="M14.68,42c-0.275-0.48-0.886-0.644-1.365-0.368l-8.661,5.002 C4.176,46.91,4.01,47.52,4.287,48c0.277,0.477,0.889,0.641,1.367,0.365l8.66-5.002C14.791,43.088,14.957,42.479,14.68,42z"></path>{" "}
                  <path d="M46.144,17.856c0.389,0.392,1.022,0.388,1.414,0l2.828-2.828 c0.392-0.392,0.39-1.024-0.002-1.415c-0.388-0.39-1.021-0.391-1.412,0.001l-2.828,2.828C45.752,16.83,45.754,17.466,46.144,17.856z "></path>{" "}
                  <path d="M22,49.32c-0.479-0.277-1.088-0.113-1.365,0.364l-5,8.663 c-0.275,0.478-0.115,1.088,0.365,1.365c0.479,0.274,1.09,0.11,1.367-0.367l4.998-8.662C22.641,50.207,22.48,49.597,22,49.32z"></path>{" "}
                  <path d="M37.178,12.68c0.531,0.145,1.078-0.176,1.225-0.707l1.035-3.863 c0.143-0.535-0.176-1.083-0.709-1.225c-0.531-0.144-1.08,0.172-1.223,0.707l-1.035,3.863C36.324,11.986,36.645,12.536,37.178,12.68 z"></path>{" "}
                  <path d="M32,52c-0.553-0.002-0.998,0.446-1,0.998l0.002,10.004 C31.002,63.552,31.445,64,32,64c0.553,0,1-0.449,1.001-1l-0.003-10.002C32.998,52.447,32.555,52,32,52z"></path>{" "}
                  <path d="M25.6,11.973c0.139,0.533,0.691,0.85,1.225,0.707 c0.532-0.141,0.846-0.691,0.707-1.225l-1.035-3.863c-0.145-0.535-0.693-0.851-1.227-0.706c-0.531,0.142-0.85,0.688-0.705,1.224 L25.6,11.973z"></path>{" "}
                  <path d="M43.363,49.687c-0.275-0.478-0.883-0.644-1.363-0.365 c-0.479,0.274-0.641,0.885-0.367,1.364l5.004,8.661c0.275,0.478,0.883,0.644,1.363,0.366c0.479-0.277,0.642-0.889,0.367-1.367 L43.363,49.687z"></path>{" "}
                  <path d="M16.443,17.856c0.387,0.394,1.023,0.39,1.414,0 c0.391-0.388,0.387-1.021,0-1.414l-2.828-2.828c-0.393-0.392-1.025-0.39-1.415,0.002c-0.39,0.388-0.392,1.021,0.001,1.412 L16.443,17.856z"></path>{" "}
                  <path d="M59.348,46.633l-8.663-4.997 c-0.478-0.276-1.087-0.116-1.363,0.366c-0.278,0.477-0.112,1.086,0.364,1.364l8.664,4.999c0.477,0.275,1.086,0.115,1.363-0.365 C59.988,47.521,59.824,46.91,59.348,46.633z"></path>{" "}
                  <path d="M11.974,25.599L8.11,24.563c-0.536-0.144-1.083,0.175-1.225,0.708 c-0.144,0.531,0.171,1.08,0.707,1.225l3.863,1.034c0.531,0.146,1.081-0.175,1.225-0.707C12.825,26.293,12.505,25.746,11.974,25.599 z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <svg
              className="moon"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="icomoon-ignore"> </g>{" "}
                <path d="M9.882 5.052c-0.847 1.717-1.295 3.614-1.295 5.564 0 6.977 5.676 12.653 12.653 12.653 2.052 0 4.035-0.489 5.812-1.412-2.15 3.869-6.248 6.37-10.862 6.37-6.866 0-12.451-5.585-12.451-12.451 0-4.491 2.409-8.533 6.143-10.724zM12.79 2.707c-5.817 1.509-10.118 6.78-10.118 13.069 0 7.465 6.053 13.517 13.518 13.517 6.387 0 11.726-4.435 13.139-10.389-2.087 2.039-4.939 3.298-8.088 3.298-6.399 0-11.587-5.188-11.587-11.587 0-3.061 1.196-5.838 3.137-7.909v0z">
                  {" "}
                </path>{" "}
              </g>
            </svg>
          </label>
        </div>
        <Link to="/">
          <img
            className="LogoImg"
            src={darkMode ? ElinDark : ElinLight}
            alt="Elin Nilsson Logo"
          />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
