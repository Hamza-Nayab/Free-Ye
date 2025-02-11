import React from "react";
import logo from "./imgs/logo.png"; // Import the logo image
import ParticleBackground from "./ParticleBackground"; // Import the ParticleBackground component

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <ParticleBackground />
      <img src={logo} alt="Loading" className="h-16 w-16 animate-spin z-10" />
    </div>
  );
}
