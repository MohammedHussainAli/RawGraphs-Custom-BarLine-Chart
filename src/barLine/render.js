import * as d3 from 'd3';
import { legend } from '@rawgraphs/rawgraphs-core';
import '../d3-styles.js';

export function render(
  node,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  const {
    background,
    width,
    height,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    barColor,
    lineColor,
    padding,
    showPoints,
    dotsDiameter,
    tickRotation,
    dataLabelBar, 
    dataLabelLine, 
    dataLabelPositionBar,
    dataLabelPositionLine,
    dataLabelFontSize,
    dataLabelColor,
    dataLabelVerticalPositionBar,
    dataLabelVerticalPositionLine,
    dataLabelOffsetX,
    dataLabelOffsetY
  } = visualOptions;

  // Grid Colors (Optional)
  const axisColor = '#555';
  const gridColor = '#eee';

  const svg = d3.select(node)
    .attr('width', width)
    .attr('height', height)
    .style('background', background)
    .style('border-radius', '8px')
    .style('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.15)');

  // Add a white background rectangle with rounded corners
  svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', background)
    .attr('rx', 8)
    .attr('ry', 8);

  // Define gradient for bars
  const gradient = svg.append('defs')
    .append('linearGradient')
    .attr('id', 'barGradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '0%')
    .attr('y2', '100%');

  gradient.append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#6a11cb');

  gradient.append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#2575fc');

  const bounds = svg.append('g')
    .attr('transform', `translate(${marginLeft}, ${marginTop})`);

  // X Scale (Band scale for bars)
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.x))
    .range([0, width - marginLeft - marginRight])
    .padding(padding / ((height - marginTop - marginBottom) / data.length));

  // Y Scale for Bars (Primary Y Axis)
  const y1Max = d3.max(data, d => d.bar);
  const y1Scale = d3.scaleLinear()
    .domain([0, y1Max])
    .range([height - marginTop - marginBottom, 0]);

  // Y Scale for Line (Secondary Y Axis)
  const y2Max = d3.max(data, d => d.line);
  const y2Scale = d3.scaleLinear()
    .domain([0, y2Max])
    .range([height - marginTop - marginBottom, 0]);

  // Add grid lines for the primary Y axis
  bounds.append('g')
    .attr('class', 'grid')
    .selectAll('line')
    .attr('stroke', gridColor)
    .attr('stroke-width', 0.5);

  // Draw Bars with gradient fill and smooth transitions
  const bars = bounds.selectAll('.bar')
    .data(data)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.x))
    .attr('y', height - marginTop - marginBottom) // Start from the bottom
    .attr('width', xScale.bandwidth())
    .attr('height', 0) // Start with zero height
    .attr('fill', barColor)
    .attr('rx', 4) // Rounded corners for top of bars
    .attr('ry', 4)
    .attr('rx', d => (y1Scale(d.bar) === height - marginTop - marginBottom ? 0 : 4)) // Remove border radius at the bottom
    .attr('ry', d => (y1Scale(d.bar) === height - marginTop - marginBottom ? 0 : 4))
    .transition() // Smooth transition
    .duration(800)
    .attr('y', d => y1Scale(d.bar))
    .attr('height', d => height - marginTop - marginBottom - y1Scale(d.bar));

  // Draw Line with smooth interpolation and gradient-filled area
  const line = d3.line()
    .x(d => xScale(d.x) + xScale.bandwidth() / 2)
    .y(d => y2Scale(d.line))
    .curve(d3.curveMonotoneX); // Smooth curve

  bounds.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', lineColor)
    .attr('stroke-width', 3)
    .attr('d', line);

  // Add data points to the line if showPoints is true
  if (showPoints) {
    bounds.selectAll('.dot')
      .data(data)
      .join('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(d.x) + xScale.bandwidth() / 2)
      .attr('cy', d => y2Scale(d.line))
      .attr('r', dotsDiameter / 2) // Set radius based on dotsDiameter
      .attr('fill', lineColor)
      .attr('stroke', '#fff') // White border for better visibility
      .attr('stroke-width', 2);
  }

// X Axis with custom styling
const xAxis = bounds.append('g')
  .attr('transform', `translate(0,${height - marginTop - marginBottom})`)
  .call(d3.axisBottom(xScale))
  .attr('color', axisColor);

// Rotate X-axis ticks only if tickRotation is not 0
xAxis.selectAll('text')
  .style('font-size', '12px')
  .style('font-family', 'Roboto, sans-serif')
  .attr('transform', tickRotation !== 0 ? `rotate(${tickRotation})` : null) // Apply rotation only if not 0
  .attr('text-anchor', tickRotation < 0 ? 'end' : 'start') // Adjust text anchor based on rotation
  .attr('dx', tickRotation < 0 ? '-0.5em' : '-0.8em') // Adjust horizontal offset
  .attr('dy', tickRotation < 0 ? '0.5em' : '0.7em'); // Adjust vertical offset

  // Primary Y Axis (for Bars)
  bounds.append('g')
    .call(d3.axisLeft(y1Scale))
    .attr('color', axisColor)
    .selectAll('text')
    .style('font-size', '12px')
    .style('font-family', 'Roboto, sans-serif');

  // Secondary Y Axis (for Line)
  bounds.append('g')
    .attr('transform', `translate(${width - marginLeft - marginRight}, 0)`)
    .call(d3.axisRight(y2Scale))
    .attr('color', axisColor)
    .selectAll('text')
    .style('font-size', '12px')
    .style('font-family', 'Roboto, sans-serif');

    if (dataLabelBar) {
      bounds.selectAll('.bar-label')
        .data(data)
        .join('text')
        .attr('class', 'bar-label')
        .attr('x', d => {
          // Adjust horizontal position based on dataLabelPositionBar
          if (dataLabelPositionBar === 'start') {
            return xScale(d.x) + 5 + (dataLabelOffsetX || 0); // Start of the bar (left-aligned) + offset
          } else if (dataLabelPositionBar === 'center') {
            return xScale(d.x) + xScale.bandwidth() / 2 + (dataLabelOffsetX || 0); // Center of the bar + offset
          } else if (dataLabelPositionBar === 'end') {
            return xScale(d.x) + xScale.bandwidth() - 5 + (dataLabelOffsetX || 0); // End of the bar (right-aligned) + offset
          }
        })
        .attr('y', d => {
          // Adjust vertical position based on dataLabelVerticalPositionBar
          if (dataLabelVerticalPositionBar === 'top') {
            return y1Scale(d.bar) - 5 + (dataLabelOffsetY || 0); // Top of the bar + offset
          } else if (dataLabelVerticalPositionBar === 'middle') {
            return y1Scale(d.bar) + (height - marginTop - marginBottom - y1Scale(d.bar)) / 2 + (dataLabelOffsetY || 0); // Middle of the bar + offset
          } else if (dataLabelVerticalPositionBar === 'bottom') {
            return height - marginTop - marginBottom - 5 + (dataLabelOffsetY || 0); // Bottom of the bar + offset
          }
        })
        .attr('text-anchor', d => {
          // Adjust text anchor based on horizontal position
          if (dataLabelPositionBar === 'start') {
            return 'start'; // Left-aligned
          } else if (dataLabelPositionBar === 'center') {
            return 'middle'; // Center-aligned
          } else if (dataLabelPositionBar === 'end') {
            return 'end'; // Right-aligned
          }
        })
        .attr('font-size', dataLabelFontSize) // Use dataLabelFontSize for font size
        .attr('fill', dataLabelColor) // Use dataLabelColor for color
        .text(d => d.bar);
    }
  
    // Add data labels for line if dataLabelLine is true
    if (dataLabelLine) {
      bounds.selectAll('.line-label')
        .data(data)
        .join('text')
        .attr('class', 'line-label')
        .attr('x', d => {
          // Adjust horizontal position based on dataLabelPositionLine
          if (dataLabelPositionLine === 'start') {
            return xScale(d.x) + 5 + (dataLabelOffsetX || 0); // Start of the line point (left-aligned) + offset
          } else if (dataLabelPositionLine === 'center') {
            return xScale(d.x) + xScale.bandwidth() / 2 + (dataLabelOffsetX || 0); // Center of the line point + offset
          } else if (dataLabelPositionLine === 'end') {
            return xScale(d.x) + xScale.bandwidth() - 5 + (dataLabelOffsetX || 0); // End of the line point (right-aligned) + offset
          }
        })
        .attr('y', d => {
          // Adjust vertical position based on dataLabelVerticalPositionLine
          if (dataLabelVerticalPositionLine === 'top') {
            return y2Scale(d.line) - 10 + (dataLabelOffsetY || 0); // Top of the line point + offset
          } else if (dataLabelVerticalPositionLine === 'middle') {
            return y2Scale(d.line) + (dataLabelOffsetY || 0); // Middle of the line point + offset
          } else if (dataLabelVerticalPositionLine === 'bottom') {
            return y2Scale(d.line) + 10 + (dataLabelOffsetY || 0); // Bottom of the line point + offset
          }
        })
        .attr('text-anchor', d => {
          // Adjust text anchor based on horizontal position
          if (dataLabelPositionLine === 'start') {
            return 'start'; // Left-aligned
          } else if (dataLabelPositionLine === 'center') {
            return 'middle'; // Center-aligned
          } else if (dataLabelPositionLine === 'end') {
            return 'end'; // Right-aligned
          }
        })
        .attr('font-size', dataLabelFontSize) 
        .attr('fill', dataLabelColor) 
        .text(d => d.line);
    }
}