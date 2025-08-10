import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Commet } from "react-loading-indicators";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false);
      return;
    }

    function onLoadOrError() {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        onLoadOrError();
      } else {
        img.addEventListener("load", onLoadOrError);
        img.addEventListener("error", onLoadOrError);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onLoadOrError);
        img.removeEventListener("error", onLoadOrError);
      });
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[var(--color-bg)] text-white">
        <Commet
          color="bg-[var(--color-introduce)]"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;