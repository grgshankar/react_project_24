import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

const FilterComponent = ({id, name, forName, label}) => {
  const [activeCheck, setActiveCheck] = useState(false);
  const handleCheckbox = () => {
    setActiveCheck(!activeCheck);
  }
  return (
    <>
    <li>
        <input type="checkbox" id={id} name={name} checked={activeCheck} onChange={handleCheckbox} />
        <label htmlFor={forName}>{label}</label>
    </li>
    </>
  )
}
FilterComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  forName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  
}

export default FilterComponent