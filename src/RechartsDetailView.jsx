import React, {useEffect} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import {useRecoilState} from 'recoil';
import GridItemContainer from '../src/components/common/GridItemContainer';
import {dataState, breakpointState, layoutsState} from '../src/recoil/atom';
import GridLayout from "react-grid-layout";
import layoutConfigTest from "./layoutConfigTest";

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

    const layout = [
        {i: "a", x: 0, y: 0, w: 8, h: 2},
        {i: "b", x: 8, y: 0, w: 4, h: 2},
        {i: "c", x: 0, y: 0, w: 5, h: 2}
    ];



    return (
        <>
            {/*<ResponsiveGridLayout*/}
            {/*    className="layout"*/}
            {/*    layouts={getLayouts()}*/}
            {/*    onBreakpointChange={handleBreakPointChange}*/}
            {/*    onLayoutChange={handleLayoutChange}*/}
            {/*    isDraggable*/}
            {/*    isRearrangeable*/}
            {/*    isResizable*/}
            {/*    draggableHandle=".grid-item__title"*/}
            {/*    breakpoints={{lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0}}*/}
            {/*    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}*/}
            {/*    width={1200}*/}
            {/*>*/}
            {/*    {dataArray.map((item, index) => (*/}
            {/*        <GridItemContainer key={item} item={item}/>*/}
            {/*    ))}*/}
            {/*</ResponsiveGridLayout>*/}

            <ResponsiveGridLayout
                className="layout"
                layout={layoutConfigTest}
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

            {/*<GridLayout*/}
            {/*    className="layout"*/}
            {/*    layout={layoutConfigTest}*/}
            {/*    width={1200}*/}
            {/*    cols={12}*/}
            {/*>*/}
            {/*    <div key="graph1" style={{background: '#fff'}}>a</div>*/}
            {/*    <div key="graph2" style={{background: '#fff'}}>b</div>*/}
            {/*    <div key="graph3" style={{background: '#fff'}}>c</div>*/}
            {/*    <div key="graph4" style={{background: '#fff'}}>D</div>*/}
            {/*</GridLayout>*/}

            {/*<ResponsiveGridLayout*/}
            {/*    className="layout"*/}
            {/*    layout={layoutConfigTest}*/}
            {/*    width={1200}*/}
            {/*    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}*/}
            {/*    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}*/}
            {/*    // onBreakpointChange={handleBreakPointChange}*/}
            {/*    isDraggable*/}
            {/*    isRearrangeable*/}
            {/*    isResizable*/}
            {/*>*/}
            {/*    <div key="graph1" style={{background: '#fff'}}>a</div>*/}
            {/*    <div key="graph2" style={{background: '#fff'}}>b</div>*/}
            {/*    <div key="graph3" style={{background: '#fff'}}>c</div>*/}
            {/*    <div key="graph4" style={{background: '#fff'}}>D</div>*/}
            {/*</ResponsiveGridLayout>*/}

        </>
    )
        ;
};

export default RechartsDetailView;
