import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign } from "lucide-react";

function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-400 hover:bg-yellow-300 text-black dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:text-white text-lg px-4 py-2 rounded relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-lg bg-white dark:bg-gray-800 ${className}`}>{children}</div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export default function BasicPage() {
  const [showCash, setShowCash] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  const handleButtonClick = () => {
    setShowCash(true);
    setAnimationCycle(prev => prev + 1);
    setTimeout(() => setShowCash(false), 5000);
  };

  const floatingEffects = Array.from({ length: 30 }, (_, i) => {
    const angle = (i / 30) * 2 * Math.PI;
    const radius = 120 + Math.random() * 50;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const isCash = Math.random() > 0.4;
    const content = isCash ? "💵" : "✨";

    return (
      <motion.div
        key={`${animationCycle}-${i}`}
        initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
        animate={{ opacity: 1, x, y, scale: 1 }}
        exit={{ opacity: 0, scale: 0.3 }}
        transition={{ duration: 1, delay: (i % 10) * 0.1 }}
        className="absolute text-green-600 text-2xl pointer-events-none"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        {content}
      </motion.div>
    );
  });

  useEffect(() => {
    if (!showCash) return;
    const interval = setInterval(() => {
      setAnimationCycle(prev => prev + 1);
    }, 1000);
    const timeout = setTimeout(() => clearInterval(interval), 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [showCash]);

  return (
    <>
      {/* Hero Section */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Shit Happens. Make It Count.
        </motion.h2>
        <div className="relative inline-block">
          <Button onClick={handleButtonClick}>Turn Crap Into Cash</Button>
          <AnimatePresence>{showCash && floatingEffects}</AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center">
          <img
            src="/pigeon-pooping.png"
            alt="Pigeon Pooping on Man"
            className="w-64 h-auto"
          />
        </div>
      </section>

      {/* Why Section */}
      <section id="about">
        <h3 className="text-2xl font-bold mb-6">
          Why Shit Happens Isn’t So Bad
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <div className="text-4xl">💩</div>
              <h4 className="font-semibold mt-2">It Happens to Everyone</h4>
              <p>Life throws curveballs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="text-4xl">✨</div>
              <h4 className="font-semibold mt-2">It Can Be Golden</h4>
              <p>There are unexpected gifts.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="text-4xl text-green-600">
                <DollarSign />
              </div>
              <h4 className="font-semibold mt-2">Profit From It</h4>
              <p>Our tools, merch, or mindset shift.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
} 