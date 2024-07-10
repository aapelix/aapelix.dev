"use client";

import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [grow, setGrow] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const [targetPosition, setTargetPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document
        .querySelectorAll<HTMLElement>("a, button, img, input, textarea, h1")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleMouseEnter);
          el.addEventListener("mouseleave", handleMouseLeave);
        });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document
        .querySelectorAll<HTMLElement>("a, button, img, input, textarea, h1")
        .forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
    };

    const onMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setGrow(true);
    const handleMouseLeave = () => setGrow(false);

    const updatePosition = () => {
      if (!isMobile) {
        setPosition((prev) => ({
          x: prev.x + (targetPosition.x - prev.x) * 0.1,
          y: prev.y + (targetPosition.y - prev.y) * 0.1,
        }));
        if (cursorRef.current) {
          const bgColor = window.getComputedStyle(
            document.elementFromPoint(position.x, position.y) as Element
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
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [position.x, position.y, targetPosition.x, targetPosition.y, isMobile]);

  if (isMobile) return null;

  return <div ref={cursorRef} className={`cursor ${grow ? "grow" : ""}`} />;
};

export default CustomCursor;
