"use client";

import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [grow, setGrow] = useState(false);
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document
        .querySelectorAll("a, button, img, input, textarea, h1")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setGrow(true));
          el.addEventListener("mouseleave", () => setGrow(false));
        });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    const updatePosition = () => {
      if (!isMobile) {
        setPosition((prev) => ({
          x: prev.x + (targetPosition.x - prev.x) * 0.1,
          y: prev.y + (targetPosition.y - prev.y) * 0.1,
        }));
        if (cursorRef.current) {
          const bgColor = window.getComputedStyle(
            document.elementFromPoint(position.x, position.y)
          ).backgroundColor;
          const cursorColor =
            bgColor === "rgba(0, 0, 0, 0)"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(0, 0, 0, 0.5)"; // soonTM
          cursorRef.current.style.backgroundColor = cursorColor;
          cursorRef.current.style.left = `${position.x}px`;
          cursorRef.current.style.top = `${position.y}px`;
        }
      }
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("resize", checkIfMobile);
    checkIfMobile();
    addEventListeners();
    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      removeEventListeners();
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [position.x, position.y, targetPosition.x, targetPosition.y, isMobile]);

  if (isMobile) return null;

  return <div ref={cursorRef} className={`cursor ${grow ? "grow" : ""}`} />;
};

export default CustomCursor;
