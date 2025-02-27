import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white p-4 text-center">
      <p>&copy; Nazim Ansari {currentYear}</p>
    </footer>
  );
}
