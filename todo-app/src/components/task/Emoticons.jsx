import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const MoodButton = styled.button`
  font-size: ${(props) => (props.selected ? "1.8rem" : "1.5rem")};
  border: none;
  background: none;
  cursor: pointer;
  filter: ${(props) => (props.selected ? "drop-shadow(0 0 4px #aaa)" : "none")};
  transition: all 0.2s;
`;

function Emoticons({ selected, onSelect }) {
  const moods = ["😡", "😭", "😢", "😐", "😊", "😄", "😍"];

  return (
    <Wrapper>
      {moods.map((mood) => (
        <MoodButton
          key={mood}
          onClick={() => onSelect(mood)}
          selected={selected === mood}
        >
          {mood}
        </MoodButton>
      ))}
    </Wrapper>
  );
}

export default Emoticons;
