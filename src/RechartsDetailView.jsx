import React, {useEffect} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import {useRecoilState} from 'recoil';
import GridItemContainer from '../src/components/common/GridItemContainer';
import {dataState, breakpointState, layoutsState} from '../src/recoil/atom';

const ResponsiveGridLayout = WidthProvider(Responsive);

const RechartsDetailView = () => {
  const [data, setData] = useRecoilState(dataState);
  const [currentBreakpoint, setCurrentBreakpoint] = useRecoilState(breakpointState);
  const [layouts, setLayouts] = useRecoilState(layoutsState);
  const dataArray = Object.keys(data);
  
  useEffect(() => {
    const savedLayouts = localStorage.getItem('layouts');
    if (savedLayouts) {
      setLayouts(JSON.parse(savedLayouts));
    }
  }, []);
  
  const getLayouts = () => {
    const savedLayouts = localStorage.getItem('layouts');
    return savedLayouts ? JSON.parse(savedLayouts) : layouts;
  };
  
  const handleLayoutChange = (newLayout, allLayouts) => {
    localStorage.setItem('layouts', JSON.stringify(allLayouts));
    setLayouts(allLayouts);
  };
  
  const handleBreakPointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };
  
  
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={getLayouts()}
      onBreakpointChange={handleBreakPointChange}
      onLayoutChange={handleLayoutChange}
      isDraggable
      isRearrangeable
      isResizable
      draggableHandle=".grid-item__title"
      breakpoints={{lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
      width={1200}
    >
      {dataArray.map((item, index) => (
        <GridItemContainer key={item} item={item}/>
      ))}
    </ResponsiveGridLayout>
  )
    ;
};

export default RechartsDetailView;
