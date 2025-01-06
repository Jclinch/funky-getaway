"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

interface StatProps {
  value: number;
  label: string;
  duration?: number;
}

function AnimatedStat({ value, label, duration = 2000 }: StatProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const incrementTime = duration / end;
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-orange mb-2">
        {count}
        {label.includes("Success Rate") ? "%" : "+"}
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}

export function SuccessStats() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Our Track Record of Excellence
          </h2>
          <p className="text-gray-600">
            Since our establishment in 2018, we have consistently delivered
            outstanding results for our clients across a wide range of legal
            practices.{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <AnimatedStat value={1000} label="Satisfied Clients" />
          <AnimatedStat value={98} label="Success Rate" />
          <AnimatedStat value={10} label="Years of Experience" />
          <AnimatedStat value={50} label="Approved Visa" />
        </div>
      </div>
    </section>
  );
}
