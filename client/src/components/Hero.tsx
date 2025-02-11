import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import {
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa"; // Import the social media icons from react-icons
import freeSpeechIcon from "./imgs/hero.png"; // Import the image

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const microphoneRef = useRef<THREE.Group>();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    // Make renderer size responsive
    const updateSize = () => {
      const container = containerRef.current;
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    containerRef.current.appendChild(renderer.domElement);

    // Create microphone model with improved materials
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x9333ea,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
    });
    const microphone = new THREE.Mesh(geometry, material);

    const group = new THREE.Group();
    group.add(microphone);
    scene.add(group);
    microphoneRef.current = group;

    // Improved lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x9333ea, 2);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(-5, -5, 2);
    scene.add(pointLight2);

    // Adjust camera position for better view
    camera.position.z = 6;
    camera.position.y = 1;
    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      if (microphoneRef.current) {
        microphoneRef.current.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="min-h-screen relative flex items-center py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
            The Freedom of Speech Memecoin
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            Join the revolution of free speech in the crypto space with FREE-YE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="glow">
              Buy FREE-YE
            </Button>
            <div className="flex gap-4">
              <a
                href="https://x.com/freeye666"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-8 w-8 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://discord.gg/VTwubTEABN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="h-8 w-8 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/freeyeeofficial?igsh=MTF2YWJwcW5jOGo2eg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-8 w-8 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://t.me/freeyecoin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="h-8 w-8 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@free.ye?_t=ZS-8tpIHaPL55M&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="h-8 w-8 text-gray-400 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="relative h-[300px] sm:h-[400px] lg:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={freeSpeechIcon}
            alt="Free Speech Icon"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
