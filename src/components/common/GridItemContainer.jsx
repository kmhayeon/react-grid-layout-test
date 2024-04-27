import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {useRecoilValue} from 'recoil';
import GridItem from '../common/GridItem';
import {dataState} from '../../recoil/atom';

const GridItemContainer = forwardRef(({item, children, ...props}, ref) => {
  const allData = useRecoilValue(dataState);
  const {title, type, data} = allData[item] || {title: '', type: '', data: []};
  return (
    <GridItem ref={ref} title={title} type={type} data={data} root={item} {...props}>
      {children}
    </GridItem>
  );
});

GridItemContainer.propTypes = {
  item: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default GridItemContainer;

