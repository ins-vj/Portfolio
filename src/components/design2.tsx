'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiBlender,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiPandas,
  SiPytorch,
  SiTypescript,
  SiSolidity,
  SiSupabase,
  SiPostgresql,
} from 'react-icons/si';

interface Entity {
  id: number;
  name: string;
  icon: JSX.Element;
  angle: number;
  radius: number;
}

const totalEntities = 25;
const centerRadius = 120;
const radiusIncrement = 30;

const iconList = [
  { icon: <SiCplusplus color="#00599C" />, name: 'C++' },
  { icon: <SiCss3 color="#264DE4" />, name: 'CSS' },
  { icon: <SiDjango color="#092E20" />, name: 'Django' },
  { icon: <SiBlender color="#F5792A" />, name: 'Blender' },
  { icon: <SiFigma color="#F24E1E" />, name: 'Figma' },
  { icon: <SiGit color="#F05032" />, name: 'Git' },
  { icon: <SiHtml5 color="#E34F26" />, name: 'HTML' },
  { icon: <SiJavascript color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <SiLinux color="#FCC624" />, name: 'Linux' },
  { icon: <SiMongodb color="#47A248" />, name: 'MongoDB' },
  { icon: <SiMysql color="#4479A1" />, name: 'MySQL' },
  { icon: <SiNodedotjs color="#339933" />, name: 'Node.js' },
  { icon: <SiNextdotjs color="#000000" />, name: 'Next.js' },
  { icon: <SiPostman color="#FF6C37" />, name: 'Postman' },
  { icon: <SiPython color="#3776AB" />, name: 'Python' },
  { icon: <SiReact color="#61DAFB" />, name: 'React' },
  { icon: <SiTailwindcss color="#38B2AC" />, name: 'Tailwind CSS' },
  { icon: <SiTensorflow color="#FF6F00" />, name: 'TensorFlow' },
  { icon: <SiPandas color="#150458" />, name: 'Pandas' },
  { icon: <SiPytorch color="#EE4C2C" />, name: 'PyTorch' },
  { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
  { icon: <SiSolidity color="#363636" />, name: 'Solidity' },
  { icon: <SiSupabase color="#3ECF8E" />, name: 'Supabase' },
  { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL' },
];

const entities: Entity[] = Array.from({ length: totalEntities }, (_, i) => {
  const angle = (i / totalEntities) * 2 * Math.PI;
  const radius = centerRadius + radiusIncrement * (i % 5);
  return {
    id: i,
    name: iconList[i % iconList.length].name,
    icon: iconList[i % iconList.length].icon,
    angle,
    radius,
  };
});

export default function Component() {
  const [hoveredEntity, setHoveredEntity] = useState<number | null>(null);
  const [draggedEntity, setDraggedEntity] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateDistance = (id1: number, id2: number) => {
    const entity1 = entities[id1];
    const entity2 = entities[id2];
    const dx =
      entity1.radius * Math.cos(entity1.angle) -
      entity2.radius * Math.cos(entity2.angle);
    const dy =
      entity1.radius * Math.sin(entity1.angle) -
      entity2.radius * Math.sin(entity2.angle);
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getEntitySize = (entity: Entity) => {
    if (hoveredEntity === null) return 1;

    const distance = calculateDistance(entity.id, hoveredEntity);
    const maxDistance = centerRadius * 2 + radiusIncrement * 4;

    if (distance === 0) return 1.5; // Hovered entity
    if (distance <= radiusIncrement) return 1.3; // Adjacent entities
    return 0.8 + 0.2 * (1 - distance / maxDistance); // Other entities
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedEntity !== null && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Update position of dragged entity (not implemented in this example)
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [draggedEntity]);

  const handleMouseDown = (id: number) => setDraggedEntity(id);
  const handleMouseUp = () => setDraggedEntity(null);

  const getEntityPosition = (entity: Entity) => {
    const x = Math.cos(entity.angle) * entity.radius;
    const y = Math.sin(entity.angle) * entity.radius;
    return { x, y };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[90%] overflow-hidden pb-100"
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setHoveredEntity(null)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {entities.map((entity) => {
          const { x, y } = getEntityPosition(entity);
          return (
            <motion.div
              key={entity.id}
              className="absolute rounded-full overflow-hidden cursor-pointer flex items-center justify-center"
              style={{
                width: 150, // Doubled size from 75 to 150
                height: 150, // Doubled size from 75 to 150
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: getEntitySize(entity),
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                mass: 0.5,
              }}
              onMouseEnter={() => setHoveredEntity(entity.id)}
              onMouseDown={() => handleMouseDown(entity.id)}
            >
              <div className="w-full h-full flex items-center justify-center">
                {React.cloneElement(entity.icon, { size: 50 })} {/* Doubled size from 50 to 100 */}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}