import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Circle = () => {
  const circleSize = 40;
  const circleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [previousMouse, setPreviousMouse] = useState({ x: 0, y: 0 });
  const [currentScale, setCurrentScale] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);
  const speed = 0.17;

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    const deltaX = mousePosition.x - circleRef.current.position.x;
    const deltaY = mousePosition.y - circleRef.current.position.y;
    circleRef.current.position.x += deltaX * speed;
    circleRef.current.position.y += deltaY * speed;

    const deltaMouseX = mousePosition.x - previousMouse.x;
    const deltaMouseY = mousePosition.y - previousMouse.y;
    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
    const scaleValue = (mouseVelocity / 150) * 0.5;
    setCurrentScale((prevScale) => prevScale + (scaleValue - prevScale) * speed);

    const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
    if (mouseVelocity > 20) {
      setCurrentAngle(angle);
    }

    setPreviousMouse({ x: mousePosition.x, y: mousePosition.y });

    circleRef.current.rotation.z = (currentAngle * Math.PI) / 180;
    circleRef.current.scale.set(1 + currentScale, 1 - currentScale, 1);
  });

  return (
    <mesh ref={circleRef} position={[0, 0, 0]}>
      <circleGeometry args={[circleSize / 2, 32]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

const CircleCursor = () => {
  return (
    <Canvas style={{ backgroundColor: '#050908', minHeight: '100vh' }}>
      <ambientLight />
      <Circle />
    </Canvas>
  );
};

export default CircleCursor;
