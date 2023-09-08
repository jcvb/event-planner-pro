"use client";
import { useState } from "react";
import menuOptions from "../../data/menuOptions";

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div>
        <button
          aria-label="Button menu"
          onClick={() => toggleButton()}
          className="md:hidden bg-epp-primary-light p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="30px"
            height="30px"
          >
            <path
              fill="#fff"
              d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
            />
          </svg>
        </button>
        <ul
          className={
            toggle
              ? "md:flex flex-col md:flex-row absolute right-0 left-0 mt-5 bg-epp-primary-light text-white p-5 text-center"
              : "md:flex flex-col md:flex-row hidden"
          }
        >
          {menuOptions.map((item) => (
            <li className="m-4 text-lg md:text-base md:m-0" key={item.name}>
              <a
                onClick={() => toggleButton()}
                className="px-2 mx-2 hover:text-epp-primary"
                href={item.url}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
