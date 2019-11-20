import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputWithLabel.module.scss';

const InputWithLabel = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
}) => (
  <>
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        className={styles.input}
      />
    </label>
    {error && <div>{error}</div>}
  </>
);

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default InputWithLabel;
