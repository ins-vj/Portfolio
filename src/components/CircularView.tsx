'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Entity {
  id: number
  name: string
  icon: string
}

const gridSize = 5
const entities: Entity[] = Array.from({ length: gridSize * gridSize }, (_, i) => ({
  id: i,
  name: `Entity ${i + 1}`,
  icon: `/placeholder.svg?height=60&width=60`,
}))

export default function GridView() {
  const [hoveredEntity, setHoveredEntity] = useState<number | null>(null)
  const [draggedEntity, setDraggedEntity] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const calculateDistance = (id1: number, id2: number) => {
    const x1 = id1 % gridSize
    const y1 = Math.floor(id1 / gridSize)
    const x2 = id2 % gridSize
    const y2 = Math.floor(id2 / gridSize)
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  const getEntitySize = (entity: Entity) => {
    if (hoveredEntity === null) return 1

    const distance = calculateDistance(entity.id, hoveredEntity)
    const maxDistance = Math.sqrt(2) * (gridSize - 1)
    
    if (distance === 0) return 1.2 // Hovered entity
    if (distance === 1) return 1 // Adjacent entities
    return 0.8 + (0.2 * (distance / maxDistance)) // Other entities
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedEntity !== null && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        // Update position of dragged entity (not implemented in this example)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [draggedEntity])

  const handleMouseDown = (id: number) => setDraggedEntity(id)
  const handleMouseUp = () => setDraggedEntity(null)

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-gray-900 overflow-hidden"
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setHoveredEntity(null)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-4">
          {entities.map((entity) => (
            <motion.div
              key={entity.id}
              className={`relative ${
                entity.id % 2 === 0 ? 'rounded-full' : 'rounded-lg'
              } overflow-hidden cursor-pointer`}
              style={{
                width: 60,
                height: 60,
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
              <img
                src={entity.icon}
                alt={entity.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}