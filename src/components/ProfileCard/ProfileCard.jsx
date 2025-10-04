"use client";
import React, { useEffect, useRef, useCallback } from "react";
import RedesSociais from "../Contact/RedesSociais";
const ProfileCardComponent = ({
  avatarUrl = "/gomes.webp",
  name = "Rui Gomes",
  title = "Fullstack Developer | Criador de Soluções Digitais",
  handle = "ruigomes-dev",
  status = "Disponível",

  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  className = "",
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  // --- Tilt handler ---
  const updateCardTransform = (offsetX, offsetY, card, wrap) => {
    const width = card.clientWidth;
    const height = card.clientHeight;

    const percentX = (100 / width) * offsetX;
    const percentY = (100 / height) * offsetY;

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    const properties = {
      "--rotate-x": `${-(centerY / 6)}deg`,
      "--rotate-y": `${centerX / 6}deg`,
    };

    Object.entries(properties).forEach(([prop, value]) => {
      wrap.style.setProperty(prop, value);
    });
  };

  const handlePointerMove = useCallback((event) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;
    const rect = card.getBoundingClientRect();
    updateCardTransform(
      event.clientX - rect.left,
      event.clientY - rect.top,
      card,
      wrap
    );
  }, []);

  const handlePointerLeave = useCallback(() => {
    const wrap = wrapRef.current;
    if (wrap) {
      wrap.style.setProperty("--rotate-x", "0deg");
      wrap.style.setProperty("--rotate-y", "0deg");
    }
  }, []);

  // Mobile tilt
  const handleDeviceOrientation = useCallback(
    (event) => {
      if (!enableMobileTilt) return;
      const { beta, gamma } = event;
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!beta || !gamma || !card || !wrap) return;

      updateCardTransform(
        card.clientWidth / 2 + gamma * mobileTiltSensitivity,
        card.clientHeight / 2 + beta * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [enableMobileTilt, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt) return;
    const card = cardRef.current;

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);

    if (enableMobileTilt) {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [
    enableTilt,
    enableMobileTilt,
    handlePointerMove,
    handlePointerLeave,
    handleDeviceOrientation,
  ]);

  return (
    <div
      ref={wrapRef}
      className={`[transform:rotateX(var(--rotate-x,0))_rotateY(var(--rotate-y,0))] transition-transform duration-200 ${className}`}
    >
      <section
        ref={cardRef}
        className="bg-[#0B1120] border border-cyan-500/30 shadow-xl rounded-2xl p-6 max-w-sm mx-auto text-center text-white"
      >
        {/* Avatar */}
        <img
          className="w-40 h-40 rounded-full border-4 border-cyan-400 ring-8 ring-cyan-500/30 object-cover mx-auto mb-4 shadow-lg"
          src={avatarUrl}
          alt={`${name} avatar`}
          loading="lazy"
        />

        {/* Nome + Título */}
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{title}</p>

        {/* Handle + Status */}
        <div className="mt-3 flex flex-col items-center gap-1">
          <span className="text-cyan-400">@{handle}</span>
          <span className="text-green-400 text-sm">{status}</span>
        </div>

        {/* links redes sociais */}
        <div className="flex justify-center">
          <RedesSociais />
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
