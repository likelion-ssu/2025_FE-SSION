import React from 'react';
import styled from 'styled-components';

const StButton = styled.button`
  padding: 8px;
`;

function Button(props) {
  const { title, onClick } = props;
  return <StButton onClick={onClick}>{title}</StButton>;
}

export default Button;
