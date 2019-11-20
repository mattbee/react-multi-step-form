import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children, onClick }) => (
  <button className={styles.wrapper} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
