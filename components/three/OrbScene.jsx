"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

// Animux brand palette (royal → emerald → signal → mint), shared with the Tailwind gradients.
const PALETTE = [0x10b981, 0x39e079, 0x0b6e3f, 0xa7f3c9, 0x5b8a3c];

function gradientColors(geometry, axis = "y") {
  geometry.computeBoundingBox();
  const { min, max } = geometry.boundingBox;
  const pos = geometry.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const a = new THREE.Color(0x0b6e3f);
  const b = new THREE.Color(0x10b981);
  const c = new THREE.Color(0x39e079);
  const tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const v = axis === "y" ? pos.getY(i) : pos.getX(i);
    const lo = axis === "y" ? min.y : min.x;
    const hi = axis === "y" ? max.y : max.x;
    const t = (v - lo) / (hi - lo || 1);
    if (t < 0.5) tmp.copy(a).lerp(b, t * 2);
    else tmp.copy(b).lerp(c, (t - 0.5) * 2);
    colors.set([tmp.r, tmp.g, tmp.b], i * 3);
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
}

function buildHero(scene, isDark) {
  const root = new THREE.Group();
  scene.add(root);

  // Core: faceted gradient icosahedron
  const coreGeo = new THREE.IcosahedronGeometry(1.15, 1);
  gradientColors(coreGeo);
  const core = new THREE.Mesh(
    coreGeo,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      metalness: 0.35,
      roughness: 0.25,
      transparent: true,
      opacity: isDark ? 0.92 : 0.88,
    }),
  );
  root.add(core);

  // Wireframe shell
  const shellGeo = new THREE.IcosahedronGeometry(1.6, 1);
  const shell = new THREE.LineSegments(
    new THREE.EdgesGeometry(shellGeo),
    new THREE.LineBasicMaterial({
      color: isDark ? 0x6ee7b7 : 0x059669,
      transparent: true,
      opacity: isDark ? 0.45 : 0.55,
    }),
  );
  root.add(shell);

  // Orbit rings
  const rings = [
    { r: 2.25, color: 0x39e079, tilt: [1.2, 0.2, 0] },
    { r: 2.6, color: isDark ? 0xa7f3c9 : 0x0b6e3f, tilt: [0.4, 0.9, 0.3] },
    { r: 2.0, color: 0x10b981, tilt: [-0.6, -0.4, 0.8] },
  ].map(({ r, color, tilt }) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(r, 0.008, 8, 160),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: isDark ? 0.7 : 0.8,
      }),
    );
    ring.rotation.set(...tilt);
    // Satellite riding the ring
    const sat = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.09, 0),
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.6,
        flatShading: true,
      }),
    );
    ring.add(sat);
    root.add(ring);
    return { ring, sat, r, speed: 0.3 + Math.random() * 0.4 };
  });

  // Floating debris (small cubes / tetrahedrons)
  const debris = [];
  for (let i = 0; i < 14; i++) {
    const geo =
      i % 2 === 0
        ? new THREE.BoxGeometry(0.14, 0.14, 0.14)
        : new THREE.TetrahedronGeometry(0.12, 0);
    const color = PALETTE[i % PALETTE.length];
    const m = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color,
        flatShading: true,
        metalness: 0.2,
        roughness: 0.4,
      }),
    );
    const radius = 2.9 + Math.random() * 1.4;
    const angle = (i / 14) * Math.PI * 2;
    m.userData = {
      radius,
      angle,
      y: (Math.random() - 0.5) * 3,
      speed: 0.05 + Math.random() * 0.1,
      spin: 0.4 + Math.random(),
    };
    root.add(m);
    debris.push(m);
  }

  // Particle field
  const count = 700;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const tmp = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const r = 3 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions.set(
      [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 0.7,
        r * Math.cos(phi),
      ],
      i * 3,
    );
    tmp.setHex(PALETTE[i % PALETTE.length]);
    colors.set([tmp.r, tmp.g, tmp.b], i * 3);
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.8 : 0.65,
      sizeAttenuation: true,
      depthWrite: false,
    }),
  );
  scene.add(particles);

  return (t, dt) => {
    core.rotation.x = t * 0.18;
    core.rotation.y = t * 0.24;
    const pulse = 1 + Math.sin(t * 1.4) * 0.03;
    core.scale.setScalar(pulse);
    shell.rotation.x = -t * 0.1;
    shell.rotation.y = -t * 0.14;
    rings.forEach(({ ring, sat, r, speed }, i) => {
      ring.rotation.z += dt * (0.05 + i * 0.03);
      const a = t * speed + i * 2;
      sat.position.set(Math.cos(a) * r, Math.sin(a) * r, 0);
      sat.rotation.x = sat.rotation.y = t;
    });
    debris.forEach((m) => {
      const d = m.userData;
      const a = d.angle + t * d.speed;
      m.position.set(
        Math.cos(a) * d.radius,
        d.y + Math.sin(t * 0.8 + d.angle) * 0.25,
        Math.sin(a) * d.radius * 0.6,
      );
      m.rotation.x = m.rotation.y = t * d.spin;
    });
    particles.rotation.y = t * 0.02;
    particles.rotation.x = Math.sin(t * 0.1) * 0.1;
    return root;
  };
}

