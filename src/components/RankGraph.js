import React, { useState } from "react";
import "../RankGraph.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RankGraph = ({ standing, color }) => {
  const data = [];
  const [arrangeData, setArrangeData] = useState("asc");

  const table = standing.table;

  if (arrangeData === "asc") {
    for (let i = 0; i < table.length; i++) {
      let rank = {
        name: table[i].team.name,
        position: table[i].position,
        played: table[i].playedGames,
        won: table[i].won,
        lost: table[i].lost,
        draw: table[i].draw,
        points: table[i].points,
        logo: table[i].team.crestUrl,
      };
      data.push(rank);
    }
  } else {
    for (let i = table.length - 1; i > -1; i--) {
      let rank = {
        name: table[i].team.name,
        position: table[i].position,
        played: table[i].playedGames,
        won: table[i].won,
        lost: table[i].lost,
        draw: table[i].draw,
        points: table[i].points,
        logo: table[i].team.crestUrl,
      };
      data.push(rank);
    }
  }

  const changeOrder = () => {
    if (arrangeData === "asc") {
      setArrangeData("desc");
    } else {
      setArrangeData("asc");
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      //console.log(payload);
      return (
        <div className="tooltipContainer">
          <p className="toolTipLabel">{label}</p>
          <img
            className="toolTipImage"
            src={payload[0].payload.logo}
            alt="TeamLogo"
          />
          <div className="toolTipStatsContainer">
            <p className="toolTipStats">
              <strong>GP</strong>
              <br />
              {payload[0].payload.played}
            </p>
            <p className="toolTipStats">
              <strong>W</strong>
              <br />
              {payload[0].payload.won}
            </p>
            <p className="toolTipStats">
              <strong>L</strong>
              <br />
              {payload[0].payload.lost}
            </p>
            <p className="toolTipStats">
              <strong>D</strong>
              <br />
              {payload[0].payload.draw}
            </p>
            <p className="toolTipStats">
              <strong>Pos</strong>
              <br />
              {payload[0].payload.position}
            </p>
            <p className="toolTipStats">
              <strong>P</strong>
              <br />
              {payload[0].payload.points}
            </p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        border: "1px solid",
        backgroundColor: "lightcoral",
        margin: "3em",
      }}
    >
      <button onClick={() => changeOrder()}>{arrangeData}</button>
      <p>
        {standing.type} {standing.group}
      </p>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} layout="vertical" barCategoryGap="15%">
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="points" type="number" />
          <YAxis
            dataKey="name"
            type="category"
            width={100}
            tick={{ fontSize: 14 }}
          />
          <Tooltip content={<CustomTooltip />} style={{ width: 100 }} />
          <Bar
            dataKey="points"
            fill={color}
            animationDuration={800}
            radius={[0, 10, 10, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RankGraph;
