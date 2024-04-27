import {useEffect, useState} from "react";
import {Responsive, WidthProvider} from "react-grid-layout";
import styled from "styled-components";
import BarChart from "./chartjs/BarChart";
import BubbleChart from "./chartjs/BubbleChart";
import PieChart from "./chartjs/PieChart";
import LineChart from "./chartjs/LineChart";
import RadarChart from "./chartjs/RadarChart";
import ScatterChart from "./chartjs/Scatter Chart";
import {useRecoilState} from "recoil";
import {breakpointStates, chartLayoutState} from "./recoil/atom";

const ResponsiveGridLayout = WidthProvider(Responsive)

export const ChartjsDetailView = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useRecoilState(breakpointStates);
  const [layouts, setLayouts] = useRecoilState(chartLayoutState);
  
  console.log('layouts',layouts)
  
  useEffect(() => {
    const savedLayouts = localStorage.getItem('grid-layout');
    if (savedLayouts) {
      setLayouts(JSON.parse(savedLayouts));
    }
  }, []);
  
  const getLayouts = () => {
    const savedLayouts = localStorage.getItem('grid-layout');
    return savedLayouts ? JSON.parse(savedLayouts) : layouts;
  };
  
  const handleLayoutChange = (newLayout, allLayouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(allLayouts));
    setLayouts(allLayouts);
  };
  
  const handleBreakPointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };
  
  return (
    <Root>
      <ResponsiveGridLayout
        layouts={getLayouts()}
        onBreakpointChange={handleBreakPointChange}
        onLayoutChange={handleLayoutChange}
        isDraggable
        isRearrangeable
        isResizable
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 4, md: 3, sm: 2, xs: 2, xxs: 1}}
        width={1200}
      >
        <GridItemWrapper key="bar-chart">
          <GridItemContent>Bar Chart</GridItemContent>
          <BarChart options={{ responsive: true, maintainAspectRatio: false }} />
        </GridItemWrapper>
        <GridItemWrapper key="bubble-chart">
          <GridItemContent>Bubble Chart</GridItemContent>
          <BubbleChart options={{ responsive: true }} />
        </GridItemWrapper>
        <GridItemWrapper key="pie-chart">
          <GridItemContent>Pie Chart</GridItemContent>
          <PieChart options={{ responsive: true }} />
        </GridItemWrapper>
        <GridItemWrapper key="line-chart">
          <GridItemContent>Line Chart</GridItemContent>
          <LineChart options={{ responsive: true }} />
        </GridItemWrapper>
        <GridItemWrapper key="radar-chart">
          <GridItemContent>Radar Chart</GridItemContent>
          <RadarChart options={{ responsive: true }} />
        </GridItemWrapper>
        <GridItemWrapper key="scatter-chart">
          <GridItemContent>Scatter Chart</GridItemContent>
          <ScatterChart options={{ responsive: true }} />
        </GridItemWrapper>
        {/*<GridItemWrapper key="scatter-chart">*/}
        {/*  <GridItemContent>Scatter Chart</GridItemContent>*/}
        {/*  <ScatterChart options={{ responsive: true }} />*/}
        {/*</GridItemWrapper>*/}
      </ResponsiveGridLayout>
    </Root>
  );
};


const GridItemWrapper = styled.div`
    background: #f5f5f5;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const GridItemContent = styled.div`
  padding: 8px;
  box-sizing: border-box;
  //height: 100%;  // GridItemWrapper 내에서 전체 높이를 사용
`;

const Root = styled.div`
    padding: 16px;
`;
