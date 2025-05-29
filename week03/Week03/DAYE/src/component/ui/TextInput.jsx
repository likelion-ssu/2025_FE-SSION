import React from 'react';
import styled from 'styled-components';

const StTextarea = styled.textarea`
  width: 1530px;
  height: ${props => props.height}px;
`;

function TextInput(props) {
  const { height, value, onChange } = props;
  return <StTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
