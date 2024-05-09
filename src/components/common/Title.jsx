import React from 'react';
import PropTypes from 'prop-types';
import {DropdownButton, Panel, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import TypeItem from '../common/TypeItem';
import {setType} from '../../recoil/atom';

import '../common/GridItemContainer.css'


export const graphTypes = [
  {
    label: "Line",
    value: "line"
  },
  {
    label: "Pie",
    value: "pie"
  },
  {
    label: "Area",
    value: "area"
  },
  {
    label: "Bar",
    value: "bar"
  }
];


const Title = ({root, title}) => {
  const [type, setTypeAction] = useRecoilState(setType(root));

  const handleClick = value => {
    setTypeAction(value);
  };

  return (
    // <DropdownButton className="title-dropdown" title={title}>
    <div className="title-dropdown">
      {title}
      {/*<li>*/}
      {/*  <Link to={`/${root}/view`}>View</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to={`/${root}/layout`}>Layout</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to={`/${root}/edit`}>Edit</Link>*/}
      {/*</li>*/}
      {/*<MenuItem>*/}
      {/*  <Panel id="collapsible-type-panel" defaultExpanded>*/}
      {/*    <Panel.Heading>*/}
      {/*      <Panel.Title toggle>Type</Panel.Title>*/}
      {/*    </Panel.Heading>*/}
      {/*    <Panel.Collapse>*/}
      {/*      <Panel.Body>*/}
      {/*        {graphTypes.map(({label, value}) => (*/}
      {/*          <TypeItem*/}
      {/*            key={value}*/}
      {/*            onClick={() => handleClick(value)}*/}
      {/*            type={type}*/}
      {/*            value={value}*/}
      {/*            label={label}*/}
      {/*          />*/}
      {/*        ))}*/}
      {/*      </Panel.Body>*/}
      {/*    </Panel.Collapse>*/}
      {/*  </Panel>*/}
      {/*</MenuItem>*/}
    {/*</DropdownButton>*/}
    </div>
  );
};

Title.propTypes = {
  root: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Title;
