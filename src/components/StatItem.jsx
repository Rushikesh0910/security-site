import React, { useState, useEffect } from "react";

const StatItem = ({ endValue, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds mein counting khatam hogi
    const increment = endValue / (duration / 16); // 60fps logic

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-black text-brand-accent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};

export default StatItem;
