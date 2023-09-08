"use client";
import { useState } from "react";

export default function Accordion({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
    className="mt-2"
      style={{
        width: "100%",
        marginBottom: "15px",
        lineHeight: "20px",
        borderBottom: "1px solid rgba(209, 213, 219, 0.5)",
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          fontSize: "18px",
          fontWeight: "light",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <p>{title}</p>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "10px", color: "gray", textAlign: "justify" }}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}
