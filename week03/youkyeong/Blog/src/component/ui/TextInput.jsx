import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  margin-top: 8px;
  height: ${(props) => props.height || "auto"};
`;

export default function TextInput({
  value,
  onChange,
  placeholder = "",
  height,
}) {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      height={height}
    />
  );
}
