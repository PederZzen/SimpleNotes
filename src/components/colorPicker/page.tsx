import React from "react";
import { Checkmark, Container } from "./style";

export default function ColorPicker({ checkedColor }: any) {
  return (
    <Container>
      <input type="radio" name="radio" />
      <Checkmark color={checkedColor} />
    </Container>
  );
}
