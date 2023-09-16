import styled from "styled-components";

// Define the styles for the container
export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  /* Hide the browser's default radio button */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.color};
  border-radius: 50%;

  /* On mouse-over, add a grey background color */
  ${Container}:hover input ~ & {
    border: 2px solid black;
  }

  /* When the radio button is checked, apply the dynamic color */
  input:checked ~ & {
    border: 2px solid black;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  input:checked ~ &::after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  &::after {
    right: -5px;
    top: -10px;
    content: "✔";
  }
`;
