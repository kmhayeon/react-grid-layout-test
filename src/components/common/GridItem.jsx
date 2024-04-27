import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import GraphBlock from "../common/GraphBlock";
import Title from "../common/Title";
import '../common/GridItemContainer.css'

const GridItem = forwardRef(
  (
    {
      title,
      data,
      type,
      className,
      style,
      dispatch,
      root,
      children,
      ...rest
    },
    ref
  ) => {
    const width = parseInt(style.width, 10);
    const height = parseInt(style.height, 10) - 50;
    return (
      <div className={`grid-item ${className}`} style={style} {...rest} ref={ref}>
        <div className="grid-item__title">
          <Title title={title} type={type} root={root}/>
        </div>
        <div className="grid-item__graph">
          <GraphBlock type={type} data={data} width={width} height={height} />
        </div>
        {children}
      </div>
    );
  }
);

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  root: PropTypes.string.isRequired,
  children: PropTypes.array
};

export default GridItem;
