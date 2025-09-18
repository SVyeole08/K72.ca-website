import React from "react";
import { useNavigate } from "react-router-dom";

const PageError = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black w-screen h-screen flex items-center justify-center flex-col">
      <h1 className="text-red-500 bg-black text-9xl font-semibold">
        Page not Found
      </h1>
      <button
        className="px-4 py-2 bg-green-400 rounded-lg text-semibold"
        onClick={() => navigate(-1)}
      >
        Go back to last page
      </button>
    </div>
  );
};

export default PageError;
