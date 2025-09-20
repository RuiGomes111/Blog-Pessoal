"use client";
import React, { useEffect, useState, useId } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore: React.FC<ParticlesProps> = ({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#FFFFFF",
  particleDensity = 120,
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("w-full h-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            detectRetina: true,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: false },
                resize: { enable: true }, // atualizado
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: particleColor },
              number: {
                value: particleDensity,
                density: {
                  enable: true,
                  width: 800, // atualizado
                  height: 800, // atualizado
                },
              },
              size: { value: { min: minSize, max: maxSize } },
              move: {
                enable: true,
                speed: 0.5,
                outModes: "out",
                direction: "none",
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed },
              },
              shape: { type: "circle" },
            },
          }}
        />
      )}
    </motion.div>
  );
};
