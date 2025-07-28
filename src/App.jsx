import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme, handleThemeSwitch } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-900 p-6 text-center font-sans text-black dark:text-white">
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
        <nav className="flex items-center space-x-4">
          {/* <button onClick={handleThemeSwitch} className="p-2 rounded-full">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button> */}
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
