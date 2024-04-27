import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
  RadialBarChart,
  RadialBar,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

const GraphBlock = ({type, data, width, height}) => {
  switch (type) {
    case "pie":
      return (
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="time"
            isAnimationActive={false}
          >
            {data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={entry.color}/>
            })}
          < /Pie>
        </PieChart>
      );
    case "line":
      return (
        <LineChart
          width={width}
          height={height}
          data={data}
          margin={{left: 10, right: 10}}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1}/>
          <XAxis dataKey="time"/>
          <YAxis dataKey="value" mirror/>
          <Line
            type="monotone"
            dataKey="value"
            stroke="rgba(249,140,15,0.79)"
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      );
    case "bar":
      return (
        <BarChart width={width} height={height} data={data} margin={{left: 10, right: 10}}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1}/>
          <XAxis dataKey="time"/>
          <YAxis dataKey="value" mirror/>
          <Bar dataKey="value" isAnimationActive={false}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color}/>
            ))}
          </Bar>
        </BarChart>
      );
    case "area":
      return (
        <AreaChart
          width={width}
          height={height}
          data={data}
          margin={{left: 10, right: 10}}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1}/>
          <XAxis dataKey="time"/>
          <YAxis dataKey="value" mirror/>
          <Area
            dataKey="value"
            fill="#DCFBF1"
            stroke="#15D1AC"
            isAnimationActive={false}
          />
        </AreaChart>
      );
    case "radialBar":
      return (
        <RadialBarChart width={width} height={height} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10}
                        data={data}>
          <RadialBar minAngle={15} background clockWise dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color}/>
            ))}
          </RadialBar>
        </RadialBarChart>
      );
    case "scatterChart":
      return (
        <ScatterChart
          width={width}
          height={height}
          margin={{
            top: 20,
            right: 30,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid/>
          <XAxis type="number" dataKey="x" name="stature" unit="cm"/>
          <YAxis type="number" dataKey="y" name="weight" unit="kg"/>
          <Scatter name="A school" data={data} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color}/>
            ))}
          </Scatter>
        </ScatterChart>
      );
    case "radarChart":
      return (
        <RadarChart
          width={width}
          height={height}
          cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid/>
          <PolarAngleAxis dataKey="time"/>
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" fill="#D5ECFF" stroke="#1B98FF" fillOpacity={0.6}/>
        </RadarChart>
      );
    default:
      return null;
  }
};

GraphBlock.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default GraphBlock;
