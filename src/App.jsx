import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-blue-100 p-6 text-center font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/pigeon-logo.png"
            alt="Pigeon Logo"
            className="w-20 h-10"
          />
          <h1 className="text-2xl font-bold">Shit Happens.</h1>
        </Link>
        <nav className="space-x-4">
          <Link to="/home" className="text-lg font-medium">
            Home
          </Link>
          <Link to="/about" className="text-lg font-medium">
            About
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
