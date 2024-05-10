import React, {useState, useEffect} from 'react';
import img01 from '../src/image/001.png';
import img02 from '../src/image/002.png';
import img03 from '../src/image/003.png';
import {Responsive, WidthProvider} from "react-grid-layout";
import {useRecoilState} from 'recoil';
import {breakpointState, layoutsState, layoutsStateTest} from '../src/recoil/atom';
import layoutConfigState from "./layoutConfigState";
import layoutConfigTest from "./layoutConfigTest";
import layoutTwins from "./layoutTwins";

const ResponsiveGridLayout = WidthProvider(Responsive);

const RechartsDetailTest = () => {
  const [images, setImages] = useState([img01, img02, img03]);
  const [droppedImages, setDroppedImages] = useState([]);
  const [loadingImage, setLoadingImage] = useState(null);
  const [layouts, setLayouts] = useRecoilState(layoutsStateTest);
  const [currentBreakpoint, setCurrentBreakpoint] = useRecoilState(breakpointState);
  
  useEffect(() => {
    // 드랍된 이미지 목록 불러오기
    const savedDroppedImages = localStorage.getItem('droppedImages');
    if (savedDroppedImages) {
      setDroppedImages(JSON.parse(savedDroppedImages));
    }
    
    // 현재 이미지 목록 불러오기
    const savedImages = localStorage.getItem('images');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
    else {
      setImages([img01, img02, img03]); // 로컬 스토리지에 없을 경우 초기 이미지 목록 설정
    }
  }, []);
  
  
  useEffect(() => {
    if (loadingImage) {
      setDroppedImages(prevImages => {
        const newImageObject = {
          src: loadingImage.src,
          width: loadingImage.width,
          height: loadingImage.height
        };
        const updatedImages = [...prevImages, newImageObject];
        localStorage.setItem('droppedImages', JSON.stringify(updatedImages));
        return updatedImages;
      });
      
      setImages(prevImages => {
        const updatedImages = prevImages.filter((img, index) => index !== parseInt(loadingImage.index));
        // 현재 이미지 목록 업데이트를 로컬 스토리지에 저장
        localStorage.setItem('images', JSON.stringify(updatedImages));
        return updatedImages;
      });
      
      updateLayouts(loadingImage);
      
      setLoadingImage(null);
    }
  }, [loadingImage]);
  
  
  const updateLayouts = (newImage) => {
    const newLayoutItem = {
      i: `${droppedImages.length}`,
      x: 0,
      y: Infinity, // 가장 아래에 배치
      w: Math.ceil(newImage.width / 100),
      h: Math.ceil(newImage.height / 100),
    };
    setLayouts(prevLayouts => ({
      ...prevLayouts,
      lg: [...prevLayouts.lg, newLayoutItem]
    }));
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    const imageIndex = event.dataTransfer.getData("imageId");
    const image = images[imageIndex];
    
    const tempImg = new Image();
    tempImg.onload = () => {
      const imageWidth = tempImg.width;
      const imageHeight = tempImg.height;
      setLoadingImage({
        src: image,
        width: imageWidth,
        height: imageHeight,
        index: imageIndex
      });
    };
    tempImg.onerror = () => {
      console.error('Failed to load the image:', image);
    };
    tempImg.src = image;
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  
  const getLayouts = () => {
    const savedLayouts = localStorage.getItem('layouts');
    return savedLayouts ? JSON.parse(savedLayouts) : layouts;
  };
  
  const handleBreakPointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };
  
  const handleLayoutChange = (newLayout, allLayouts) => {
    localStorage.setItem('layouts', JSON.stringify(allLayouts));
    setLayouts(allLayouts);
  };
  
  const handleDragStart = (event, image) => {
    event.dataTransfer.setData("imageId", images.indexOf(image));
  };
  
  return (
    <>
      <div style={{display: "flex"}}>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{flex: 8, backgroundColor: 'lightblue', height: '100vh'}}>
          <div>이미지 이동란</div>
          <ResponsiveGridLayout
            className="layout"
            layout={layoutConfigState.lg}
            layouts={getLayouts()}
            onBreakpointChange={handleBreakPointChange}
            onLayoutChange={handleLayoutChange}
            isDraggable
            isRearrangeable
            isResizable
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            width={1200}
          >
            {droppedImages.map((image, index) => (
              <div key={index} style={{width: `${image.width}px`, height: `${image.height}px`, overflow: 'hidden'}}>
                <img src={image.src} alt={`Dropped image ${index}`}
                     style={{width: '100%', height: '100%'}}/>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
        <div style={{flex: 4, backgroundColor: 'lightgreen', height: '100vh'}}>
          <div>이미지 첨부</div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, image)}
              style={{width: '100%', height: 'auto'}}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RechartsDetailTest;
