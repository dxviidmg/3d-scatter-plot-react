import React, { useEffect } from "react";
import Plotly from "plotly.js-dist";
import "./plot.css";

function Scatter3DPlot({ points_inside, points_outside }) {
  useEffect(() => {
    // Your Plotly code here
    const graphDiv = document.getElementById("graph");

    const trace = {
      // Your trace properties here
    };

    const data = [

      {
        mode: "markers",
        x: { points_outside }.points_outside.x,
        y: { points_outside }.points_outside.y,
        z: { points_outside }.points_outside.z,
        hoverinfo: "name+text",
        type: "scatter3d",
        name: "points_outside",
        showlegend: true,
        showscale: true,
        marker: {
          size: 5,
          line: {
            color: "blue",
          },
        },
      },

      {
        mode: "markers",
        x: { points_inside }.points_inside.x,
        y: { points_inside }.points_inside.y,
        z: { points_inside }.points_inside.z,
        hoverinfo: "name+text",
        type: "scatter3d",
        name: "points_inside",
        showlegend: true,
        showscale: true,
        marker: {
          size: 5,
          line: {
            color: "red",
          },
        },
      },

      

    ];

    const layout = {
      scene: {
        xaxis: { title: 'Variable 1' },
        yaxis: { title: 'Variable 2' },
        zaxis: { title: 'Variable 3' }
      }
    };

    console.log({ points_inside }.points_inside);
    Plotly.newPlot(graphDiv, data, layout);
  }, []);

  return <div id="graph" style={{ backgroundColor: "red" }} />;
}

export default Scatter3DPlot;
