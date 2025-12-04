import { useEffect, useRef, useState, useMemo, lazy, Suspense } from "react";

function CSSParticleBackground() {
  const particles = useMemo(() => 
    Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      width: Math.random() * 4 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }))
  , []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)",
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.width + "px",
            height: p.width + "px",
            left: p.left + "%",
            top: p.top + "%",
            background: `rgba(0, 217, 255, ${p.opacity})`,
            boxShadow: "0 0 6px rgba(0, 217, 255, 0.3)",
            animation: `particle-float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

function WebGLParticleBackground({ onFallback }: { onFallback: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;
    let renderer: any = null;
    let geometry: any = null;
    let material: any = null;
    let animationFrameId: number;

    const initThree = async () => {
      try {
        const THREE = await import("three");
        
        if (!mounted || !containerRef.current) return;

        try {
          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
          });
        } catch (e) {
          console.warn("WebGL renderer creation failed:", e);
          onFallback();
          return;
        }

        if (!renderer || !renderer.getContext()) {
          if (renderer) renderer.dispose();
          onFallback();
          return;
        }
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 50;

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        if (containerRef.current && mounted) {
          containerRef.current.appendChild(renderer.domElement);
        } else {
          renderer.dispose();
          return;
        }

        const particleCount = 1500;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const cyan = new THREE.Color(0x00d9ff);
        const white = new THREE.Color(0xffffff);

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          positions[i3] = (Math.random() - 0.5) * 150;
          positions[i3 + 1] = (Math.random() - 0.5) * 150;
          positions[i3 + 2] = (Math.random() - 0.5) * 100;

          const mixRatio = Math.random();
          const color = cyan.clone().lerp(white, mixRatio * 0.3);
          colors[i3] = color.r;
          colors[i3 + 1] = color.g;
          colors[i3 + 2] = color.b;
        }

        geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        material = new THREE.PointsMaterial({
          size: 1.5,
          vertexColors: true,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const mouse = { x: 0, y: 0 };

        const handleMouseMove = (event: MouseEvent) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const handleResize = () => {
          if (!mounted || !renderer) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        const animate = () => {
          if (!mounted) return;
          animationFrameId = requestAnimationFrame(animate);
          particles.rotation.x += 0.0003;
          particles.rotation.y += 0.0005;
          particles.rotation.x += mouse.y * 0.0003;
          particles.rotation.y += mouse.x * 0.0003;
          if (renderer) renderer.render(scene, camera);
        };

        animate();

        cleanupRef.current = () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("resize", handleResize);
          cancelAnimationFrame(animationFrameId);
          if (containerRef.current && renderer?.domElement?.parentNode === containerRef.current) {
            containerRef.current.removeChild(renderer.domElement);
          }
          if (renderer) renderer.dispose();
          if (geometry) geometry.dispose();
          if (material) material.dispose();
        };
      } catch (error) {
        console.warn("WebGL initialization failed:", error);
        onFallback();
      }
    };

    initThree();

    return () => {
      mounted = false;
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [onFallback]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)",
      }}
      aria-hidden="true"
    />
  );
}

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return false;
    const glAny = gl as WebGLRenderingContext;
    const debugInfo = glAny.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const rendererStr = glAny.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      if (typeof rendererStr === "string" && 
          (rendererStr.toLowerCase().includes("disabled") || 
           rendererStr.toLowerCase().includes("swiftshader"))) {
        return false;
      }
    }
    return true;
  } catch {
    return false;
  }
}

export default function ParticleBackground() {
  const [useCSS, setUseCSS] = useState(() => !isWebGLAvailable());

  const handleFallback = () => {
    setUseCSS(true);
  };

  if (useCSS) {
    return <CSSParticleBackground />;
  }

  return <WebGLParticleBackground onFallback={handleFallback} />;
}
