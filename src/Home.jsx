import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">
        Thank you for feeling like home here ❤️
      </h2>
      <img
        src="/pigeon-nest.png"
        alt="Pigeon Nest"
        className="w-64 h-auto"
      />
    </div>
  );
}
