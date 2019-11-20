import React from 'react';
import PropTypes from 'prop-types';

import styles from './radioButtonsWithLegend.module.scss';

const RadioButtonsWithLegend = ({ name, legend, options, error, onChange }) => (
  <fieldset className={styles.wrapper}>
    <legend className={styles.legend}>{legend}</legend>
    {options.map((option) => (
      <label key={`${option.value}-${option.label}`} className={styles.label}>
        <input
          type="radio"
          name={name}
          value={option.value}
          onChange={onChange}
        />
        {option.label}
      </label>
    ))}
    {error && <div>{error}</div>}
  </fieldset>
);

RadioButtonsWithLegend.propTypes = {
  name: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })),
};

export default RadioButtonsWithLegend;
