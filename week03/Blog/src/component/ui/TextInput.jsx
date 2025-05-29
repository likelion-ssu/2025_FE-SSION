import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ value, onChange, placeholder, className, ...props }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
