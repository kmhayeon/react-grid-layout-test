import React from 'react';
import PropTypes from 'prop-types';

const TypeItem = ({ type, value, label, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };
  
  return (
    <div
      className={`type-item ${value === type ? "selected" : ""}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

TypeItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TypeItem;
