'use client';

import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { geoCylindricalStereographic } from 'd3-geo-projection';

const MapChart = ({ setTooltipContent, onMouseLeave }) => {
  const width = 800;
  const height = 500;

  const projection = geoCylindricalStereographic()
    .translate([width / 2, height / 2])
    .scale(125);

  return (
    <ComposableMap
      viewBox='0 0 800 410'
      data-tip=''
      projection={projection}
      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-full'
    >
      <Geographies geography='/features.json'>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={(event) => {
                const { NAME } = geo.properties;
                setTooltipContent(event, NAME);
              }}
              onMouseLeave={onMouseLeave}
              onClick={() => {
                setTooltipContent('');
              }}
              style={{
                default: {
                  fill: geo.properties.VISITED ? '#C4B7A0' : '#FEEFD8',
                  outline: '#A28A6D',
                  stroke: '#A28A6D',
                  strokeWidth: 0.5,
                },
                hover: {
                  fill: geo.properties.VISITED ? '#B29F85' : '#DACBB2',
                  outline: '#A28A6D',
                  stroke: '#A28A6D',
                  strokeWidth: 0.5,
                },
                pressed: {
                  fill: geo.properties.VISITED ? '#B29F85' : '#DACBB2',
                  outline: '#A28A6D',
                  stroke: '#A28A6D',
                  strokeWidth: 0.5,
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
