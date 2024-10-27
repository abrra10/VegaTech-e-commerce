import { useEffect } from "react";

const useViewportHeight = () => {
  useEffect(() => {
    const setFullHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set the height when the component mounts
    setFullHeight();

    // Update the height on window resize
    window.addEventListener("resize", setFullHeight);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", setFullHeight);
  }, []);
};

export default useViewportHeight;
