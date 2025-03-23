import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black ">
    <h1 className="text-6xl font-bold text-red-500">404</h1>
    <p className="text-lg text-white mt-4">
      Oops! The page you're looking for doesn't exist.
    </p>
    <Link
      to="/"
      className="mt-6 text-blue-600 hover:underline text-lg"
    >
      Go back to Home
    </Link>
  </div>
  );
};

export default ErrorPage;