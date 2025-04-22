'use client';

import React, { useState, useRef } from 'react';
import { Tooltip } from './Tooltip';
import MapChart from './MapChart';

const WorldMap = () => {
  const [content, setContent] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  const handleMouseEnter = (event, name) => {
    setContent(name);

    const mapRect = mapRef.current.getBoundingClientRect();

    setPosition({
      x: event.clientX - mapRect.left + 10,
      y: event.clientY - mapRect.top - 30,
    });
  };

  const handleMouseLeave = () => {
    setContent('');
  };

  return (
    <main className='min-h-dvh relative'>
      <div ref={mapRef}>
        <MapChart
          setTooltipContent={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <Tooltip tooltipText={content} position={position} />
    </main>
  );
};

export default WorldMap;
