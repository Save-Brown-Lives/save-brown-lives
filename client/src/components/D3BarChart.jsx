import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const D3BarChart = () => {
  // 1. Create a ref to attach to the SVG element
  const svgRef = useRef(null);

  useEffect(() => {
    // 2. Load data from the public directory
    d3.json("/data.json")
      .then((data) => {
        if (!data || data.length === 0) {
          console.warn("Data is empty or failed to load.");
          return;
        }

        const margin = { top: 20, right: 30, bottom: 40, left: 60 };
        const width = 500 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        // 3. Select the SVG element using the ref and clean up previous drawings
        const svg = d3
          .select(svgRef.current)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom);

        svg.selectAll("*").remove(); // Clear previous elements

        const g = svg
          .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

        // 4. Define Scales
        const xScale = d3
          .scaleBand()
          .domain(data.map((d) => d.race))
          .range([0, width])
          .padding(0.2);

        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max(data, (d) => d.percentage)])
          .range([height, 0]);

        // 5. Draw Axes
        g.append("g")
          .attr("transform", `translate(0,${height})`)
          .call(d3.axisBottom(xScale));

        g.append("g").call(d3.axisLeft(yScale).tickFormat((d) => d + "%"));

        // 6. Draw Bars (Data Join)
        g.selectAll(".bar")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("x", (d) => xScale(d.race))
          .attr("y", (d) => yScale(d.percentage))
          .attr("width", xScale.bandwidth())
          .attr("height", (d) => height - yScale(d.percentage))
          .attr("fill", "#D4232B"); // Using your primary red color
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this runs only once after mount

  // 7. Render the container SVG element
  return (
    <div className="chart-container">
      <h3>Racial Disparity in Exonerations</h3>
      <svg ref={svgRef} />
    </div>
  );
};

export default D3BarChart;