function buildKnot(scene, isDark) {
  const root = new THREE.Group();
  scene.add(root);
  const geo = new THREE.TorusKnotGeometry(1.3, 0.38, 220, 22, 2, 3);
  gradientColors(geo, "x");
  const solid = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      metalness: 0.3,
      roughness: 0.3,
      transparent: true,
      opacity: isDark ? 0.35 : 0.3,
    }),
  );
  const wire = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({
      vertexColors: true,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.5 : 0.6,
    }),
  );
  root.add(solid, wire);
  return (t) => {
    root.rotation.x = t * 0.15;
    root.rotation.y = t * 0.22;
    return root;
  };
}

/**
 * Lightweight three.js canvas. Pauses when offscreen, follows the pointer,
 * and renders a single still frame for users who prefer reduced motion.
 */
export default function OrbScene({ variant = "hero", className = "" }) {
  const mountRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isDark = resolvedTheme === "dark";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      });
    } catch {
      return; // No WebGL: the page still looks complete without the scene.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, variant === "hero" ? 8 : 6.5);

    scene.add(new THREE.AmbientLight(0xffffff, isDark ? 0.6 : 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim1 = new THREE.PointLight(0x39e079, 18, 20);
    rim1.position.set(-4, -2, 3);
    const rim2 = new THREE.PointLight(0x10b981, 18, 20);
    rim2.position.set(4, 2, -3);
    scene.add(rim1, rim2);

    const update =
      variant === "knot" ? buildKnot(scene, isDark) : buildHero(scene, isDark);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Pull back on narrow canvases so the orbit never clips.
      camera.position.z = (variant === "hero" ? 8 : 6.5) * Math.max(1, 0.9 / camera.aspect);
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const clock = new THREE.Clock();
    let raf = 0;
    let visible = true;
    let t = 0;

    const frame = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      t += dt;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      const root = update(t, dt);
      root.rotation.z = pointer.x * 0.15;
      scene.rotation.y = pointer.x * 0.35;
      scene.rotation.x = pointer.y * 0.25;
      renderer.render(scene, camera);
      if (visible && !reduceMotion) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (visible && !was && !reduceMotion) {
        clock.getDelta();
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(mount);

    frame();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      scene.traverse((obj) => {
        obj.geometry?.dispose();
        if (obj.material) {
          (Array.isArray(obj.material) ? obj.material : [obj.material]).forEach(
            (m) => m.dispose(),
          );
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [variant, resolvedTheme]);

  return <div ref={mountRef} aria-hidden="true" className={className} />;
}
