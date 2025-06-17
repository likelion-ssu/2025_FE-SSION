import React from 'react';
import styles from '../../styles/Button.module.css';
import PropTypes from 'prop-types';


function Button({ children, onClick, type = 'button', className }) {
  return (
    <button
      className={className ? `${styles.button} ${className}` : styles.button}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
