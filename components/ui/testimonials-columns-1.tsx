"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border border-green/10 bg-dark-2 shadow-lg shadow-green/5 max-w-xs w-full hover:border-green/25 transition-colors"
              >
                {/* Quote mark */}
                <span className="font-bebas text-4xl text-green/30 leading-none block mb-2">&ldquo;</span>
                <p className="text-cream-dim text-sm leading-relaxed font-dm">{text}</p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-green/10">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-green/20"
                  />
                  <div className="flex flex-col">
                    <div className="font-syne font-semibold text-cream text-sm leading-tight">
                      {name}
                    </div>
                    <div className="font-syne text-xs text-green/70 tracking-wide mt-0.5">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
